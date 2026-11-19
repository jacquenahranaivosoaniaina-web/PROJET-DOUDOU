const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/univers._planet-CNgGFAoV.js","assets/jsx-runtime-d9L5Klo_.js","assets/link-lL10T4Cs.js","assets/useSelector-DkuOBYI8.js","assets/useRouter-Cu9swiNv.js","assets/media-YQU4GYOy.js","assets/client-BwxsKtEd.js","assets/useQuery-DOJlbXWx.js","assets/universe-BxcUkM-o.js","assets/index-hIxds4vB.js","assets/matchContext-CV5SU9Px.js","assets/HudFrame-BFH2H7-j.js","assets/galaxy-DZGBsXVd.js","assets/use-unlocked-Bu5ZB_xN.js","assets/useNavigate-C7XcnjeD.js"])))=>i.map(i=>d[i]);
import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { a as notFound, n as matchContext, r as rootRouteId, t as dummyMatchContext } from "./matchContext-CV5SU9Px.js";
import { T as replaceEqualDeep, c as trimPathRight, n as cleanPath, s as trimPathLeft, t as Link, x as isModuleNotFoundError } from "./link-lL10T4Cs.js";
import { t as useSelector } from "./useSelector-DkuOBYI8.js";
import { t as useRouter } from "./useRouter-Cu9swiNv.js";
import { t as useNavigate } from "./useNavigate-C7XcnjeD.js";
import { r as resolveLovableAsset } from "./media-YQU4GYOy.js";
import { a as getPlanet } from "./universe-BxcUkM-o.js";
//#region node_modules/@tanstack/router-core/dist/esm/redirect.js
/**
* Create a redirect Response understood by TanStack Router.
*
* Use from route `loader`/`beforeLoad` or server functions to trigger a
* navigation. If `throw: true` is set, the redirect is thrown instead of
* returned. External `href` values are classified as full-document
* navigations when the router resolves the redirect.
*
* @param opts Options for the redirect. Common fields:
* - `href`: absolute URL for external redirects.
* - `statusCode`: HTTP status code to use (defaults to 307).
* - `headers`: additional headers to include on the Response.
* - Standard navigation options like `to`, `params`, `search`, `replace`,
*   and `reloadDocument` for internal redirects.
* @returns A Response augmented with router navigation options.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/redirectFunction
*/
function redirect(opts) {
	opts.statusCode = opts.statusCode || opts.code || 307;
	const headers = new Headers(opts.headers);
	if (opts.href && headers.get("Location") === null) headers.set("Location", opts.href);
	const response = new Response(null, {
		status: opts.statusCode,
		headers
	});
	response.options = opts;
	if (opts.throw) throw response;
	return response;
}
/** Check whether a value is a TanStack Router redirect Response. */
function isRedirect(obj) {
	return obj instanceof Response && !!obj.options;
}
/** Parse a serialized redirect object back into a redirect Response. */
function parseRedirect(obj) {
	if (obj !== null && typeof obj === "object" && obj.isSerializedRedirect) return redirect(obj);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/invariant.js
function invariant() {
	throw new Error("Invariant failed");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (originalIndex) => {
			this.originalIndex = originalIndex;
			this._branch = void 0;
			const options = this.options;
			const isRoot = !options?.path && !options?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = rootRouteId;
			else if (!this.parentRoute) invariant();
			let path = isRoot ? rootRouteId : options?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options?.id || path;
			const id = isRoot ? rootRouteId : cleanPath((this.parentRoute.id === "__root__" ? "" : this.parentRoute.id) + "/" + (customId ?? ""));
			if (path === "__root__") path = "/";
			const fullPath = id === "__root__" ? "/" : path === void 0 ? this.parentRoute.fullPath : cleanPath(this.parentRoute.fullPath + "/" + path);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.update = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* React.use if available (React 19+), undefined otherwise.
* Use dynamic lookup to avoid Webpack compilation errors with React 18.
*/
var reactUse = import_react.use;
var useLayoutEffect = import_react.useLayoutEffect;
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useMatch.js
var dummyMatch = {};
function useStructuralSharing(opts, router) {
	const previousResult = import_react.useRef();
	return (slice) => {
		const selected = opts?.select ? opts.select(slice) : slice;
		if (opts?.structuralSharing ?? router.options.defaultStructuralSharing) return previousResult.current = replaceEqualDeep(previousResult.current, selected);
		return selected;
	};
}
/**
* Read and select the nearest or targeted route match.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useMatchHook
*/
function useMatch(opts) {
	const router = useRouter();
	const nearestRouteId = import_react.useContext(opts.from ? dummyMatchContext : matchContext);
	const routeId = opts.from ?? nearestRouteId;
	const matchStore = router.stores.getMatchStore(routeId);
	const selector = useStructuralSharing(opts, router);
	const matchSelection = useSelector(matchStore, (match) => match ? selector(match) : dummyMatch);
	if (matchSelection !== dummyMatch) return matchSelection;
	if (opts.shouldThrow ?? true) invariant();
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
/**
* Read and select the current route's loader data with type‑safety.
*
* Options:
* - `from`/`strict`: Choose which route's data to read and strictness
* - `select`: Map the loader data to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader data (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDataHook
*/
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.loaderData) : match.loaderData;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
/**
* Read and select the current route's loader dependencies object.
*
* Options:
* - `from`: Choose which route's loader deps to read
* - `select`: Map the deps to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader deps (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDepsHook
*/
function useLoaderDeps(opts) {
	const { select, ...rest } = opts;
	return useMatch({
		...rest,
		select: (match) => {
			return select ? select(match.loaderDeps) : match.loaderDeps;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useParams.js
/**
* Access the current route's path parameters with type-safety.
*
* Options:
* - `from`/`strict`: Specify the matched route and whether to enforce strict typing
* - `select`: Project the params object to a derived value for memoized renders
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw if the route is not found in strict contexts
*
* @returns The params object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useParamsHook
*/
function useParams(opts) {
	return useMatch({
		from: opts.from,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		strict: opts.strict,
		select: (match) => {
			const params = opts.strict === false ? match.params : match._strictParams;
			return opts.select ? opts.select(params) : params;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useSearch.js
/**
* Read and select the current route's search parameters with type-safety.
*
* Options:
* - `from`/`strict`: Control which route's search is read and how strictly it's typed
* - `select`: Map the search object to a derived value for render optimization
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw when the route is not found (strict contexts)
*
* @returns The search object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useSearchHook
*/
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
	return useMatch({
		...opts,
		select: (match) => opts.select ? opts.select(match.context) : match.context
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/route.js
var import_jsx_runtime = require_jsx_runtime();
var Route$1 = class extends BaseRoute {
	/**
	* @deprecated Use the `createRoute` function instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				...opts,
				from: this.id
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				...opts,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				...opts,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a non-root Route instance for code-based routing.
*
* Use this to define a route that will be composed into a route tree
* (typically via a parent route's `addChildren`). If you're using file-based
* routing, prefer `createFileRoute`.
*
* @param options Route options (path, component, loader, context, etc.).
* @returns A Route instance to be attached to the route tree.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouteFunction
*/
function createRoute(options) {
	return new Route$1(options);
}
/**
* Creates a root route factory that requires a router context type.
*
* Use when your root route expects `context` to be provided to `createRouter`.
* The returned function behaves like `createRootRoute` but enforces a context type.
*
* @returns A factory function to configure and return a root route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteWithContextFunction
*/
function createRootRouteWithContext() {
	return (options) => {
		return createRootRoute(options);
	};
}
var RootRoute = class extends BaseRootRoute {
	/**
	* @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				...opts,
				from: this.id
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				...opts,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				...opts,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a root Route instance used to build your route tree.
*
* Typically paired with `createRouter({ routeTree })`. If you need to require
* a typed router context, use `createRootRouteWithContext` instead.
*
* @param options Root route options (component, error, pending, etc.).
* @returns A root route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteFunction
*/
function createRootRoute(options) {
	return new RootRoute(options);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/fileRoute.js
/**
* Creates a file-based Route factory for a given path.
*
* Used by TanStack Router's file-based routing to associate a file with a
* route. The returned function accepts standard route options. In normal usage
* the `path` string is inserted and maintained by the `tsr` generator.
*
* @param path File path literal for the route (usually auto-generated).
* @returns A function that accepts Route options and returns a Route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createFileRouteFunction
*/
function createFileRoute(path) {
	return (options) => {
		const route = createRoute(options);
		route.isRoot = false;
		return route;
	};
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
/**
* Wrap a dynamic import to create a route component that supports
* `.preload()` and friendly reload-on-module-missing behavior.
*
* @param importer Function returning a module promise
* @param exportName Named export to use (default: `default`)
* @returns A lazy route component compatible with TanStack Router
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/lazyRouteComponentFunction
*/
function lazyRouteComponent(importer, exportName) {
	let loadPromise;
	let comp;
	let error;
	const load = () => {
		if (!loadPromise) {
			error = void 0;
			loadPromise = importer().then((res) => {
				loadPromise = void 0;
				lazyComp.preload = void 0;
				comp = res[exportName ?? "default"];
			}).catch((err) => {
				loadPromise = void 0;
				error = err;
			});
		}
		return loadPromise;
	};
	const lazyComp = function Lazy(props) {
		if (error) {
			if (isModuleNotFoundError(error) && typeof sessionStorage !== "undefined") {
				const storageKey = `tanstack_router_reload:${error.message}`;
				if (!sessionStorage.getItem(storageKey)) {
					sessionStorage.setItem(storageKey, "1");
					window.location.reload();
					throw new Promise(() => {});
				}
			}
			throw error;
		}
		if (!comp) if (reactUse) reactUse(load());
		else throw load();
		return import_react.createElement(comp, props);
	};
	lazyComp.preload = load;
	return lazyComp;
}
//#endregion
//#region src/lib/ambience.ts
/**
* Romantic background music for the whole site. Browsers only allow sound after a tap,
* so it starts on the first interaction unless she turned it off (remembered on this device).
*/
var AMBIENCE_TRACKS = [resolveLovableAsset({
	version: 1,
	asset_id: "7d7cc7a2-2337-48b6-8d7d-f12f0db2b10e",
	project_id: "36884c16-b95b-4a5c-b9db-8d8fd071a318",
	url: "/__l5e/assets-v1/7d7cc7a2-2337-48b6-8d7d-f12f0db2b10e/ambiance-etoiles.mp3",
	r2_key: "a/v1/36884c16-b95b-4a5c-b9db-8d8fd071a318/7d7cc7a2-2337-48b6-8d7d-f12f0db2b10e/ambiance-etoiles.mp3",
	original_filename: "ambiance-etoiles.mp3",
	size: 616534,
	content_type: "audio/mpeg",
	created_at: "2026-11-16T16:37:00Z"
}.url), resolveLovableAsset({
	version: 1,
	asset_id: "6735217d-1d16-473d-a0a3-0e5e09f89df9",
	project_id: "36884c16-b95b-4a5c-b9db-8d8fd071a318",
	url: "/__l5e/assets-v1/6735217d-1d16-473d-a0a3-0e5e09f89df9/berceuse-etoiles.mp3",
	r2_key: "a/v1/36884c16-b95b-4a5c-b9db-8d8fd071a318/6735217d-1d16-473d-a0a3-0e5e09f89df9/berceuse-etoiles.mp3",
	original_filename: "berceuse-etoiles.mp3",
	size: 616534,
	content_type: "audio/mpeg",
	created_at: "2026-11-16T16:37:03Z"
}.url)];
var PREF_KEY = "doudou-music";
var VOLUME = .35;
var state = {
	on: true,
	playing: false
};
var audio = null;
var track = 0;
var ducked = false;
var armed = false;
var listeners = /* @__PURE__ */ new Set();
function set(next) {
	state = {
		...state,
		...next
	};
	listeners.forEach((l) => l());
}
function ensureAudio() {
	if (audio || typeof window === "undefined") return audio;
	audio = new Audio(AMBIENCE_TRACKS[track]);
	audio.volume = VOLUME;
	audio.preload = "auto";
	audio.addEventListener("ended", () => {
		track = (track + 1) % AMBIENCE_TRACKS.length;
		if (!audio) return;
		audio.src = AMBIENCE_TRACKS[track] ?? "";
		audio.play().catch(() => void 0);
	});
	audio.addEventListener("play", () => set({ playing: true }));
	audio.addEventListener("pause", () => set({ playing: false }));
	return audio;
}
function play() {
	const a = ensureAudio();
	if (!a || ducked || !state.on) return;
	a.play().catch(() => void 0);
}
/** Read her saved choice and start the music on the first tap/keypress. */
function initAmbience() {
	if (armed || typeof window === "undefined") return;
	armed = true;
	try {
		set({ on: window.localStorage.getItem(PREF_KEY) !== "off" });
	} catch {}
	const start = () => {
		window.removeEventListener("pointerdown", start);
		window.removeEventListener("keydown", start);
		play();
	};
	window.addEventListener("pointerdown", start);
	window.addEventListener("keydown", start);
}
function toggleAmbience() {
	const on = !state.on;
	set({ on });
	try {
		window.localStorage.setItem(PREF_KEY, on ? "on" : "off");
	} catch {}
	if (on) play();
	else audio?.pause();
}
/** Pause the background music while the film (which has its own score) plays. */
function duckAmbience(on) {
	ducked = on;
	if (on) audio?.pause();
	else play();
}
function subscribeAmbience(l) {
	listeners.add(l);
	return () => {
		listeners.delete(l);
	};
}
var getAmbience = () => state;
var SERVER_STATE = {
	on: true,
	playing: false
};
var getServerAmbience = () => SERVER_STATE;
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/routes/univers.$planet.tsx
var $$splitComponentImporter = () => __vitePreload(() => import("./univers._planet-CNgGFAoV.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
/** Each planet is its own interactive experience. */
var Route = createFileRoute("/univers/$planet")({
	loader: ({ params }) => {
		const planet = getPlanet(params.planet);
		if (!planet) throw notFound();
		return { planet };
	},
	head: ({ loaderData }) => {
		const name = loaderData?.planet.name ?? "Planète";
		const intro = loaderData?.planet.intro ?? "Archives de notre galaxie.";
		return { meta: [
			{ title: `${name} — Doudou, My Univers` },
			{
				name: "description",
				content: intro
			},
			{
				property: "og:title",
				content: `${name} — Doudou, My Univers`
			},
			{
				property: "og:description",
				content: intro
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { parseRedirect as _, getServerAmbience as a, toggleAmbience as c, createRootRouteWithContext as d, useStructuralSharing as f, isRedirect as g, invariant as h, getAmbience as i, lazyRouteComponent as l, useLayoutEffect as m, __vitePreload as n, initAmbience as o, reactUse as p, duckAmbience as r, subscribeAmbience as s, Route as t, createFileRoute as u, redirect as v };
