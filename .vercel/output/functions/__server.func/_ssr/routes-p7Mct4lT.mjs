import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-p7Mct4lT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CONTRACT = "0x96003d7d4f6b8d7466ce423fcecc916f7f901c90";
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-baseline gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "𝔗"
						}), "artaglia"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden rounded-full border border-seal px-2.5 py-0.5 text-xs text-seal sm:inline",
						children: "Mainnet"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 text-sm md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#chapters",
							className: "hover:text-maroon",
							children: "Chapters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#settlement",
							className: "hover:text-maroon",
							children: "Settlement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#verse",
							className: "hover:text-maroon",
							children: "Verse"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#vocabulary",
							className: "hover:text-maroon",
							children: "Vocabulary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#trade",
						className: "btn-outline hidden rounded-sm px-4 py-2 text-sm sm:inline-block",
						children: "Open trading UI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-maroon rounded-sm px-4 py-2 text-sm",
						children: "Connect wallet"
					})]
				})
			]
		})
	});
}
function Hero() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-6xl leading-[1.05] tracking-tight md:text-7xl",
					children: [
						"Speak little.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "pl-10",
							children: "Prove everything."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-md text-lg leading-relaxed text-ink-soft",
					children: "A zero-knowledge dark pool for tokenized stocks on Robinhood Chain. Place orders no one can front-run. Your side, size and limit stay sealed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-ink-soft",
					children: "The chain sees only proof that a fair trade settled."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border-y border-border py-4 font-display italic text-ink",
					children: "orderCm = Poseidon(side, asset, maxQty, minFill, limit, nullifier, salt)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						navigator.clipboard?.writeText(CONTRACT).catch(() => {});
						setCopied(true);
						setTimeout(() => setCopied(false), 1500);
					},
					className: "mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-ink-soft hover:text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic",
							children: "$TATA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs",
							children: [
								CONTRACT.slice(0, 10),
								"…",
								CONTRACT.slice(-4)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: copied ? "Copied" : "⧉"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#trade",
						className: "btn-maroon rounded-sm px-5 py-2.5",
						children: "Open trading UI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#settlement",
						className: "btn-outline rounded-sm px-5 py-2.5",
						children: "How settlement works"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "oval-frame flex h-64 w-full max-w-md flex-col items-center justify-center md:h-80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-5xl italic md:text-6xl",
						children: "x³ + px = q"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-4 font-display text-sm italic text-ink-soft",
						children: "The depressed cubic. Solved in secret, 1535."
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "chapters",
			className: "mt-20 grid grid-cols-2 gap-6 border-t border-ink pt-8 md:grid-cols-4",
			children: [
				[
					"1512",
					"Brescia · The Stammerer",
					"#stammerer"
				],
				[
					"1535",
					"Venice · The Duel",
					"#duel"
				],
				[
					"1539",
					"Milan · The Verse",
					"#verse"
				],
				[
					"1545",
					"Nuremberg · The Breach",
					"#breach"
				]
			].map(([year, label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href,
				className: "group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-3xl group-hover:text-maroon",
					children: year
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-sm text-ink-soft",
					children: label
				})]
			}, year))
		})]
	});
}
function Chapter({ id, kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "chapter-rule mx-auto max-w-6xl scroll-mt-24 px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm uppercase tracking-[0.3em] text-seal",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children
			})
		]
	});
}
function Stammerer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
		id: "stammerer",
		kicker: "Chapter I · 1512",
		title: "Brescia. The Stammerer.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "drop-cap",
					children: "War cut a boy across the jaw. He kept the name they gave him. Tartaglia."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl italic text-ink",
					children: "He spoke little. He proved everything."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shielded notes, hidden orders, a proof that balances. The chain learns only that a valid trade happened. Never who. Never which side. Never how much." })
			]
		})
	});
}
function Duel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "duel",
		kicker: "Chapter II · 1535",
		title: "Venice. The Duel.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-2xl text-lg leading-relaxed text-ink-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Rivals staked money with a notary and traded sealed challenge letters, the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "cartelli" }),
					". Each side lodged its stake before a witness. The letters stayed sealed until the round closed. Answers were public. Method stayed secret."
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2",
				children: ["Cartello u", "Cartello v"].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "seal-card rounded-sm p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-2xl",
								children: [
									name.split(" ")[0],
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: name.split(" ")[1] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold font-display text-xl text-maroon",
								children: "𝔗"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-soft",
							children: "Side sealed. Asset sealed. Size sealed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-outline mt-6 rounded-sm px-4 py-1.5 text-sm",
							children: "Verify proof"
						})
					]
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3",
				children: [
					["Letter", "The order commitment."],
					["Notary", "The MARGINALIA pool, holding both stakes."],
					["Disfida", "The batch, crossed every N seconds at the Chainlink midpoint."]
				].map(([term, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl italic",
					children: term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink-soft",
					children: def
				})] }, term))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm italic text-ink-soft",
				children: "Example duel: buy up to 500 NVDA at midpoint, minimum fill 50."
			})
		]
	});
}
function Verse() {
	const [x, setX] = (0, import_react.useState)(.908);
	const p = 1.6;
	const q = 2.2;
	const delta = (q / 2) ** 2 + (p / 3) ** 3;
	const u = Math.cbrt(q / 2 + Math.sqrt(delta));
	const v = Math.cbrt(-2.2 / 2 + Math.sqrt(delta));
	const root = u - v;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "verse",
		kicker: "Chapter III · 1539",
		title: "Milan. The Verse.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "max-w-2xl border-l-2 border-maroon pl-6 font-display text-2xl italic leading-relaxed text-ink",
				children: "“When the cube and the things together are equal to some discrete number, find two other numbers differing by it.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft",
				children: [
					"The solution was never stated plainly. It was encoded as a poem. Two hidden numbers, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "u" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "v" }),
					", combine to produce exactly one public root. Move the challenge and watch the duel resolve."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "seal-card mt-10 rounded-sm p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-2xl italic",
							children: ["x = ", x.toFixed(3)]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: .5,
							max: 1.3,
							step: .001,
							value: x,
							onChange: (e) => setX(parseFloat(e.target.value)),
							className: "w-full max-w-xs accent-[oklch(0.42_0.11_30)]",
							"aria-label": "Challenge value"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-xl italic",
						children: "x = ∛(q/2 + √Δ) − ∛(−q/2 + √Δ),\xA0\xA0Δ = (q/2)² + (p/3)³"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-5",
						children: [
							["p", p.toFixed(2)],
							["q", q.toFixed(2)],
							["hidden u (buyer)", u.toFixed(4)],
							["hidden v (seller)", v.toFixed(4)],
							["public x = u − v", root.toFixed(4)]
						].map(([label, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm italic text-ink-soft",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl",
							children: val
						})] }, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm italic text-ink-soft",
						children: [
							"Δ = ",
							delta.toFixed(4),
							" · check: x³ + px =",
							" ",
							(root ** 3 + p * root).toFixed(4),
							" ≈ q = ",
							q.toFixed(2)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl font-display text-2xl italic text-ink",
				children: "Two hidden numbers. One public truth."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft",
				children: [
					"Buyer and seller orders are the two hidden numbers, private witnesses in the settlement circuit. The single public fact is settlement at the oracle midpoint: price equals midpoint, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "minFill" }),
					" ≤",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "qty" }),
					" ≤ ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "maxQty" }),
					" for both sides."
				]
			})
		]
	});
}
function Breach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "breach",
		kicker: "Chapter IV · 1545",
		title: "Nuremberg. The Breach.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl italic text-ink",
					children: "An oath was the only protection of a secret. It broke."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl italic text-maroon",
					children: "No oath. Only proof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tartaglia exists to stop front-running, MEV and order leakage. The chain will never print your order." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "seal-card mt-10 max-w-2xl rounded-sm p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: "Trust and limits"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 list-disc space-y-3 pl-5 text-ink-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-ink",
						children: "Mainnet live."
					}), " Guarded pool with real assets."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-ink",
							children: "The MVP matcher can see orders"
						}),
						" ",
						"so it can cross them. It never holds funds, and nothing it sees reaches the chain."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-ink",
						children: "Safety pauses."
					}), " If the oracle goes stale or stock-token markets are closed, matching pauses and funds stay shielded."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-ink",
						children: "Compliance first."
					}), " Deposits are screened against an approved set from an Association Set Provider (ASP)."] })
				]
			})]
		})]
	});
}
var ROMAN = [
	"I",
	"II",
	"III",
	"IV",
	"V"
];
function Settlement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "settlement",
		kicker: "The Ledger",
		title: "The settlement, entered in the ledger.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-lg text-ink-soft",
				children: "For every match, the Verse proves the following five things."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [[
					["Existence", "Both orders are backed by real, unspent funds in the pool."],
					["Fair price", "Every match fills at the signed Chainlink midpoint, verified onchain. If the feed is stale or markets are closed, the round pauses."],
					["Respect", "Each side fills within its sealed bounds: minFill ≤ qty ≤ maxQty."],
					["Conservation", "Per asset, inputs equal outputs plus fee."],
					["Clean funds", "Both deposits pass ASP screening."]
				].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "seal-card rounded-sm p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-sm text-seal",
							children: ROMAN[i]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink-soft",
							children: body
						})
					]
				}, title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "oval-frame flex items-center justify-center p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl italic",
						children: "Σin = Σout + fee, per asset"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-16 font-display text-3xl",
				children: "Three axioms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-3",
				children: [
					["Soundness", "No trade settles unless the books balance."],
					["Silence", "An order reveals nothing onchain: before, during, or after the match."],
					["Fairness", "Everyone in a round fills at the same midpoint."]
				].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-ink pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-sm text-seal",
							children: ROMAN[i]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-2 font-display text-xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink-soft",
							children: body
						})
					]
				}, title))
			})
		]
	});
}
function Vocabulary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "vocabulary",
		kicker: "Reference",
		title: "Vocabulary of the house.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-x-10 gap-y-8 md:grid-cols-2",
			children: [
				["Cartello", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The sealed order.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "text-sm",
						children: "orderCm = Poseidon(side, asset, maxQty, minFill, limit, nullifier, salt)"
					})
				] })],
				["Disfida", "One batch round, every N seconds, crossed at the midpoint."],
				["Notary", "The MARGINALIA shielded pool where funds rest."],
				["Verse", "The proof. Checked by all, read by none. Built with Noir and UltraHonk."],
				["Midpoint", "The single public price, from Chainlink Data Streams."]
			].map(([term, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl italic",
					children: term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink-soft",
					children: def
				})]
			}, term))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 max-w-2xl text-sm italic text-ink-soft",
			children: "Assets at launch: USDG, NVDA, TSLA, AAPL. Midpoint-only orders. Batch cadence N seconds. No customers, no prices, no benchmarks are claimed. The mechanism is the demonstration."
		})]
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "trade",
		className: "chapter-rule mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-4xl tracking-tight md:text-5xl",
				children: ["The disfida is open. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Take your side." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-6 max-w-xl text-lg text-ink-soft",
				children: "Assets at launch: USDG, NVDA, TSLA, AAPL. Seal an order, take a side, and watch it settle without revealing a thing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "btn-maroon mt-8 inline-block rounded-sm px-6 py-3",
				children: "Open trading UI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm italic text-ink-soft",
				children: "Mainnet live. Capital at risk."
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-lg text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "𝔗"
				}), "artaglia"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic",
				children: "Speak little. Prove everything."
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stammerer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Duel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breach, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settlement, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vocabulary, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
