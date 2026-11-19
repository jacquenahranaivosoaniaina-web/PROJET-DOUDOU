import { i as __toESM, n as require_react } from "./jsx-runtime-d9L5Klo_.js";
//#region node_modules/@tanstack/react-router/dist/esm/routerContext.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var routerContext = import_react.createContext(null);
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouter.js
/**
* Access the current TanStack Router instance from React context.
* Must be used within a `RouterProvider`.
*
* Options:
* - `warn`: Log a warning if no router context is found (default: true).
*
* @returns The registered router instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterHook
*/
function useRouter(opts) {
	const value = import_react.useContext(routerContext);
	if (!value) warnMissingRouter(opts);
	return value;
}
function warnMissingRouter(opts) {}
//#endregion
export { routerContext as n, useRouter as t };
