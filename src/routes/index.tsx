import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  categories,
  getPratoDoDia,
  acompanhamentos,
  buildWhatsappUrl,
  WHATSAPP_NUMBER,
  itemImages,
  type MenuItem,
} from "@/lib/menu";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Home,
});

type CartLine = { item: MenuItem; qty: number; acompanhamento?: string };

const CART_KEY = "sda-cart-v1";

function useCart() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const add = (item: MenuItem, acompanhamento?: string) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (l) => l.item.id === item.id && l.acompanhamento === acompanhamento,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { item, qty: 1, acompanhamento }];
    });
  };
  const dec = (idx: number) =>
    setCart((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], qty: next[idx].qty - 1 };
      return next.filter((l) => l.qty > 0);
    });
  const inc = (idx: number) =>
    setCart((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
      return next;
    });
  const remove = (idx: number) =>
    setCart((prev) => prev.filter((_, i) => i !== idx));
  const clear = () => setCart([]);

  return { cart, add, dec, inc, remove, clear, hydrated };
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Logo Sabores da Andréia"
      className={`object-contain ${className}`}
    />
  );
}

function formatBRL(v: number) {
  return v.toFixed(2).replace(".", ",");
}

function ItemCard({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (acomp?: string) => void;
}) {
  const imageSrc = itemImages[item.id] ?? logoImg;

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-rose-soft/60 bg-card p-3 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <img
        src={imageSrc}
        alt={item.name}
        className="h-20 w-20 shrink-0 rounded-xl object-cover ring-1 ring-rose-soft/60 sm:h-24 sm:w-24"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <h4 className="font-serif text-base font-semibold text-foreground">
          {item.name}
        </h4>
        <p className="mt-1 text-sm text-rose font-semibold">
          R$ {formatBRL(item.price)}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onAdd()}
        aria-label={`Adicionar ${item.name}`}
        className="shrink-0 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110 active:scale-95"
      >
        + Adicionar
      </button>
    </div>
  );
}

function PratoCard({ item, onAdd }: { item: MenuItem; onAdd: () => void }) {
  const imageSrc = itemImages[item.id] ?? logoImg;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-rose/30 bg-card shadow-sm transition hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-rose-soft/20">
        <img
          src={imageSrc}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-rose px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
          Prato do dia
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <h4 className="font-serif text-base font-semibold text-foreground">
            {item.name}
          </h4>
          <p className="mt-1 text-lg text-rose font-bold">
            R$ {formatBRL(item.price)}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          aria-label={`Adicionar ${item.name}`}
          className="shrink-0 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110 active:scale-95"
        >
          + Adicionar
        </button>
      </div>
    </article>
  );
}

