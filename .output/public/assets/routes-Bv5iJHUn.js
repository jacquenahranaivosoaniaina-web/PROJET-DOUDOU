import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { t as useNavigate } from "./useNavigate-C7XcnjeD.js";
import { c as markUnlocked, i as WRONG_CODE_MESSAGE, s as isSecretCode } from "./universe-BxcUkM-o.js";
import { t as warp } from "./index-hIxds4vB.js";
import { t as HudFrame } from "./HudFrame-BFH2H7-j.js";
import { t as galaxy_default } from "./galaxy-DZGBsXVd.js";
//#region src/routes/index.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const navigate = useNavigate();
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [shake, setShake] = (0, import_react.useState)(0);
	const [warping, setWarping] = (0, import_react.useState)(false);
	function enter(e) {
		e.preventDefault();
		if (warping) return;
		if (isSecretCode(code)) {
			markUnlocked();
			setWarping(true);
			warp(1, 1400);
			window.setTimeout(() => navigate({ to: "/univers" }), 1100);
		} else {
			setError(WRONG_CODE_MESSAGE);
			setShake((n) => n + 1);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudFrame, {
				topLeft: "DOUDOU-OS · LIAISON ÉTABLIE",
				topRight: "SECTEUR ♡ · ORIGINE AOÛT 2021",
				bottomLeft: warping ? "SAUT HYPERSPATIAL EN COURS…" : "SIGNAL CHIFFRÉ · EN ATTENTE DU CODE",
				bottomRight: "COORD. 48°51′ N · ∞"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "home-galaxy",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: galaxy_default,
					alt: "",
					width: 1024,
					height: 1024
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "home-rings",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "home-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "home-ring" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: enter,
				className: warping ? "warping" : "screen-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow rise-in",
						children: "UNE EXPÉRIENCE • UN SEUL UNIVERS • NOUS DEUX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-title my-7",
						children: ["DOUDOU,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-title-sub",
							children: "MY UNIVERSE"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "serif-italic rise-in text-[22px] text-mist [animation-delay:200ms]",
						children: "Notre système solaire, notre histoire, notre aventure…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise-in mx-auto my-6 max-w-[430px] text-[13px] leading-[1.9] text-muted-foreground [animation-delay:350ms]",
						children: [
							"Bienvenue dans notre univers, Doudou.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ici, chaque étoile raconte un morceau de notre histoire."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in [animation-delay:500ms]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: shake ? "shake" : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "cosmic-field",
									type: "password",
									"aria-label": "Code secret",
									placeholder: "ENTRER LE CODE SECRET",
									value: code,
									onChange: (e) => {
										setCode(e.target.value);
										setError("");
									},
									autoComplete: "off"
								})
							}, shake),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "cosmic-btn cosmic-btn-primary mt-3",
								children: "Ouvrir les portes de notre univers ✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "alert",
								className: "mt-3 h-5 text-[11px] text-destructive",
								children: error
							})
						]
					})
				]
			}),
			warping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "warp-flash",
				"aria-hidden": true
			})
		]
	});
}
//#endregion
export { Home as component };
