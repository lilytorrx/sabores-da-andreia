import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";

type Dish = { id: string; name: string; price_cents: number };
type SideDish = { id: string; name: string; is_available: boolean };
type Day = { date: string; dailyDishId: string | null; dishes: Dish[]; sideDishes: SideDish[] };

export const Route = createFileRoute("/admin")({ component: Admin });

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState<Day | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    const response = await fetch("/api/admin/day");
    if (!response.ok) return;
    setDay(await response.json());
  };

  useEffect(() => {
    void load();
  }, []);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (!response.ok) {
      setMessage((await response.json()).message ?? "Não foi possível entrar.");
      return;
    }
    setPassword("");
    setMessage("");
    await load();
  };

  const save = async () => {
    if (!day?.dailyDishId) return setMessage("Escolha o prato do dia antes de salvar.");
    setLoading(true);
    const response = await fetch("/api/admin/day", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        dailyDishId: day.dailyDishId,
        sideDishes: day.sideDishes.map(({ id, is_available }) => ({
          id,
          isAvailable: is_available,
        })),
      }),
    });
    setLoading(false);
    setMessage(
      response.ok
        ? "Cardápio de hoje atualizado."
        : ((await response.json()).message ?? "Não foi possível salvar."),
    );
  };

  if (!day)
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <form
          onSubmit={login}
          className="w-full max-w-sm rounded-3xl border border-rose-soft bg-card p-7 shadow-sm"
        >
          <p className="font-script text-3xl text-rose">Sabores da Andréia</p>
          <h1 className="mt-1 font-serif text-2xl font-bold">Painel administrativo</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre para definir o prato e os acompanhamentos de hoje.
          </p>
          <label className="mt-5 block text-sm font-semibold">
            E-mail
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-rose-soft bg-background px-3 py-2"
            />
          </label>
          <label className="mt-3 block text-sm font-semibold">
            Senha
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="mt-1 w-full rounded-xl border border-rose-soft bg-background px-3 py-2"
            />
          </label>
          {message && <p className="mt-3 text-sm text-destructive">{message}</p>}
          <button
            disabled={loading}
            className="mt-5 w-full rounded-full bg-rose px-4 py-3 font-semibold text-primary-foreground disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </main>
    );

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm font-semibold text-rose hover:underline">
          ← Ver cardápio
        </a>
        <p className="mt-5 font-script text-3xl text-rose">Painel do dia</p>
        <h1 className="font-serif text-3xl font-bold">
          Cardápio de {day.date.split("-").reverse().join("/")}
        </h1>
        <section className="mt-6 rounded-3xl border border-rose-soft bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold">Prato do dia</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {day.dishes.map((dish) => (
              <label
                key={dish.id}
                className={`cursor-pointer rounded-xl border p-3 ${day.dailyDishId === dish.id ? "border-rose bg-rose-soft/30" : "border-rose-soft"}`}
              >
                <input
                  className="mr-2"
                  type="radio"
                  name="dish"
                  checked={day.dailyDishId === dish.id}
                  onChange={() => setDay({ ...day, dailyDishId: dish.id })}
                />
                {dish.name}
              </label>
            ))}
          </div>
        </section>
        <section className="mt-4 rounded-3xl border border-rose-soft bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold">Acompanhamentos disponíveis</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Desmarque um item quando ele acabar; a alteração aparece imediatamente no cardápio
            público.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {day.sideDishes.map((side) => (
              <label
                key={side.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-rose-soft p-3"
              >
                <input
                  type="checkbox"
                  checked={side.is_available}
                  onChange={() =>
                    setDay({
                      ...day,
                      sideDishes: day.sideDishes.map((item) =>
                        item.id === side.id ? { ...item, is_available: !item.is_available } : item,
                      ),
                    })
                  }
                />
                <span>{side.name}</span>
                <span
                  className={`ml-auto text-xs font-semibold ${side.is_available ? "text-whatsapp" : "text-muted-foreground"}`}
                >
                  {side.is_available ? "Disponível" : "Indisponível"}
                </span>
              </label>
            ))}
          </div>
        </section>
        {message && <p className="mt-4 text-sm font-semibold text-rose">{message}</p>}
        <button
          onClick={() => void save()}
          disabled={loading}
          className="mt-6 rounded-full bg-rose px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60"
        >
          {loading ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>
    </main>
  );
}
