import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DnYJWX7F.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as HudFrame } from "./HudFrame-CvEMghnu.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-C5MBBdZa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
