import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { t as useNavigate } from "./useNavigate-C7XcnjeD.js";
import { t as supabase } from "./client-B1JAUzLv.js";
import { t as HudFrame } from "./HudFrame-BFH2H7-j.js";
//#region node_modules/@lovable.dev/cloud-auth-js/dist/index.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var EXPECTED_MESSAGE_TYPE = "authorization_response";
var DEFAULT_OAUTH_BROKER_URL = "/~oauth/initiate";
var DEFAULT_SUPPORTED_OAUTH_ORIGINS = ["https://oauth.lovable.app", "https://lovable.dev"];
var DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI = "lovable://oauth-callback";
var DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI = "http://127.0.0.1/iframe-oauth/callback";
var POPUP_CHECK_INTERVAL_MS = 500;
var IFRAME_FALLBACK_TIMEOUT_MS = 12e4;
var POPUP_RESULT_TIMEOUT_MS = 3e5;
var MOBILE_APP_SCHEME_UA_TOKEN = /LovableAppScheme\/([a-z0-9.+-]+)/i;
function mobileDeepLinkRedirectUri(ua) {
	const scheme = MOBILE_APP_SCHEME_UA_TOKEN.exec(ua)?.[1];
	return scheme ? `${scheme}://oauth-callback` : DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI;
}
function sameOriginRedirectUri(redirectUri) {
	const pageOrigin = window.location.origin;
	if (pageOrigin === "null") return redirectUri;
	let parsed;
	try {
		parsed = new URL(redirectUri, window.location.href);
	} catch {
		return redirectUri;
	}
	if (parsed.origin === pageOrigin) return redirectUri;
	const rewritten = `${pageOrigin}${parsed.pathname}${parsed.search}${parsed.hash}`;
	console.warn(`[cloud-auth-js] redirect_uri origin ${parsed.origin} differs from the page origin ${pageOrigin}; using ${rewritten} so the popup result can reach this window`);
	return rewritten;
}
function startWebMessageListener(supportedOrigins) {
	let resolvePromise;
	const promise = new Promise((resolve) => {
		resolvePromise = resolve;
	});
	const callback = (e) => {
		if (!supportedOrigins.some((origin) => e.origin === origin)) return;
		const data = e.data;
		if (!data || typeof data !== "object") return;
		if (data.type !== EXPECTED_MESSAGE_TYPE) return;
		resolvePromise(data.response);
	};
	const cleanup = () => {
		window.removeEventListener("message", callback);
	};
	window.addEventListener("message", callback);
	return {
		cleanup,
		messagePromise: promise
	};
}
function getPopupDimensions(isInIframe) {
	const hasBrowserPosition = window.screenX !== 0 || window.screenY !== 0 || !isInIframe;
	const width = hasBrowserPosition ? window.outerWidth * .5 : window.screen.width * .5;
	const height = hasBrowserPosition ? window.outerHeight * .5 : window.screen.height * .5;
	return {
		width,
		height,
		left: hasBrowserPosition ? window.screenX + (window.outerWidth - width) / 2 : (window.screen.width - width) / 2,
		top: hasBrowserPosition ? window.screenY + (window.outerHeight - height) / 2 : (window.screen.height - height) / 2
	};
}
function processOAuthResponse(data, expectedState) {
	if (data.state !== expectedState) return { error: /* @__PURE__ */ new Error("State is invalid") };
	if (data.error) {
		if (data.error === "legacy_flow") return { error: /* @__PURE__ */ new Error("This flow is not supported in Preview mode. Please open the app in a new tab to sign in.") };
		return { error: new Error(data.error_description ?? "Sign in failed") };
	}
	if (!data.access_token || !data.refresh_token) return { error: /* @__PURE__ */ new Error("No tokens received") };
	return {
		tokens: {
			access_token: data.access_token,
			refresh_token: data.refresh_token
		},
		error: null
	};
}
function isDevice() {
	const ua = navigator.userAgent;
	if (/iPhone|iPad|iPod|Android/i.test(ua)) return true;
	if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return true;
	return false;
}
function generateState() {
	if (typeof crypto !== "undefined" && crypto.getRandomValues) return [...crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function createAuth(config = {}) {
	const oauthBrokerUrl = config.oauthBrokerUrl ?? DEFAULT_OAUTH_BROKER_URL;
	const supportedOAuthOrigins = config.supportedOAuthOrigins ?? DEFAULT_SUPPORTED_OAUTH_ORIGINS;
	async function signInWithOAuth(provider, opts = {}) {
		let isInIframe = false;
		try {
			isInIframe = window.self !== window.top;
		} catch {
			isInIframe = true;
		}
		const ua = navigator.userAgent;
		const isMobileApp = /LovableApp\//.test(ua);
		const isDesktopApp = !isMobileApp && /lovable/i.test(ua);
		const state = generateState();
		let redirectUri = opts.redirect_uri ?? window.location.origin;
		if (isMobileApp && isInIframe) redirectUri = mobileDeepLinkRedirectUri(ua);
		else if (isDesktopApp && isInIframe) redirectUri = DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI;
		const useWebMessage = isInIframe && !isMobileApp && !isDesktopApp;
		if (useWebMessage) redirectUri = sameOriginRedirectUri(redirectUri);
		const params = new URLSearchParams({
			...opts.extraParams,
			provider,
			redirect_uri: redirectUri,
			state
		});
		if (!isInIframe) {
			window.location.href = `${oauthBrokerUrl}?${params.toString()}`;
			return {
				error: null,
				redirected: true
			};
		}
		if (useWebMessage) params.set("response_mode", "web_message");
		const url = `${oauthBrokerUrl}?${params.toString()}`;
		const { messagePromise, cleanup } = startWebMessageListener(isDesktopApp ? [...supportedOAuthOrigins, window.location.origin] : supportedOAuthOrigins);
		let popup;
		if (isDevice()) popup = window.open(url, "_blank");
		else {
			const { width, height, left, top } = getPopupDimensions(isInIframe);
			popup = window.open(url, "oauth", `width=${width},height=${height},left=${left},top=${top}`);
		}
		if (!popup && (isMobileApp || isDesktopApp)) {
			let webViewTimeoutId;
			const webViewTimeoutPromise = new Promise((_, reject) => {
				webViewTimeoutId = setTimeout(() => {
					reject(/* @__PURE__ */ new Error("OAuth timed out waiting for response"));
				}, IFRAME_FALLBACK_TIMEOUT_MS);
			});
			try {
				return processOAuthResponse(await Promise.race([messagePromise, webViewTimeoutPromise]), state);
			} catch (error) {
				return { error: error instanceof Error ? error : new Error(String(error)) };
			} finally {
				if (webViewTimeoutId) clearTimeout(webViewTimeoutId);
				cleanup();
			}
		}
		if (!popup) {
			cleanup();
			return { error: /* @__PURE__ */ new Error("Popup was blocked") };
		}
		let popupCheckInterval;
		const popupClosedPromise = new Promise((_, reject) => {
			popupCheckInterval = setInterval(() => {
				if (popup.closed) {
					clearInterval(popupCheckInterval);
					reject(/* @__PURE__ */ new Error("Sign in was cancelled"));
				}
			}, POPUP_CHECK_INTERVAL_MS);
		});
		let resultTimeoutId;
		const resultTimeoutPromise = new Promise((_, reject) => {
			resultTimeoutId = setTimeout(() => {
				reject(/* @__PURE__ */ new Error("Sign-in timed out waiting for the sign-in window. If it is still open, finish there, or open the app in a new browser tab to sign in."));
			}, POPUP_RESULT_TIMEOUT_MS);
		});
		try {
			return processOAuthResponse(await Promise.race([
				messagePromise,
				popupClosedPromise,
				resultTimeoutPromise
			]), state);
		} catch (error) {
			return { error: error instanceof Error ? error : new Error(String(error)) };
		} finally {
			clearTimeout(resultTimeoutId);
			clearInterval(popupCheckInterval);
			cleanup();
			popup?.close();
		}
	}
	return { signInWithOAuth };
}
function createLovableAuth(config = {}) {
	return createAuth(config);
}
//#endregion
//#region src/integrations/lovable/index.ts
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
//#endregion
//#region src/routes/auth.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/atelier",
				replace: true
			});
		});
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_IN" && session) navigate({
				to: "/atelier",
				replace: true
			});
		});
		return () => data.subscription.unsubscribe();
	}, [navigate]);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setMsg("");
		if (mode === "in") {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) setMsg("E-mail ou mot de passe incorrect.");
		} else {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: `${window.location.origin}/auth` }
			});
			if (error) setMsg(error.message);
			else if (!data.session) setMsg("Vérifie ta boîte mail pour confirmer ton compte ✉️");
		}
		setBusy(false);
	}
	async function google() {
		if ((await lovable.auth.signInWithOAuth("google", { redirect_uri: `${window.location.origin}/auth` })).error) setMsg("La connexion avec Google n’a pas abouti.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen items-center justify-center px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudFrame, { topLeft: "ATELIER · ACCÈS PRIVÉ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "hud-box rise-in w-full max-w-md p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "✦ L’ATELIER DE L’UNIVERS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "my-3 text-4xl",
					children: mode === "in" ? "Connexion" : "Créer mon accès"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 text-xs text-muted-foreground",
					children: "Le tout premier compte créé devient la gardienne de l’univers : lui seul peut modifier les photos et la voix."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "google-btn",
					onClick: google,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						width: "18",
						height: "18",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#4285F4",
								d: "M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#34A853",
								d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#FBBC05",
								d: "M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#EA4335",
								d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
							})
						]
					}), "Continuer avec Google"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-5 hud-mono",
					children: "— OU —"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "cosmic-field mb-3 tracking-normal",
					type: "email",
					required: true,
					placeholder: "E-mail",
					"aria-label": "E-mail",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					autoComplete: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "cosmic-field mb-4 tracking-normal",
					type: "password",
					required: true,
					minLength: 6,
					placeholder: "Mot de passe",
					"aria-label": "Mot de passe",
					value: password,
					onChange: (e) => setPassword(e.target.value),
					autoComplete: mode === "in" ? "current-password" : "new-password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "cosmic-btn cosmic-btn-primary",
					disabled: busy,
					children: mode === "in" ? "Entrer dans l’atelier" : "Créer mon accès"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "alert",
					className: "mt-3 min-h-5 text-xs text-destructive",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-2 text-xs text-lavender underline",
					onClick: () => {
						setMode(mode === "in" ? "up" : "in");
						setMsg("");
					},
					children: mode === "in" ? "Première visite ? Créer mon accès" : "J’ai déjà un accès"
				})
			]
		})]
	});
}
//#endregion
export { AuthPage as component };
