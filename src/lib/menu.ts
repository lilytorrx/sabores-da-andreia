import dishPeixeCamarao from "@/assets/dish-peixe-camarao.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishCostelinha from "@/assets/dish-costelinha.jpg";
import dishDobradinha from "@/assets/dish-dobradinha.jpg";
import dishChurrasquinho from "@/assets/dish-churrasquinho.jpg";
import dishMoela from "@/assets/dish-moela.jpg";
import dishStrogonoff from "@/assets/dish-strogonoff.jpg";
import dishCarneAssada from "@/assets/dish-carne-assada.jpg";
import laCarteOmelete from "@/assets/la-carte-omelete.jpg";
import laCarteOmeleteFrango from "@/assets/la-carte-omelete-frango.jpg";
import laCarteOmeleteQueijo from "@/assets/la-carte-omelete-queijo.jpg";
import laCarteCalabresa from "@/assets/la-carte-calabresa.jpg";
import laCarteFigado from "@/assets/la-carte-figado.jpg";
import laCarteFrangoGrelhado from "@/assets/la-carte-frango-grelhado.jpg";
import laCarteFrangoEmpanado from "@/assets/la-carte-frango-empanado.jpg";
import laCarteCarre from "@/assets/la-carte-carre.jpg";
import laCarteParmFrango from "@/assets/la-carte-parm-frango.jpg";
import laCarteIscaCarne from "@/assets/la-carte-isca-carne.jpg";
import laCarteFilePeixe from "@/assets/la-carte-file-peixe.jpg";
import laCarteParmPeixe from "@/assets/la-carte-parm-peixe.jpg";
import laCarteContraFile from "@/assets/la-carte-contra-file.jpg";
import laCarteParmContraFile from "@/assets/la-carte-parm-contra-file.jpg";
import sucoNatural from "@/assets/suco-natural.png";
import titaCitrus from "@/assets/tita-citrus.png";
import cocaColaLata from "@/assets/coca-cola-lata.png";
import convencao from "@/assets/convencao.png";
import cocaCola2l from "@/assets/coca-cola-2l.png";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

// Pool de "Prato do Dia" — 1 é sorteado por dia
export const pratosDoDiaPool: MenuItem[] = [
  { id: "pd-peixe-camarao", name: "Filé de peixe ao molho de camarão", price: 28 },
  { id: "pd-feijoada", name: "Feijoada", price: 30 },
  { id: "pd-costelinha", name: "Costelinha suína assada", price: 25 },
  { id: "pd-dobradinha", name: "Dobradinha com feijão branco", price: 25 },
  { id: "pd-churrasquinho", name: "Churrasquinho misto completo", price: 20 },
  { id: "pd-moela", name: "Moela com batata", price: 17 },
  { id: "pd-strogonoff", name: "Strogonoff de frango com batata palha ou fritas", price: 20 },
  { id: "pd-carne-assada", name: "Carne assada", price: 25 },
];

export const itemImages: Record<string, string> = {
  "pd-peixe-camarao": dishPeixeCamarao,
  "pd-feijoada": dishFeijoada,
  "pd-costelinha": dishCostelinha,
  "pd-dobradinha": dishDobradinha,
  "pd-churrasquinho": dishChurrasquinho,
  "pd-moela": dishMoela,
  "pd-strogonoff": dishStrogonoff,
  "pd-carne-assada": dishCarneAssada,
  "ac-omelete": laCarteOmelete,
  "ac-omelete-frango": laCarteOmeleteFrango,
  "ac-omelete-queijo": laCarteOmeleteQueijo,
  "ac-calabresa": laCarteCalabresa,
  "ac-figado": laCarteFigado,
  "ac-frango-grelhado": laCarteFrangoGrelhado,
  "ac-frango-empanado": laCarteFrangoEmpanado,
  "ac-carre": laCarteCarre,
  "ac-parm-frango": laCarteParmFrango,
  "ac-isca-carne": laCarteIscaCarne,
  "ac-file-peixe": laCarteFilePeixe,
  "ac-parm-peixe": laCarteParmPeixe,
  "ac-contra-file": laCarteContraFile,
  "ac-parm-contra-file": laCarteParmContraFile,
  "b-suco": sucoNatural,
  "b-tita": titaCitrus,
  "b-coca-lata": cocaColaLata,
  "b-convencao": convencao,
  "b-coca-2l": cocaCola2l,
};

