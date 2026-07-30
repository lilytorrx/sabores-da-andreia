import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIpq9Pah.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dish_peixe_camarao_default = "/assets/dish-peixe-camarao-BGCRDOCU.jpg";
var dish_feijoada_default = "/assets/dish-feijoada-Dip_O3y5.jpg";
var dish_costelinha_default = "/assets/dish-costelinha-BVOGYRXq.jpg";
var dish_dobradinha_default = "/assets/dish-dobradinha-DcNxIBAD.jpg";
var dish_churrasquinho_default = "/assets/dish-churrasquinho-CLzS70xW.jpg";
var dish_moela_default = "/assets/dish-moela-ClKsJDH8.jpg";
var dish_strogonoff_default = "/assets/dish-strogonoff-C1vNr4R1.jpg";
var dish_carne_assada_default = "/assets/dish-carne-assada-Bj8yyWv6.jpg";
var la_carte_omelete_default = "/assets/la-carte-omelete-CJqS9pSI.jpg";
var la_carte_omelete_frango_default = "/assets/la-carte-omelete-frango-Cm57Gh7e.jpg";
var la_carte_omelete_queijo_default = "/assets/la-carte-omelete-queijo-D2pvCq6B.jpg";
var la_carte_calabresa_default = "/assets/la-carte-calabresa-Cpp0m_jH.jpg";
var la_carte_figado_default = "/assets/la-carte-figado-DSIaWBam.jpg";
var la_carte_frango_grelhado_default = "/assets/la-carte-frango-grelhado-C9piZles.jpg";
var la_carte_frango_empanado_default = "/assets/la-carte-frango-empanado-_psU90KZ.jpg";
var la_carte_carre_default = "/assets/la-carte-carre-BMFcWGD2.jpg";
var la_carte_parm_frango_default = "/assets/la-carte-parm-frango-B4EM0eT2.jpg";
var la_carte_isca_carne_default = "/assets/la-carte-isca-carne-DYrdPBQW.jpg";
var la_carte_file_peixe_default = "/assets/la-carte-file-peixe-ChUbGGsf.jpg";
var la_carte_parm_peixe_default = "/assets/la-carte-parm-peixe-kbqMl9JT.jpg";
var la_carte_contra_file_default = "/assets/la-carte-contra-file-DmC2MG5u.jpg";
var la_carte_parm_contra_file_default = "/assets/la-carte-parm-contra-file-zhhY2Duy.jpg";
var suco_natural_default = "/assets/suco-natural-2Ng9SFRA.png";
var tita_citrus_default = "/assets/tita-citrus-CnkETuSu.png";
var coca_cola_lata_default = "/assets/coca-cola-lata-Bwrgt8wB.png";
var convencao_default = "/assets/convencao-BBGlag5P.png";
var coca_cola_2l_default = "/assets/coca-cola-2l-DOVIAnIN.png";
var pratosDoDiaPool = [
	{
		id: "pd-peixe-camarao",
		name: "Filé de peixe ao molho de camarão",
		price: 28
	},
	{
		id: "pd-feijoada",
		name: "Feijoada",
		price: 30
	},
	{
		id: "pd-costelinha",
		name: "Costelinha suína assada",
		price: 25
	},
	{
		id: "pd-dobradinha",
		name: "Dobradinha com feijão branco",
		price: 25
	},
	{
		id: "pd-churrasquinho",
		name: "Churrasquinho misto completo",
		price: 20
	},
	{
		id: "pd-moela",
		name: "Moela com batata",
		price: 17
	},
	{
		id: "pd-strogonoff",
		name: "Strogonoff de frango com batata palha ou fritas",
		price: 20
	},
	{
		id: "pd-carne-assada",
		name: "Carne assada",
		price: 25
	}
];
var itemImages = {
	"pd-peixe-camarao": dish_peixe_camarao_default,
	"pd-feijoada": dish_feijoada_default,
	"pd-costelinha": dish_costelinha_default,
	"pd-dobradinha": dish_dobradinha_default,
	"pd-churrasquinho": dish_churrasquinho_default,
	"pd-moela": dish_moela_default,
	"pd-strogonoff": dish_strogonoff_default,
	"pd-carne-assada": dish_carne_assada_default,
	"ac-omelete": la_carte_omelete_default,
	"ac-omelete-frango": la_carte_omelete_frango_default,
	"ac-omelete-queijo": la_carte_omelete_queijo_default,
	"ac-calabresa": la_carte_calabresa_default,
	"ac-figado": la_carte_figado_default,
	"ac-frango-grelhado": la_carte_frango_grelhado_default,
	"ac-frango-empanado": la_carte_frango_empanado_default,
	"ac-carre": la_carte_carre_default,
	"ac-parm-frango": la_carte_parm_frango_default,
	"ac-isca-carne": la_carte_isca_carne_default,
	"ac-file-peixe": la_carte_file_peixe_default,
	"ac-parm-peixe": la_carte_parm_peixe_default,
	"ac-contra-file": la_carte_contra_file_default,
	"ac-parm-contra-file": la_carte_parm_contra_file_default,
	"b-suco": suco_natural_default,
	"b-tita": tita_citrus_default,
	"b-coca-lata": coca_cola_lata_default,
	"b-convencao": convencao_default,
	"b-coca-2l": coca_cola_2l_default
};
var categories = [{
	id: "a-la-carte",
	title: "Quentinhas à la carte",
	note: "Acompanham arroz, feijão, macarrão e farofa + 1 acompanhamento à sua escolha.",
	items: [
		{
			id: "ac-omelete",
			name: "Omelete simples",
			price: 13
		},
		{
			id: "ac-omelete-frango",
			name: "Omelete recheada com frango",
			price: 15
		},
		{
			id: "ac-omelete-queijo",
			name: "Omelete recheada com queijo",
			price: 15
		},
		{
			id: "ac-calabresa",
			name: "Calabresa acebolada",
			price: 15
		},
		{
			id: "ac-figado",
			name: "Isca de fígado acebolada",
			price: 15
		},
		{
			id: "ac-frango-grelhado",
			name: "Filé de frango grelhado",
			price: 16
		},
		{
			id: "ac-frango-empanado",
			name: "Filé de frango empanado",
			price: 18
		},
		{
			id: "ac-carre",
			name: "Carré",
			price: 18
		},
		{
			id: "ac-parm-frango",
			name: "Parmegiana de frango",
			price: 22
		},
		{
			id: "ac-isca-carne",
			name: "Isca de carne acebolada",
			price: 24
		},
		{
			id: "ac-file-peixe",
			name: "Filé de peixe",
			price: 24
		},
		{
			id: "ac-parm-peixe",
			name: "Parmegiana de peixe",
			price: 28
		},
		{
			id: "ac-contra-file",
			name: "Contra filé acebolado",
			price: 25
		},
		{
			id: "ac-parm-contra-file",
			name: "Parmegiana de contra filé",
			price: 28
		}
	]
}, {
	id: "bebidas",
	title: "Bebidas",
	items: [
		{
			id: "b-suco",
			name: "Suco natural (guaraná / laranja c/ acerola / uva / açaí / maracujá)",
			price: 3
		},
		{
			id: "b-tita",
			name: "Tita Cítrus",
			price: 4
		},
		{
			id: "b-coca-lata",
			name: "Coca-Cola lata",
			price: 6
		},
		{
			id: "b-convencao",
			name: "Convenção 600ml",
			price: 5
		},
		{
			id: "b-coca-2l",
			name: "Coca-Cola retornável 2L",
			price: 9
		}
	]
}];
var acompanhamentos = [
	"Legumes",
	"Batatonese",
	"Salada verde",
	"Batata frita",
	"Maionese",
	"Salada de feijão fradinho",
	"Purê de batata"
];
[...pratosDoDiaPool, ...categories.flatMap((c) => c.items)];
function getPratoDoDia(date = /* @__PURE__ */ new Date()) {
	const pool = pratosDoDiaPool;
	if (pool.length === 0) return void 0;
	const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	let seed = 0;
	for (let i = 0; i < key.length; i++) seed = seed * 31 + key.charCodeAt(i) >>> 0;
	const rng = mulberry32(seed);
	return pool[Math.floor(rng() * pool.length)];
}
function mulberry32(a) {
	return function() {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = a;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
var WHATSAPP_NUMBER = "5521980069354";
function buildWhatsappMessage(cart) {
	const lines = [
		"Olá! Quero fazer um pedido.",
		"",
		"*Pratos:*"
	];
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
function buildWhatsappUrl(cart) {
	const msg = buildWhatsappMessage(cart);
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
var logo_default = "/assets/logo-D0WS_dnB.png";
var CART_KEY = "sda-cart-v1";
function useCart() {
	const [cart, setCart] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(CART_KEY);
			if (raw) setCart(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
	}, [cart, hydrated]);
	const add = (item, acompanhamento) => {
		setCart((prev) => {
			const idx = prev.findIndex((l) => l.item.id === item.id && l.acompanhamento === acompanhamento);
			if (idx >= 0) {
				const next = [...prev];
				next[idx] = {
					...next[idx],
					qty: next[idx].qty + 1
				};
				return next;
			}
			return [...prev, {
				item,
				qty: 1,
				acompanhamento
			}];
		});
	};
	const dec = (idx) => setCart((prev) => {
		const next = [...prev];
		next[idx] = {
			...next[idx],
			qty: next[idx].qty - 1
		};
		return next.filter((l) => l.qty > 0);
	});
	const inc = (idx) => setCart((prev) => {
		const next = [...prev];
		next[idx] = {
			...next[idx],
			qty: next[idx].qty + 1
		};
		return next;
	});
	const remove = (idx) => setCart((prev) => prev.filter((_, i) => i !== idx));
	const clear = () => setCart([]);
	return {
		cart,
		add,
		dec,
		inc,
		remove,
		clear,
		hydrated
	};
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "Logo Sabores da Andréia",
		className: `object-contain ${className}`
	});
}
function formatBRL(v) {
	return v.toFixed(2).replace(".", ",");
}
function ItemCard({ item, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-3 rounded-2xl border border-rose-soft/60 bg-card p-3 shadow-sm transition hover:shadow-md hover:-translate-y-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: itemImages[item.id] ?? "/assets/logo-D0WS_dnB.png",
				alt: item.name,
				className: "h-20 w-20 shrink-0 rounded-xl object-cover ring-1 ring-rose-soft/60 sm:h-24 sm:w-24",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-serif text-base font-semibold text-foreground",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-rose font-semibold",
					children: ["R$ ", formatBRL(item.price)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onAdd(),
				"aria-label": `Adicionar ${item.name}`,
				className: "shrink-0 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110 active:scale-95",
				children: "+ Adicionar"
			})
		]
	});
}
function PratoCard({ item, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-3xl border border-rose/30 bg-card shadow-sm transition hover:shadow-lg hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-rose-soft/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: itemImages[item.id] ?? "/assets/logo-D0WS_dnB.png",
				alt: item.name,
				className: "h-full w-full object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-rose px-3 py-1 text-xs font-semibold text-primary-foreground shadow",
				children: "Prato do dia"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-center justify-between gap-3 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-serif text-base font-semibold text-foreground",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-lg text-rose font-bold",
					children: ["R$ ", formatBRL(item.price)]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				"aria-label": `Adicionar ${item.name}`,
				className: "shrink-0 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110 active:scale-95",
				children: "+ Adicionar"
			})]
		})]
	});
}
function Home() {
	const pratoDoDia = (0, import_react.useMemo)(() => getPratoDoDia(/* @__PURE__ */ new Date()), []);
	const { cart, add, inc, dec, remove, clear, hydrated } = useCart();
	const [openCart, setOpenCart] = (0, import_react.useState)(false);
	const [acomp, setAcomp] = (0, import_react.useState)(acompanhamentos[0]);
	const totalItems = cart.reduce((s, l) => s + l.qty, 0);
	const totalPrice = cart.reduce((s, l) => s + l.qty * l.item.price, 0);
	const whatsappUrl = cart.length > 0 ? buildWhatsappUrl(cart) : `https://wa.me/${WHATSAPP_NUMBER}`;
	const isALaCarteItem = (id) => id.startsWith("ac-");
	const handleAdd = (item) => {
		const needsAcomp = isALaCarteItem(item.id);
		add(item, needsAcomp ? acomp : void 0);
		setOpenCart(true);
	};
	(0, import_react.useEffect)(() => {
		if (openCart) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prev;
			};
		}
	}, [openCart]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-rose-soft/60 bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12 w-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base font-bold text-foreground sm:text-lg",
								children: "Sabores da Andréia"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-sm text-rose sm:text-base",
								children: "Comida Caseira"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpenCart(true),
						className: "relative rounded-full bg-rose px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:brightness-110",
						children: ["🛒 Carrinho", hydrated && totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-card px-1.5 text-xs font-bold text-rose",
							children: totalItems
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-gradient-to-b from-rose-soft/40 via-background to-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-16 text-center sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "mx-auto h-36 w-36 sm:h-44 sm:w-44 drop-shadow-lg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-serif text-4xl font-bold text-foreground sm:text-5xl",
							children: "Sabores da Andréia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-4xl text-rose sm:text-5xl",
							children: "Comida Caseira"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base",
							children: "Quentinhas feitas com carinho, todos os dias. Delivery das 11h às 15h. Faça seu pedido pelo WhatsApp — é só montar seu carrinho abaixo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pratos-do-dia",
								className: "rounded-full bg-rose px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:brightness-110",
								children: "Ver cardápio de hoje"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-full border-2 border-whatsapp bg-card px-6 py-3 text-sm font-semibold text-whatsapp shadow-sm transition hover:bg-whatsapp hover:text-primary-foreground",
								children: "WhatsApp direto"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "pratos-do-dia",
						className: "scroll-mt-24 py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-script text-2xl text-rose",
									children: "Hoje na cozinha"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-3xl font-bold",
									children: "Prato do Dia"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Um prato especial sorteado diariamente. Amanhã tem novidade!"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs text-muted-foreground sm:block",
								children: "Atualiza automaticamente à meia-noite"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: pratoDoDia ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PratoCard, {
								item: pratoDoDia,
								onAdd: () => handleAdd(pratoDoDia)
							}, pratoDoDia.id) : null
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "my-6 rounded-2xl border border-rose-soft bg-card p-5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-semibold",
								children: "Escolha seu acompanhamento"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Aplicado às quentinhas à la carte que você adicionar. As quentinhas já vêm com arroz, feijão, macarrão e farofa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: acompanhamentos.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAcomp(a),
									className: `rounded-full border px-3 py-1.5 text-sm transition ${acomp === a ? "border-rose bg-rose text-primary-foreground" : "border-rose-soft bg-background hover:border-rose"}`,
									children: a
								}, a))
							})
						]
					}),
					categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl font-bold sm:text-3xl",
								children: cat.title
							}), cat.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: cat.note
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemCard, {
								item,
								onAdd: () => handleAdd(item)
							}, item.id))
						})]
					}, cat.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 grid gap-4 rounded-3xl border border-rose-soft bg-card p-6 shadow-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-xl text-rose",
								children: "Pagamento"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "PIX, dinheiro, vale-refeição, cartão de débito e crédito."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-xl text-rose",
								children: "Delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Das 11h às 15h. Taxa consultar. Entrega em até 45 min após confirmação."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-xl text-rose",
								children: "Contato"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									"WhatsApp:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${WHATSAPP_NUMBER}`,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "font-semibold text-rose underline-offset-2 hover:underline",
										children: "(21) 98006-9354"
									})
								]
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-rose-soft/60 bg-card py-6 text-center text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-xl text-rose",
					children: "Sabores da Andréia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Feito com carinho no Rio de Janeiro • (21) 98006-9354" })]
			}),
			hydrated && totalItems > 0 && !openCart && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpenCart(true),
				className: "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 animate-pop-in",
				children: [
					"🛒 ",
					totalItems,
					" · R$ ",
					formatBRL(totalPrice)
				]
			}),
			openCart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex justify-end bg-foreground/40 animate-backdrop",
				onClick: () => setOpenCart(false),
				style: { backdropFilter: "blur(4px)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex h-full w-full max-w-md flex-col bg-background shadow-2xl animate-drawer",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-rose-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-xl text-rose",
								children: "Seu pedido"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-bold",
								children: "Carrinho"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpenCart(false),
								className: "rounded-full p-2 text-muted-foreground hover:bg-muted",
								"aria-label": "Fechar carrinho",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto p-4",
							children: cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col items-center justify-center text-center text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl",
										children: "🍽️"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm",
										children: "Seu carrinho está vazio."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: "Adicione pratos do cardápio ao lado."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: cart.map((line, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-rose-soft bg-card p-3 animate-pop-in",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-serif text-sm font-semibold",
													children: line.item.name
												}),
												line.acompanhamento && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Acomp.: ", line.acompanhamento]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-sm font-semibold text-rose",
													children: ["R$ ", formatBRL(line.item.price * line.qty)]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => remove(idx),
											className: "text-xs text-muted-foreground hover:text-destructive",
											"aria-label": "Remover item",
											children: "Remover"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => dec(idx),
												className: "h-8 w-8 rounded-full border border-rose-soft font-bold hover:bg-rose-soft/40",
												"aria-label": "Diminuir",
												children: "−"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center font-semibold",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => inc(idx),
												className: "h-8 w-8 rounded-full border border-rose-soft font-bold hover:bg-rose-soft/40",
												"aria-label": "Aumentar",
												children: "+"
											})
										]
									})]
								}, `${line.item.id}-${line.acompanhamento ?? ""}-${idx}`))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-rose-soft bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-serif text-xl font-bold text-foreground",
										children: ["R$ ", formatBRL(totalPrice)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-disabled": cart.length === 0,
									onClick: (e) => {
										if (cart.length === 0) e.preventDefault();
									},
									className: `flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition hover:brightness-110 ${cart.length === 0 ? "pointer-events-none opacity-40" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										children: "💬"
									}), " Enviar pedido pelo WhatsApp"]
								}),
								cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: clear,
									className: "mt-2 w-full text-center text-xs text-muted-foreground hover:text-destructive",
									children: "Esvaziar carrinho"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-[11px] text-muted-foreground",
									children: "Abre o WhatsApp em uma nova aba com o pedido pronto para enviar."
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