function Home() {
  const pratoDoDia = useMemo(() => getPratoDoDia(new Date()), []);
  const { cart, add, inc, dec, remove, clear, hydrated } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [acomp, setAcomp] = useState<string>(acompanhamentos[0]);

  const totalItems = cart.reduce((s, l) => s + l.qty, 0);
  const totalPrice = cart.reduce((s, l) => s + l.qty * l.item.price, 0);

  // WhatsApp URL — computed live so the anchor is always ready to open
  // in a new tab without being blocked by popup blockers.
  const whatsappUrl = cart.length > 0 ? buildWhatsappUrl(cart) : `https://wa.me/${WHATSAPP_NUMBER}`;

  const isALaCarteItem = (id: string) => id.startsWith("ac-");

  const handleAdd = (item: MenuItem) => {
    const needsAcomp = isALaCarteItem(item.id);
    add(item, needsAcomp ? acomp : undefined);
    setOpenCart(true);
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (openCart) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openCart]);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-rose-soft/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="leading-tight">
              <p className="font-serif text-base font-bold text-foreground sm:text-lg">
                Sabores da Andréia
              </p>
              <p className="font-script text-sm text-rose sm:text-base">
                Comida Caseira
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpenCart(true)}
            className="relative rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110"
          >
            🛒 Carrinho
            {hydrated && totalItems > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-card px-1.5 text-xs font-bold text-rose">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-soft/40 via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
          <Logo className="mx-auto h-36 w-36 sm:h-44 sm:w-44 drop-shadow-lg" />
          <h1 className="mt-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Sabores da Andréia
          </h1>
          <p className="font-script text-4xl text-rose sm:text-5xl">
            Comida Caseira
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Quentinhas feitas com carinho, todos os dias. Delivery das 11h às 15h.
            Faça seu pedido pelo WhatsApp — é só montar seu carrinho abaixo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#pratos-do-dia"
              className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:brightness-110"
            >
              Ver cardápio de hoje
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-whatsapp bg-card px-6 py-3 text-sm font-semibold text-whatsapp shadow-sm transition hover:bg-whatsapp hover:text-primary-foreground"
            >
              WhatsApp direto
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        {/* Pratos do Dia */}
        <section id="pratos-do-dia" className="scroll-mt-24 py-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl text-rose">Hoje na cozinha</p>
              <h2 className="font-serif text-3xl font-bold">Prato do Dia</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Um prato especial sorteado diariamente. Amanhã tem novidade!
              </p>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Atualiza automaticamente à meia-noite
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pratoDoDia ? (
            <PratoCard
              key={pratoDoDia.id}
              item={pratoDoDia}
              onAdd={() => handleAdd(pratoDoDia)}
            />
          ) : null}
          </div>
        </section>

        {/* Acompanhamentos picker */}
        <section className="my-6 rounded-2xl border border-rose-soft bg-card p-5 shadow-sm">
          <h3 className="font-serif text-lg font-semibold">
            Escolha seu acompanhamento
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Aplicado às quentinhas à la carte que você adicionar. As quentinhas já
            vêm com arroz, feijão, macarrão e farofa.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {acompanhamentos.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAcomp(a)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  acomp === a
                    ? "border-rose bg-rose text-primary-foreground"
                    : "border-rose-soft bg-background hover:border-rose"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat) => (
          <section key={cat.id} className="py-8">
            <div className="mb-5">
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                {cat.title}
              </h2>
              {cat.note && (
                <p className="mt-1 text-sm text-muted-foreground">{cat.note}</p>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {cat.items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onAdd={() => handleAdd(item)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Info */}
        <section className="mt-8 grid gap-4 rounded-3xl border border-rose-soft bg-card p-6 shadow-sm sm:grid-cols-3">
          <div>
            <p className="font-script text-xl text-rose">Pagamento</p>
            <p className="mt-1 text-sm text-muted-foreground">
              PIX, dinheiro, vale-refeição, cartão de débito e crédito.
            </p>
          </div>
          <div>
            <p className="font-script text-xl text-rose">Delivery</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Das 11h às 15h. Taxa consultar. Entrega em até 45 min após confirmação.
            </p>
          </div>
          <div>
            <p className="font-script text-xl text-rose">Contato</p>
            <p className="mt-1 text-sm text-muted-foreground">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-rose underline-offset-2 hover:underline"
              >
                (21) 98006-9354
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-soft/60 bg-card py-6 text-center text-sm text-muted-foreground">
        <p className="font-script text-xl text-rose">Sabores da Andréia</p>
        <p>Feito com carinho no Rio de Janeiro • (21) 98006-9354</p>
      </footer>

      {/* Floating cart button (mobile) */}
      {hydrated && totalItems > 0 && !openCart && (
        <button
          type="button"
          onClick={() => setOpenCart(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 animate-pop-in"
        >
          🛒 {totalItems} · R$ {formatBRL(totalPrice)}
        </button>
      )}

      {/* Cart drawer */}
      {openCart && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-foreground/40 animate-backdrop"
          onClick={() => setOpenCart(false)}
          style={{ backdropFilter: "blur(4px)" }}
        >
          <aside
            className="flex h-full w-full max-w-md flex-col bg-background shadow-2xl animate-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-rose-soft p-4">
              <div>
                <p className="font-script text-xl text-rose">Seu pedido</p>
                <h3 className="font-serif text-lg font-bold">Carrinho</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenCart(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                aria-label="Fechar carrinho"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                  <p className="text-4xl">🍽️</p>
                  <p className="mt-3 text-sm">Seu carrinho está vazio.</p>
                  <p className="text-xs">Adicione pratos do cardápio ao lado.</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {cart.map((line, idx) => (
                    <li
                      key={`${line.item.id}-${line.acompanhamento ?? ""}-${idx}`}
                      className="rounded-xl border border-rose-soft bg-card p-3 animate-pop-in"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-serif text-sm font-semibold">
                            {line.item.name}
                          </p>
                          {line.acompanhamento && (
                            <p className="text-xs text-muted-foreground">
                              Acomp.: {line.acompanhamento}
                            </p>
                          )}
                          <p className="mt-1 text-sm font-semibold text-rose">
                            R$ {formatBRL(line.item.price * line.qty)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(idx)}
                          className="text-xs text-muted-foreground hover:text-destructive"
                          aria-label="Remover item"
                        >
                          Remover
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => dec(idx)}
                          className="h-8 w-8 rounded-full border border-rose-soft font-bold hover:bg-rose-soft/40"
                          aria-label="Diminuir"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-semibold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => inc(idx)}
                          className="h-8 w-8 rounded-full border border-rose-soft font-bold hover:bg-rose-soft/40"
                          aria-label="Aumentar"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-rose-soft bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-serif text-xl font-bold text-foreground">
                  R$ {formatBRL(totalPrice)}
                </span>
              </div>
              {/*
                Use a native <a> anchor for WhatsApp — a real user gesture on
                a link with target="_blank" is never treated as a blocked popup,
                unlike window.open() called from a handler inside an iframe.
              */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={cart.length === 0}
                onClick={(e) => {
                  if (cart.length === 0) e.preventDefault();
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition hover:brightness-110 ${
                  cart.length === 0 ? "pointer-events-none opacity-40" : ""
                }`}
              >
                <span aria-hidden>💬</span> Enviar pedido pelo WhatsApp
              </a>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clear}
                  className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-destructive"
                >
                  Esvaziar carrinho
                </button>
              )}
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Abre o WhatsApp em uma nova aba com o pedido pronto para enviar.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
