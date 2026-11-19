import { t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
//#region src/components/HudFrame.tsx
var import_jsx_runtime = require_jsx_runtime();
/** Galactic control-room frame: corner brackets plus top and bottom readouts. */
function HudFrame({ topLeft, topRight, bottomLeft, bottomRight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hud-frame",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hud-corner hud-corner-tl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hud-corner hud-corner-tr" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hud-corner hud-corner-bl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hud-corner hud-corner-br" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hud-bar hud-bar-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hud-live",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "hud-dot" }),
						" ",
						topLeft
					]
				}), topRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: topRight
				})]
			}),
			(bottomLeft || bottomRight) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hud-bar hud-bar-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bottomLeft }), bottomRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: bottomRight
				})]
			})
		]
	});
}
//#endregion
export { HudFrame as t };
