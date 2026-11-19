import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { t as useNavigate } from "./useNavigate-C7XcnjeD.js";
import { l as readUnlocked } from "./universe-BxcUkM-o.js";
//#region src/components/PlanetOrb.tsx
var import_jsx_runtime = require_jsx_runtime();
/** A shaded, slowly turning planet sphere, with optional ring and moon. */
function PlanetOrb({ planet, index, size, className = "" }) {
	const style = { "--size": typeof size === "number" ? `${size}px` : size };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `orb planet-${index + 1} ${planet.look.ring ? "orb-ringed" : ""} ${className}`,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb-surface" }), planet.look.moon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "orb-moon-track",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orb-moon" })
		})]
	});
}
/** The heart of the system: layered corona around a glowing core. */
function Sun({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `sun ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sun-corona" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sun-core" })]
	});
}
//#endregion
//#region src/hooks/use-unlocked.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/** Returns true once the secret code was entered this session; otherwise sends the visitor home. */
function useUnlocked() {
	const navigate = useNavigate();
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (readUnlocked()) setUnlocked(true);
		else navigate({
			to: "/",
			replace: true
		});
	}, [navigate]);
	return unlocked;
}
//#endregion
export { PlanetOrb as n, Sun as r, useUnlocked as t };