export const categories: MenuCategory[] = [
  {
    id: "a-la-carte",
    title: "Quentinhas à la carte",
    note: "Acompanham arroz, feijão, macarrão e farofa + 1 acompanhamento à sua escolha.",
    items: [
      { id: "ac-omelete", name: "Omelete simples", price: 13 },
      { id: "ac-omelete-frango", name: "Omelete recheada com frango", price: 15 },
      { id: "ac-omelete-queijo", name: "Omelete recheada com queijo", price: 15 },
      { id: "ac-calabresa", name: "Calabresa acebolada", price: 15 },
      { id: "ac-figado", name: "Isca de fígado acebolada", price: 15 },
      { id: "ac-frango-grelhado", name: "Filé de frango grelhado", price: 16 },
      { id: "ac-frango-empanado", name: "Filé de frango empanado", price: 18 },
      { id: "ac-carre", name: "Carré", price: 18 },
      { id: "ac-parm-frango", name: "Parmegiana de frango", price: 22 },
      { id: "ac-isca-carne", name: "Isca de carne acebolada", price: 24 },
      { id: "ac-file-peixe", name: "Filé de peixe", price: 24 },
      { id: "ac-parm-peixe", name: "Parmegiana de peixe", price: 28 },
      { id: "ac-contra-file", name: "Contra filé acebolado", price: 25 },
      { id: "ac-parm-contra-file", name: "Parmegiana de contra filé", price: 28 },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { id: "b-suco", name: "Suco natural (guaraná / laranja c/ acerola / uva / açaí / maracujá)", price: 3 },
      { id: "b-tita", name: "Tita Cítrus", price: 4 },
      { id: "b-coca-lata", name: "Coca-Cola lata", price: 6 },
      { id: "b-convencao", name: "Convenção 600ml", price: 5 },
      { id: "b-coca-2l", name: "Coca-Cola retornável 2L", price: 9 },
    ],
  },
];

export const acompanhamentos = [
  "Legumes",
  "Batatonese",
  "Salada verde",
  "Batata frita",
  "Maionese",
  "Salada de feijão fradinho",
  "Purê de batata",
];

// Lista plana de todos os itens (para o painel admin)
export const allMenuItems: MenuItem[] = [
  ...pratosDoDiaPool,
  ...categories.flatMap((c) => c.items),
];

// Sorteia 1 prato do dia entre os disponíveis. Muda apenas no dia seguinte.
export function getPratosDoDia(date = new Date()): MenuItem[] {
  const pool = pratosDoDiaPool;
  if (pool.length === 0) return [];
  const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  let seed = 0;
  for (let i = 0; i < key.length; i++) {
    seed = (seed * 31 + key.charCodeAt(i)) >>> 0;
  }
  const rng = mulberry32(seed);
  const idx = Math.floor(rng() * pool.length);
  return [pool[idx]];
}

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const WHATSAPP_NUMBER = "5521980069354";

export function buildWhatsappMessage(
  cart: { item: MenuItem; qty: number; acompanhamento?: string }[],
): string {
  const lines = ["Olá! Quero fazer um pedido.", "", "*Pratos:*"];
  let total = 0;
  for (const { item, qty, acompanhamento } of cart) {
    const sub = item.price * qty;
    total += sub;
    let line = `• ${qty}x ${item.name} — R$ ${sub.toFixed(2).replace(".", ",")}`;
    if (acompanhamento) line += ` (acomp: ${acompanhamento})`;
    lines.push(line);
  }
  lines.push("", `*Total: R$ ${total.toFixed(2).replace(".", ",")}*`);
  return lines.join("\n");
}

export function buildWhatsappUrl(
  cart: { item: MenuItem; qty: number; acompanhamento?: string }[],
): string {
  const msg = buildWhatsappMessage(cart);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
