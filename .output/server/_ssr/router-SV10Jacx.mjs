import { r as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import { t as supabase } from "./client-DnYJWX7F.mjs";
import { a as require_jsx_runtime, o as require_react, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Ht as redirect, S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as WARP_EVENT } from "./cosmos-events-T7Sml3jf.mjs";
import { a as initAmbience, i as getServerAmbience, o as subscribeAmbience, r as getAmbience, s as toggleAmbience, t as Route$7 } from "./univers._planet-DYbnMM4i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-SV10Jacx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DnmxCqO0.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var nebula_default = "/assets/nebula-BTLEjjOe.jpg";
var BASE_SPEED = 45e-5;
/** 3D starfield on canvas: depth, twinkle, pointer parallax, shooting stars and hyperspace warp. */
function Starfield() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const css = getComputedStyle(document.documentElement);
		const palette = [
			"--star-1",
			"--star-2",
			"--star-3",
			"--star-4"
		].map((v) => css.getPropertyValue(v).trim() || "white");
		const meteorColor = css.getPropertyValue("--star-1").trim() || "white";
		let w = 0;
		let h = 0;
		let dpr = 1;
		let stars = [];
		const meteors = [];
		let speed = BASE_SPEED;
		let target = BASE_SPEED;
		let warpUntil = 0;
		const pointer = {
			x: 0,
			y: 0,
			tx: 0,
			ty: 0
		};
		let raf = 0;
		const spawn = (z = Math.random()) => ({
			x: (Math.random() * 2 - 1) * 1.4,
			y: (Math.random() * 2 - 1) * 1.4,
			z: Math.max(.02, z),
			color: Math.floor(Math.random() * palette.length),
			twinkle: Math.random() * Math.PI * 2
		});
		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(900, Math.floor(w * h / 1800));
			stars = Array.from({ length: count }, () => spawn());
		};
		const onWarp = (e) => {
			const { strength, duration } = e.detail;
			target = BASE_SPEED + .045 * strength;
			warpUntil = performance_default.now() + duration;
		};
		const onPointer = (e) => {
			pointer.tx = (e.clientX / w - .5) * 2;
			pointer.ty = (e.clientY / h - .5) * 2;
		};
		const frame = (t) => {
			if (t > warpUntil) target = BASE_SPEED;
			speed += (target - speed) * .06;
			pointer.x += (pointer.tx - pointer.x) * .04;
			pointer.y += (pointer.ty - pointer.y) * .04;
			const cx = w / 2 - pointer.x * 24;
			const cy = h / 2 - pointer.y * 24;
			const f = Math.max(w, h) * .55;
			const streak = speed > .003;
			ctx.clearRect(0, 0, w, h);
			for (const s of stars) {
				const pz = s.z;
				if (!reduce) s.z -= speed;
				if (s.z <= .02) {
					Object.assign(s, spawn(1));
					continue;
				}
				const sx = cx + s.x / s.z * f;
				const sy = cy + s.y / s.z * f;
				if (sx < -50 || sx > w + 50 || sy < -50 || sy > h + 50) {
					Object.assign(s, spawn(1));
					continue;
				}
				const depth = 1 - s.z;
				const tw = reduce ? 1 : .65 + .35 * Math.sin(t * .002 + s.twinkle);
				ctx.globalAlpha = Math.min(1, depth * 1.3) * tw;
				ctx.fillStyle = palette[s.color] ?? "white";
				ctx.strokeStyle = palette[s.color] ?? "white";
				if (streak) {
					const px = cx + s.x / pz * f;
					const py = cy + s.y / pz * f;
					ctx.lineWidth = Math.max(.6, depth * 2.2);
					ctx.beginPath();
					ctx.moveTo(px, py);
					ctx.lineTo(sx, sy);
					ctx.stroke();
				} else {
					const r = Math.max(.35, depth * 1.7);
					ctx.beginPath();
					ctx.arc(sx, sy, r, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			if (!reduce && !streak && Math.random() < .004 && meteors.length < 2) meteors.push({
				x: Math.random() * w * .8 + w * .2,
				y: Math.random() * h * .35,
				vx: -(6 + Math.random() * 5),
				vy: 2.5 + Math.random() * 2,
				life: 1
			});
			for (let i = meteors.length - 1; i >= 0; i--) {
				const m = meteors[i];
				if (!m) continue;
				m.x += m.vx;
				m.y += m.vy;
				m.life -= .012;
				const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
				grad.addColorStop(0, meteorColor);
				grad.addColorStop(1, "transparent");
				ctx.globalAlpha = Math.max(0, m.life);
				ctx.strokeStyle = grad;
				ctx.lineWidth = 1.4;
				ctx.beginPath();
				ctx.moveTo(m.x, m.y);
				ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
				ctx.stroke();
				if (m.life <= 0) meteors.splice(i, 1);
			}
			ctx.globalAlpha = 1;
			raf = requestAnimationFrame(frame);
		};
		resize();
		raf = requestAnimationFrame(frame);
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", onPointer);
		window.addEventListener(WARP_EVENT, onWarp);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onPointer);
			window.removeEventListener(WARP_EVENT, onWarp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "cosmos-canvas",
		"aria-hidden": true
	});
}
/** Ambient background: nebula photo, 3D starfield, floating hearts and a faint HUD scanline. */
function Cosmos() {
	const [hearts, setHearts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setHearts(Array.from({ length: 8 }, () => ({
			left: `${8 + Math.random() * 84}vw`,
			top: `${10 + Math.random() * 80}vh`,
			delay: `${Math.random() * 12}s`
		})));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cosmos-nebula",
			"aria-hidden": true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "cosmos-photo",
			src: nebula_default,
			alt: "",
			"aria-hidden": true,
			width: 1920,
			height: 1088
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cosmos-vignette",
			"aria-hidden": true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hud-scan",
			"aria-hidden": true
		}),
		hearts.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "cosmos-heart",
			"aria-hidden": true,
			style: {
				left: h.left,
				top: h.top,
				animationDelay: h.delay
			},
			children: "♡"
		}, i))
	] });
}
/** Small floating button to turn the romantic background music on or off. */
function MusicToggle() {
	const { on, playing } = (0, import_react.useSyncExternalStore)(subscribeAmbience, getAmbience, getServerAmbience);
	(0, import_react.useEffect)(() => initAmbience(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `music-toggle ${on && playing ? "is-playing" : ""}`,
		onClick: toggleAmbience,
		"aria-label": on ? "Couper la musique" : "Mettre la musique",
		"aria-pressed": on,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "music-toggle-icon",
				"aria-hidden": true,
				children: on ? "♫" : "♪"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "music-eq",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			!on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "music-off",
				"aria-hidden": true
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Planète introuvable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Cette page s'est perdue quelque part dans l'univers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Retour à l'accueil"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Retour à l'accueil"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Doudou, My Univers" },
			{
				name: "description",
				content: "Notre système solaire, notre histoire, notre aventure…"
			},
			{
				property: "og:title",
				content: "Doudou, My Univers"
			},
			{
				property: "og:description",
				content: "Notre système solaire, notre histoire, notre aventure…"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=JetBrains+Mono:wght@300;400&family=Manrope:wght@300;400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const router = useRouter();
	const isStandaloneCard = useRouterState({ select: (s) => s.location.pathname === "/carte" });
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!isStandaloneCard && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cosmos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			!isStandaloneCard && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicToggle, {})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-rurTGXUa.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Doudou, My Universe — Entre dans notre univers" },
		{
			name: "description",
			content: "Notre système solaire, notre histoire, notre aventure… Entre le code secret pour ouvrir les portes de notre univers."
		},
		{
			property: "og:title",
			content: "Doudou, My Universe"
		},
		{
			property: "og:description",
			content: "Notre système solaire, notre histoire, notre aventure… Un univers rien qu'à nous deux."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./route-Di7iQBCH.mjs");
var Route$4 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data } = await supabase.auth.getUser();
		if (!data.user) throw redirect({ to: "/auth" });
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-C5MBBdZa.mjs");
var Route$3 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Connexion à l’atelier — Doudou, My Univers" },
		{
			name: "description",
			content: "Espace privé pour gérer les photos, légendes et messages vocaux de l’univers."
		},
		{
			property: "og:title",
			content: "Atelier — Doudou, My Univers"
		},
		{
			property: "og:description",
			content: "Espace privé de gestion de l’univers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./carte-BTkLi4Km.mjs");
var Route$2 = createFileRoute("/carte")({
	head: () => ({ meta: [{ title: "Carte Romantique — Cadeau Physique" }, {
		name: "description",
		content: "Carte physique romantique et raffinée avec QR Code menant vers le site surprise."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./atelier-CDiXr7qK.mjs");
var Route$1 = createFileRoute("/_authenticated/atelier")({
	head: () => ({ meta: [
		{ title: "Atelier — Doudou, My Univers" },
		{
			name: "description",
			content: "Ajouter, remplacer ou retirer les photos, légendes et messages vocaux de l’univers."
		},
		{
			property: "og:title",
			content: "Atelier — Doudou, My Univers"
		},
		{
			property: "og:description",
			content: "Gestion privée des souvenirs de l’univers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./univers.index--RoPcNWr.mjs");
var Route = createFileRoute("/univers/")({
	head: () => ({ meta: [
		{ title: "Notre système solaire — Doudou, My Universe" },
		{
			name: "description",
			content: "Cinq mondes, cinq fragments de notre histoire. Touche une planète pour t'en approcher."
		},
		{
			property: "og:title",
			content: "Notre système solaire — Doudou, My Universe"
		},
		{
			property: "og:description",
			content: "Cinq mondes, cinq fragments de notre histoire."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AuthenticatedRouteRoute = Route$4.update({
	id: "/_authenticated",
	getParentRoute: () => Route$6
});
var AuthRoute = Route$3.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$6
});
var CarteRoute = Route$2.update({
	id: "/carte",
	path: "/carte",
	getParentRoute: () => Route$6
});
var AuthenticatedAtelierRoute = Route$1.update({
	id: "/atelier",
	path: "/atelier",
	getParentRoute: () => AuthenticatedRouteRoute
});
var UniversIndexRoute = Route.update({
	id: "/univers/",
	path: "/univers/",
	getParentRoute: () => Route$6
});
var UniversPlanetRoute = Route$7.update({
	id: "/univers/$planet",
	path: "/univers/$planet",
	getParentRoute: () => Route$6
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAtelierRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	CarteRoute,
	UniversPlanetRoute,
	UniversIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
