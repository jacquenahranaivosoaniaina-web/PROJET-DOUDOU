import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DnYJWX7F.mjs";
import { a as require_jsx_runtime, i as useQueryClient, n as useQuery, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as mediaQuery, t as MEDIA_BUCKET } from "./media-BrORvvzT.mjs";
import { n as PLANETS } from "./universe-BxcUkM-o.mjs";
import { t as HudFrame } from "./HudFrame-CvEMghnu.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-CDiXr7qK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function safeName(file) {
	const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
	return `${crypto.randomUUID()}.${(ext ?? "bin").toLowerCase().replace(/[^a-z0-9]/g, "")}`;
}
async function uploadFile(folder, file) {
	const path = `${folder}/${safeName(file)}`;
	const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, { contentType: file.type });
	if (error) throw error;
	return path;
}
function useOwner() {
	return useQuery({
		queryKey: ["is-owner"],
		queryFn: async () => {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) return {
				owner: false,
				email: ""
			};
			const { data } = await supabase.rpc("has_role", {
				_user_id: u.user.id,
				_role: "admin"
			});
			return {
				owner: !!data,
				email: u.user.email ?? ""
			};
		}
	});
}
function Atelier() {
	const owner = useOwner();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [tab, setTab] = (0, import_react.useState)("photo");
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen px-4 pb-16 pt-16 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudFrame, {
			topLeft: "ATELIER · GESTION DE L’UNIVERS",
			topRight: owner.data?.email
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "✦ L’ATELIER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-5xl",
							children: "Nos souvenirs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Les changements apparaissent tout de suite dans l’univers."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/univers/$planet",
							params: { planet: "nos-souvenirs" },
							className: "nav-chip hud-mono hud-mono-bright",
							children: "Voir la galerie"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono",
							onClick: signOut,
							children: "Se déconnecter"
						})]
					})]
				}),
				owner.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hud-mono",
					children: "Vérification de l’accès…"
				}),
				owner.data && !owner.data.owner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hud-box p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "serif-italic text-2xl text-blush",
						children: "Cet atelier est réservé à la gardienne de l’univers."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Ce compte n’a pas le droit de modifier les souvenirs."
					})]
				}),
				owner.data?.owner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tab-row mb-6",
					role: "tablist",
					children: [
						[
							"photo",
							"📸",
							"Photos & légendes"
						],
						[
							"secret",
							"✦",
							"Étoiles secrètes"
						],
						[
							"audio",
							"🎙️",
							"Messages vocaux"
						]
					].map(([id, icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": tab === id,
						className: `tab-card ${tab === id ? "is-on" : ""}`,
						onClick: () => setTab(id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tab-icon",
							children: icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tab-label",
							children: label
						})]
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manager, { kind: tab })] })
			]
		})]
	});
}
var ACCEPT = {
	photo: "image/*",
	secret: "image/*",
	audio: "audio/*"
};
function Manager({ kind }) {
	const qc = useQueryClient();
	const { data: items = [], isPending } = useQuery(mediaQuery(kind));
	const [error, setError] = (0, import_react.useState)("");
	const refresh = () => qc.invalidateQueries({ queryKey: ["media", kind] });
	async function run(task) {
		setError("");
		try {
			await task();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Une erreur est survenue.");
		}
		await refresh();
	}
	async function remove(item) {
		if (!window.confirm("Retirer ce souvenir de l’univers ?")) return;
		await run(async () => {
			const { error: err } = await supabase.from("media_items").delete().eq("id", item.id);
			if (err) throw err;
			if (item.storage_path) await supabase.storage.from(MEDIA_BUCKET).remove([item.storage_path]);
		});
	}
	async function move(i, d) {
		const a = items[i];
		const b = items[i + d];
		if (!a || !b) return;
		await run(async () => {
			const r1 = await supabase.from("media_items").update({ sort_order: b.sort_order === a.sort_order ? a.sort_order + d : b.sort_order }).eq("id", a.id);
			const r2 = await supabase.from("media_items").update({ sort_order: a.sort_order }).eq("id", b.id);
			if (r1.error) throw r1.error;
			if (r2.error) throw r2.error;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddForm, {
				kind,
				nextOrder: (items.at(-1)?.sort_order ?? 0) + 1,
				onDone: refresh
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "alert",
				className: "text-sm text-destructive",
				children: error
			}),
			isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hud-mono",
				children: "Chargement…"
			}),
			!isPending && !items.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted-foreground",
				children: "Rien ici pour l’instant."
			}),
			items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemRow, {
				item,
				kind,
				first: i === 0,
				last: i === items.length - 1,
				onMove: (d) => move(i, d),
				onRemove: () => remove(item),
				run
			}, item.id))
		]
	});
}
function PlanetSelect({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "atelier-input",
		value,
		onChange: (e) => onChange(e.target.value),
		"aria-label": "Planète",
		children: PLANETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: p.slug,
			children: p.name
		}, p.slug))
	});
}
function AddForm({ kind, nextOrder, onDone }) {
	const [title, setTitle] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [planet, setPlanet] = (0, import_react.useState)("mon-univers");
	const [file, setFile] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const needsFile = kind !== "secret";
	async function submit(e) {
		e.preventDefault();
		if (needsFile && !file) return;
		setBusy(true);
		setMsg("");
		try {
			const storage_path = file ? await uploadFile(kind, file) : null;
			const { error } = await supabase.from("media_items").insert({
				kind,
				title,
				caption,
				storage_path,
				planet: kind === "audio" ? planet : null,
				sort_order: nextOrder
			});
			if (error) throw error;
			setTitle("");
			setCaption("");
			setFile(null);
			e.target.reset();
			setMsg("Ajouté à l’univers ✦");
			onDone();
		} catch (err) {
			setMsg(err instanceof Error ? err.message : "L’ajout n’a pas fonctionné.");
		}
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "hud-box atelier-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: ["＋ ", (kind === "photo" ? "Ajouter une photo" : kind === "secret" ? "Ajouter une étoile secrète" : "Ajouter un message vocal").toUpperCase()]
			}),
			needsFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "atelier-input",
				type: "file",
				accept: ACCEPT[kind],
				required: true,
				onChange: (e) => setFile(e.target.files?.[0] ?? null),
				"aria-label": "Fichier"
			}),
			kind === "secret" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "atelier-input",
				type: "file",
				accept: "image/*",
				onChange: (e) => setFile(e.target.files?.[0] ?? null),
				"aria-label": "Photo (facultative)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "atelier-input",
				placeholder: kind === "audio" ? "Titre (ex. Mon message pour toi)" : "Titre",
				value: title,
				onChange: (e) => setTitle(e.target.value),
				required: kind !== "photo"
			}),
			kind !== "audio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "atelier-input",
				rows: 2,
				placeholder: kind === "photo" ? "Légende romantique" : "Le souvenir secret",
				value: caption,
				onChange: (e) => setCaption(e.target.value),
				required: true
			}),
			kind === "audio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetSelect, {
				value: planet,
				onChange: setPlanet
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "cosmic-btn",
					disabled: busy,
					children: busy ? "Envoi…" : "Ajouter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					role: "status",
					children: msg
				})]
			})
		]
	});
}
function ItemRow({ item, kind, first, last, onMove, onRemove, run }) {
	const [title, setTitle] = (0, import_react.useState)(item.title);
	const [caption, setCaption] = (0, import_react.useState)(item.caption);
	const [planet, setPlanet] = (0, import_react.useState)(item.planet ?? "mon-univers");
	const dirty = title !== item.title || caption !== item.caption || planet !== (item.planet ?? "mon-univers");
	function save() {
		return run(async () => {
			const { error } = await supabase.from("media_items").update({
				title,
				caption,
				planet: kind === "audio" ? planet : item.planet
			}).eq("id", item.id);
			if (error) throw error;
		});
	}
	function replace(file) {
		return run(async () => {
			const storage_path = await uploadFile(kind, file);
			const { error } = await supabase.from("media_items").update({
				storage_path,
				url: null
			}).eq("id", item.id);
			if (error) throw error;
			if (item.storage_path) await supabase.storage.from(MEDIA_BUCKET).remove([item.storage_path]);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hud-box atelier-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "atelier-thumb",
			children: kind === "audio" ? item.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				controls: true,
				src: item.src,
				preload: "none",
				className: "w-full"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎙️" }) : item.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.src,
				alt: item.title,
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "atelier-input",
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "Titre",
					"aria-label": "Titre"
				}),
				kind !== "audio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "atelier-input",
					rows: 2,
					value: caption,
					onChange: (e) => setCaption(e.target.value),
					placeholder: "Légende",
					"aria-label": "Légende"
				}),
				kind === "audio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetSelect, {
					value: planet,
					onChange: setPlanet
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono hud-mono-bright",
							disabled: !dirty,
							onClick: save,
							children: "Enregistrer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "nav-chip hud-mono hud-mono-bright cursor-pointer",
							children: ["Remplacer le fichier", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: ACCEPT[kind],
								className: "sr-only",
								onChange: (e) => {
									const f = e.target.files?.[0];
									if (f) replace(f);
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono",
							disabled: first,
							onClick: () => onMove(-1),
							"aria-label": "Monter",
							children: "↑"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono",
							disabled: last,
							onClick: () => onMove(1),
							"aria-label": "Descendre",
							children: "↓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono text-destructive",
							onClick: onRemove,
							children: "Retirer"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Atelier as component };
