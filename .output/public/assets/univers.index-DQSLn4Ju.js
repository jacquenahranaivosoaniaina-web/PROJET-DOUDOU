import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { t as Link } from "./link-lL10T4Cs.js";
import { n as PLANETS } from "./universe-BxcUkM-o.js";
import { t as warp } from "./index-hIxds4vB.js";
import { t as HudFrame } from "./HudFrame-BFH2H7-j.js";
import { t as galaxy_default } from "./galaxy-DZGBsXVd.js";
import { n as PlanetOrb, r as Sun, t as useUnlocked } from "./use-unlocked-Bu5ZB_xN.js";
//#region src/routes/univers.index.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SolarSystem() {
	const unlocked = useUnlocked();
	const [active, setActive] = (0, import_react.useState)(null);
	if (!unlocked) return null;
	const focused = active === null ? null : PLANETS[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "screen-in relative flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudFrame, {
				topLeft: "CARTE STELLAIRE · SYSTÈME DOUDOU",
				topRight: "5 MONDES · 1 SOLEIL · ∞ AMOUR",
				bottomLeft: focused ? `CIBLE VERROUILLÉE · ${focused.code}` : "BALAYAGE ORBITAL ACTIF",
				bottomRight: "DISTANCE ENTRE NOUS · 0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "BIENVENUE CHEZ NOUS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "m-3 text-[clamp(38px,6vw,64px)]",
				children: "Notre système solaire"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "serif-italic text-[19px] text-haze",
				children: "Cinq mondes, cinq fragments de notre histoire."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid w-full max-w-6xl items-center gap-6 lg:grid-cols-[minmax(0,1fr)_260px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `solar-stage ${active !== null ? "solar-paused" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "solar-plane",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "solar-galaxy",
								src: galaxy_default,
								alt: "",
								"aria-hidden": true,
								width: 1024,
								height: 1024
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "asteroid-belt",
								"aria-hidden": true
							}),
							PLANETS.map((planet, i) => {
								const style = {
									"--orbit": `${planet.look.orbit * 100}%`,
									"--period": `${planet.look.period}s`,
									"--phase": `${-planet.look.period * (i * .37 % 1)}s`,
									"--size": `${planet.look.size}px`
								};
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `orbit planet-${i + 1} ${active === i ? "is-active" : ""}`,
									style,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "planet-holder",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/univers/$planet",
											params: { planet: planet.slug },
											className: `planet-link planet-${i + 1} ${active === i ? "is-active" : ""}`,
											"aria-label": planet.name,
											onMouseEnter: () => setActive(i),
											onMouseLeave: () => setActive(null),
											onFocus: () => setActive(i),
											onBlur: () => setActive(null),
											onClick: () => warp(.35, 500),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "planet-target" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
												planet,
												index: i,
												size: planet.look.size
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "planet-label",
											children: planet.name
										})]
									})
								}, planet.slug);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "solar-sun",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hud-box mx-auto w-full max-w-sm p-4 text-left lg:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hud-mono hud-mono-bright mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Index des mondes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hud-divider mb-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col gap-1",
							children: PLANETS.map((planet, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/univers/$planet",
								params: { planet: planet.slug },
								className: `star-map-item planet-${i + 1} ${active === i ? "is-active" : ""}`,
								onMouseEnter: () => setActive(i),
								onMouseLeave: () => setActive(null),
								onClick: () => warp(.35, 500),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
									planet,
									index: i,
									size: 22
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hud-mono block text-[8px]",
									children: planet.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-lg text-foreground",
									children: planet.name
								})] })]
							}, planet.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hud-divider my-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic min-h-[3em] text-[15px] leading-snug text-mist",
							children: focused ? focused.intro : "Survole un monde pour lire son signal…"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow mt-6",
				children: "TOUCHE UNE PLANÈTE POUR T'EN APPROCHER"
			})
		]
	});
}
//#endregion
export { SolarSystem as component };
