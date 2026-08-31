import { brazilDate, query } from "./database.server";
import { clearSessionCookie, createSessionCookie, getSession } from "./session.server";

type MenuRow = {
  id: string;
  name: string;
  price_cents: number;
  category: string;
  description: string | null;
};
type SideDishRow = { id: string; name: string; is_available: boolean };

const json = (body: unknown, init: ResponseInit = {}) => {
  const headers = new Headers(init.headers);
  headers.set("cache-control", "no-store");
  return Response.json(body, { ...init, headers });
};

async function requestBody(request: Request) {
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

async function requireAdmin(request: Request) {
  const session = await getSession(request);
  if (!session) return null;
  const users = await query<{ id: string }>("select id from admin_users where id = $1", [
    session.userId,
  ]);
  return users[0] ?? null;
}

async function publicMenu() {
  const date = brazilDate();
  const [items, sides, daily] = await Promise.all([
    query<MenuRow>(
      "select id, name, price_cents, category, description from menu_items where is_active = true order by name",
    ),
    query<SideDishRow>(
      `select sd.id, sd.name, coalesce(dsd.is_available, true) as is_available
       from side_dishes sd left join daily_side_dishes dsd
         on dsd.side_dish_id = sd.id and dsd.service_date = $1
       where sd.is_active = true order by sd.name`,
      [date],
    ),
    query<MenuRow>(
      `select mi.id, mi.name, mi.price_cents, mi.category, mi.description
       from daily_menus dm join menu_items mi on mi.id = dm.daily_dish_id
       where dm.service_date = $1 and mi.is_active = true`,
      [date],
    ),
  ]);
  const toMenuItem = (item: MenuRow) => ({
    id: item.id,
    name: item.name,
    price: item.price_cents / 100,
    description: item.description ?? undefined,
  });
  return {
    date,
    items: items.map(toMenuItem),
    sideDishes: sides.filter((side) => side.is_available),
    dailyDish: daily[0] ? toMenuItem(daily[0]) : null,
  };
}

export async function handleApiRequest(request: Request): Promise<Response | null> {
  const { pathname } = new URL(request.url);
  if (!pathname.startsWith("/api/")) return null;

  try {
    if (pathname === "/api/menu/today" && request.method === "GET") return json(await publicMenu());

    if (pathname === "/api/auth/login" && request.method === "POST") {
      const body = await requestBody(request);
      if (!isString(body.email) || !isString(body.password))
        return json({ message: "E-mail e senha são obrigatórios." }, { status: 400 });
      const users = await query<{ id: string }>(
        "select id from admin_users where email = lower($1) and password_hash = crypt($2, password_hash)",
        [body.email.trim(), body.password],
      );
      if (!users[0]) return json({ message: "E-mail ou senha inválidos." }, { status: 401 });
      return json(
        { ok: true },
        { headers: { "set-cookie": await createSessionCookie(users[0].id) } },
      );
    }

    if (pathname === "/api/auth/logout" && request.method === "POST") {
      return json({ ok: true }, { headers: { "set-cookie": clearSessionCookie() } });
    }

    const admin = await requireAdmin(request);
    if (!admin) return json({ message: "Sessão de administrador necessária." }, { status: 401 });

    if (pathname === "/api/admin/day" && request.method === "GET") {
      const date = brazilDate();
      const [items, sides, selected] = await Promise.all([
        query<MenuRow>(
          "select id, name, price_cents, category, description from menu_items where is_active = true and category = 'daily_dish' order by name",
        ),
        query<SideDishRow>(
          `select sd.id, sd.name, coalesce(dsd.is_available, true) as is_available
           from side_dishes sd left join daily_side_dishes dsd on dsd.side_dish_id = sd.id and dsd.service_date = $1
           where sd.is_active = true order by sd.name`,
          [date],
        ),
        query<{ daily_dish_id: string | null }>(
          "select daily_dish_id from daily_menus where service_date = $1",
          [date],
        ),
      ]);
      return json({
        date,
        dailyDishId: selected[0]?.daily_dish_id ?? null,
        dishes: items,
        sideDishes: sides,
      });
    }

    if (pathname === "/api/admin/day" && request.method === "PUT") {
      const body = await requestBody(request);
      const date = brazilDate();
      if (!isString(body.dailyDishId) || !Array.isArray(body.sideDishes))
        return json({ message: "Dados do cardápio inválidos." }, { status: 400 });
      const validDish = await query<{ id: string }>(
        "select id from menu_items where id = $1 and category = 'daily_dish' and is_active = true",
        [body.dailyDishId],
      );
      if (!validDish[0]) return json({ message: "Prato do dia inválido." }, { status: 400 });
      await query(
        `insert into daily_menus (service_date, daily_dish_id, updated_by) values ($1, $2, $3)
         on conflict (service_date) do update set daily_dish_id = excluded.daily_dish_id, updated_by = excluded.updated_by, updated_at = now()`,
        [date, body.dailyDishId, admin.id],
      );
      for (const side of body.sideDishes) {
        if (!side || typeof side !== "object") continue;
        const { id, isAvailable } = side as { id?: unknown; isAvailable?: unknown };
        if (!isString(id) || typeof isAvailable !== "boolean") continue;
        await query(
          `insert into daily_side_dishes (service_date, side_dish_id, is_available, updated_by) values ($1, $2, $3, $4)
           on conflict (service_date, side_dish_id) do update set is_available = excluded.is_available, updated_by = excluded.updated_by, updated_at = now()`,
          [date, id, isAvailable, admin.id],
        );
      }
      return json({ ok: true });
    }
    return json({ message: "Rota não encontrada." }, { status: 404 });
  } catch (error) {
    console.error("API Sabores da Andréia", error);
    return json({ message: "Não foi possível acessar o banco de dados." }, { status: 503 });
  }
}
