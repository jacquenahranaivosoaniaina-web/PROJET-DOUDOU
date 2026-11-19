import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-d9L5Klo_.js";
import { r as duckAmbience, t as Route } from "./univers._planet-CpNh4Nl1.js";
import { t as Link } from "./link-lL10T4Cs.js";
import { n as mediaQuery, r as resolveLovableAsset } from "./media-BG1s1L22.js";
import { t as useQuery } from "./useQuery-CyjtwUd5.js";
import { n as PLANETS, o as getPlanetIndex, r as SURPRISE_MESSAGE, t as COUNTDOWN_END_SYMBOL } from "./universe-BxcUkM-o.js";
import { t as warp } from "./index-BiiIgs2t.js";
import { t as HudFrame } from "./HudFrame-BFH2H7-j.js";
import "./galaxy-DZGBsXVd.js";
import { n as PlanetOrb, t as useUnlocked } from "./use-unlocked-Bu5ZB_xN.js";
//#region src/components/experiences/Reveal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
/** Words fade in one after another. */
function RevealWords({ text, delay = 0, step = 70, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "word-in",
			style: { animationDelay: `${delay + i * step}ms` },
			children: [w, " "]
		}, `${w}-${i}`))
	});
}
/** True once the element has scrolled into view. */
function useInView() {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || seen) return;
		const io = new IntersectionObserver(([e]) => e?.isIntersecting && setSeen(true), { threshold: .25 });
		io.observe(el);
		return () => io.disconnect();
	}, [seen]);
	return {
		ref,
		seen
	};
}
var SHAPES = [
	"♥",
	"✦",
	"♡",
	"✧"
];
/** Celebration burst of hearts and stars; change `id` to replay it. */
function Burst({ id, count = 16 }) {
	if (!id) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "burst",
		"aria-hidden": true,
		children: Array.from({ length: count }, (_, i) => {
			const angle = i / count * Math.PI * 2;
			const dist = 60 + i * 37 % 50;
			const style = {
				"--dx": `${Math.cos(angle) * dist}px`,
				"--dy": `${Math.sin(angle) * dist}px`,
				animationDelay: `${i % 4 * 30}ms`
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "burst-bit",
				style,
				children: SHAPES[i % SHAPES.length]
			}, i);
		})
	}, id);
}
//#endregion
//#region src/assets/story/scene-1-amphi.jpg
var scene_1_amphi_default = "/assets/scene-1-amphi-CzIKLUZ6.jpg";
//#endregion
//#region src/assets/story/scene-2-stylo.jpg
var scene_2_stylo_default = "/assets/scene-2-stylo-DWL3BDeE.jpg";
//#endregion
//#region src/assets/story/scene-3-regard.jpg
var scene_3_regard_default = "/assets/scene-3-regard-PXA1Tlx5.jpg";
//#endregion
//#region src/assets/story/scene-4-numero.jpg
var scene_4_numero_default = "/assets/scene-4-numero-QDzcBfaM.jpg";
//#endregion
//#region src/assets/story/scene-5-aout.jpg
var scene_5_aout_default = "/assets/scene-5-aout-DDP-uThd.jpg";
//#endregion
//#region src/assets/story/scene-6-baiser.jpg
var scene_6_baiser_default = "/assets/scene-6-baiser-BE3NI596.jpg";
//#endregion
//#region src/assets/film/k1-cour.jpg
var k1_cour_default = "/assets/k1-cour-VZ0axz5X.jpg";
//#endregion
//#region src/assets/film/k2-regard.jpg
var k2_regard_default = "/assets/k2-regard-vCRUBmmE.jpg";
//#endregion
//#region src/assets/film/k3-stylo.jpg
var k3_stylo_default = "/assets/k3-stylo-MRILf_wh.jpg";
//#endregion
//#region src/assets/film/k4-baiser.jpg
var k4_baiser_default = "/assets/k4-baiser-CgTwRqyT.jpg";
//#endregion
//#region src/assets/film/k5-riviere.jpg
var k5_riviere_default = "/assets/k5-riviere-CqMVDWUZ.jpg";
//#endregion
//#region src/assets/film/k6-etoiles.jpg
var k6_etoiles_default = "/assets/k6-etoiles-6F5xL_WA.jpg";
//#endregion
//#region src/assets/film/riviere-3d.jpg
var riviere_3d_default = "/assets/riviere-3d-CNS0Ivpa.jpg";
var film_rencontre_mp3_asset_default = {
	version: 1,
	asset_id: "547b515f-14cd-4324-9555-0e43237917da",
	project_id: "36884c16-b95b-4a5c-b9db-8d8fd071a318",
	url: "/__l5e/assets-v1/547b515f-14cd-4324-9555-0e43237917da/film-rencontre.mp3",
	r2_key: "a/v1/36884c16-b95b-4a5c-b9db-8d8fd071a318/547b515f-14cd-4324-9555-0e43237917da/film-rencontre.mp3",
	original_filename: "film-rencontre.mp3",
	size: 616534,
	content_type: "audio/mpeg",
	created_at: "2026-11-16T16:37:06Z"
};
var film_final_mp3_asset_default = {
	version: 1,
	asset_id: "14d30197-c3e6-4f16-ae74-8386cb5f2c84",
	project_id: "36884c16-b95b-4a5c-b9db-8d8fd071a318",
	url: "/__l5e/assets-v1/14d30197-c3e6-4f16-ae74-8386cb5f2c84/film-final.mp3",
	r2_key: "a/v1/36884c16-b95b-4a5c-b9db-8d8fd071a318/14d30197-c3e6-4f16-ae74-8386cb5f2c84/film-final.mp3",
	original_filename: "film-final.mp3",
	size: 616534,
	content_type: "audio/mpeg",
	created_at: "2026-11-16T16:37:09Z"
};
//#endregion
//#region src/lib/experiences.ts
/**
* Content for the five planet experiences. Photos, captions, secret stars and voice notes
* are NOT here: they live in Lovable Cloud and are managed from /atelier.
*/
var STORY_SCENES = [
	{
		img: scene_1_amphi_default,
		chapter: "Chapitre I",
		title: "Première année",
		caption: "Une salle de cours, la rentrée… et toi, le délégué de classe."
	},
	{
		img: scene_2_stylo_default,
		chapter: "Chapitre II",
		title: "Le stylo noir",
		caption: "Tu envoies un ami me demander… un stylo noir."
	},
	{
		img: scene_3_regard_default,
		chapter: "Chapitre III",
		title: "Le premier regard",
		caption: "Je te le tends. Nos regards se croisent. Un sourire."
	},
	{
		img: scene_4_numero_default,
		chapter: "Chapitre IV",
		title: "Ton prénom ?",
		caption: "Tu rapportes le stylo, tu demandes mon prénom… puis mon numéro."
	},
	{
		img: scene_5_aout_default,
		chapter: "Chapitre V",
		title: "Août 2021",
		caption: "Et notre histoire commence."
	},
	{
		img: scene_6_baiser_default,
		chapter: "Chapitre VI",
		title: "Le premier baiser",
		caption: "Tu me raccompagnes chez moi. Notre premier baiser."
	}
];
var RIDDLES = [
	{
		question: "Je suis petit, noir, et j’ai écrit la première ligne de notre histoire. Qui suis-je ?",
		options: [
			"✒️ Un stylo noir",
			"📱 Un téléphone",
			"📓 Un cahier",
			"🧽 Une gomme"
		],
		answer: 0,
		success: "Ce stylo restera notre trésor."
	},
	{
		question: "Dans la classe, tu avais un titre officiel. Lequel ?",
		options: [
			"🎧 DJ de la promo",
			"🎖️ Délégué de classe",
			"⚽ Capitaine de foot",
			"📚 Assistant du prof"
		],
		answer: 1,
		success: "Le délégué le plus charmant de l’université."
	},
	{
		question: "Qui est venu me demander le stylo à ta place ?",
		options: [
			"🙋 Toi-même",
			"👨‍🏫 Le professeur",
			"🤝 Un ami",
			"🙈 Personne"
		],
		answer: 2,
		success: "Un messager… très bien choisi !"
	},
	{
		question: "En me rendant le stylo, qu’as-tu osé me demander ?",
		options: [
			"⏰ L’heure",
			"📝 Mes notes de cours",
			"✒️ Un deuxième stylo",
			"💌 Mon prénom"
		],
		answer: 3,
		success: "Puis mon numéro… le début de tout."
	},
	{
		question: "En quel mois notre histoire a-t-elle officiellement commencé ?",
		options: [
			"❄️ Janvier 2021",
			"☀️ Août 2021",
			"🎄 Décembre 2021",
			"🌸 Août 2022"
		],
		answer: 1,
		success: "Août 2021, notre première étoile."
	}
];
var WHO_LABEL = {
	lui: "🤴 Lui",
	elle: "👸 Elle",
	nous: "💞 Nous deux"
};
var QUIZ = [
	{
		icon: "⚽",
		question: "Qui est le plus grand fan du Real Madrid ?",
		answer: "nous"
	},
	{
		icon: "🎮",
		question: "Qui gagne le plus souvent aux jeux vidéo ?",
		answer: "lui"
	},
	{
		icon: "💬",
		question: "Qui a envoyé le tout premier message ?",
		answer: "lui"
	},
	{
		icon: "😴",
		question: "Qui s’endort en premier devant un film ?",
		answer: "elle"
	},
	{
		icon: "💻",
		question: "Qui répare tout ce qui est technologie ?",
		answer: "lui"
	},
	{
		icon: "🍫",
		question: "Qui est le plus gourmand ?",
		answer: "elle"
	},
	{
		icon: "⏰",
		question: "Qui est le plus souvent en retard ?",
		answer: "elle"
	},
	{
		icon: "❤️",
		question: "Qui aime le plus l’autre ?",
		answer: "nous"
	}
];
var CHALLENGES = [
	{
		icon: "⚽",
		theme: "Football",
		text: "Séance de tirs au but : 5 penalties chacun. Le perdant offre une glace."
	},
	{
		icon: "🎮",
		theme: "Jeux vidéo",
		text: "Un match de FIFA : si je gagne, tu me portes jusqu’au canapé."
	},
	{
		icon: "💻",
		theme: "Tech",
		text: "Échange de téléphones pendant 10 minutes… sans rien cacher !"
	},
	{
		icon: "📸",
		theme: "Photo",
		text: "Recréer notre première photo ensemble, avec la même pose."
	},
	{
		icon: "🎤",
		theme: "Duo",
		text: "Chanter notre chanson préférée à deux, à fond, sans honte."
	},
	{
		icon: "🍳",
		theme: "Cuisine",
		text: "Cuisiner ensemble un plat que nous n’avons jamais goûté."
	}
];
var DREAMS = [
	{
		icon: "✈️",
		name: "Notre premier grand voyage",
		message: "Un aller simple vers l’aventure, ta main dans la mienne.",
		x: 14,
		y: 70
	},
	{
		icon: "🏟️",
		name: "Le Santiago Bernabéu",
		message: "Voir le Real Madrid jouer, ensemble, en vrai, dans le stade.",
		x: 30,
		y: 28
	},
	{
		icon: "🎓",
		name: "Nos réussites",
		message: "Diplômes, projets, rêves : se pousser l’un l’autre vers le haut.",
		x: 50,
		y: 62
	},
	{
		icon: "🏡",
		name: "Notre maison",
		message: "Un petit coin à nous, plein de rires, de plantes et de souvenirs.",
		x: 66,
		y: 22
	},
	{
		icon: "💍",
		name: "Le grand oui",
		message: "Un jour, devant tous ceux qu’on aime…",
		x: 80,
		y: 60
	},
	{
		icon: "✨",
		name: "Notre famille",
		message: "Et peut-être, un jour, de petites étoiles rien qu’à nous.",
		x: 90,
		y: 24
	}
];
var ADVENTURES = [
	"🌴 Road trip à travers Madagascar",
	"🏖️ Week-end à la plage",
	"⚽ Un match au stade",
	"🔭 Une nuit à regarder les étoiles",
	"🍜 Un cours de cuisine à deux",
	"🎮 Un tournoi de jeux vidéo",
	"🌄 Randonnée au lever du soleil",
	"🧺 Pique-nique en forêt"
];
var CAPSULE = {
	openOn: "Août 2031",
	message: "Mon Roi, si tu lis ceci dans dix ans, j’espère qu’on rit encore pour rien, qu’on se dispute toujours pour la télécommande… et qu’on se choisit encore, chaque matin. Je t’aime, aujourd’hui et pour tous les lendemains."
};
var FINALE_MESSAGES = [
	"Il existe des milliards d’étoiles…",
	"…des millions de planètes…",
	"…mais un seul univers compte pour moi.",
	"Le nôtre."
];
var LOVE_LETTER = [
	"Mon Roi,",
	"Depuis ce stylo noir, ma vie a changé de couleur.",
	"Tu es mon calme, mon fou rire, mon meilleur ami et mon plus beau voyage.",
	"Merci de me choisir, chaque jour, dans tous les univers possibles.",
	"Je t’aime.",
	"— Ta Chouchou, pour toujours"
];
var FILM_POSTER = riviere_3d_default;
var FILM_POSTER_CAPTION = "Notre toute première photo, au bord de la rivière.";
var FILM_MUSIC = {
	rencontre: resolveLovableAsset(film_rencontre_mp3_asset_default.url),
	final: resolveLovableAsset(film_final_mp3_asset_default.url)
};
var FILM_SCENES = [
	{
		img: k1_cour_default,
		video: null,
		seconds: 9,
		music: "rencontre",
		kicker: "Chapitre I",
		text: "Une cour d’université, de grands arbres… et un délégué qui cherche un stylo."
	},
	{
		img: k2_regard_default,
		video: null,
		seconds: 9,
		music: "rencontre",
		kicker: "Chapitre II",
		text: "Un stylo noir. Un regard. Un sourire."
	},
	{
		img: k3_stylo_default,
		video: null,
		seconds: 9,
		music: "rencontre",
		kicker: "Chapitre III",
		text: "« Merci pour le stylo… Tu t’appelles comment ? »"
	},
	{
		img: k4_baiser_default,
		video: null,
		seconds: 9,
		music: "rencontre",
		kicker: "Chapitre IV",
		text: "Nos numéros, ses premiers messages, il m’attendait après les cours… puis notre premier baiser."
	},
	{
		img: k5_riviere_default,
		video: null,
		seconds: 9,
		music: "final",
		title: "Août 2021",
		text: "Et notre histoire commence."
	},
	{
		img: k6_etoiles_default,
		video: null,
		seconds: 8,
		music: "final"
	}
];
var FILM_FINALE = {
	date: "8 décembre",
	title: "6 ans d’amour",
	message: [
		"Six ans après ce premier regard, je suis toujours heureuse que nos chemins se soient croisés.",
		"Tout a commencé par un simple stylo noir, un regard et un sourire.",
		"Aujourd’hui, je t’offre cette petite surprise pour te rappeler combien mon amour pour toi est précieux.",
		"Et si je pouvais recommencer cette histoire, je choisirais encore ce même moment, ce même regard et surtout… toi.",
		"Joyeux anniversaire, mon Doudou. ❤️"
	]
};
//#endregion
//#region src/components/experiences/Avenir.tsx
var ADVENTURE_KEY = "doudou-adventures";
var FLIGHT_MS = 1400;
function Spaceship() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 64",
		className: "ship-svg",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "ship-flame",
				d: "M14 50 Q20 66 26 50 Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "ship-fin",
				d: "M10 34 L2 50 L12 46 Z M30 34 L38 50 L28 46 Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "ship-body",
				d: "M20 2 C31 12 32 30 28 48 L12 48 C8 30 9 12 20 2 Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "ship-window",
				cx: "20",
				cy: "22",
				r: "5"
			})
		]
	});
}
/** A little spaceship flying between our dreams. */
function DreamJourney() {
	const [at, setAt] = (0, import_react.useState)(null);
	const [shown, setShown] = (0, import_react.useState)(null);
	const [visited, setVisited] = (0, import_react.useState)([]);
	const [angle, setAngle] = (0, import_react.useState)(0);
	const pos = at === null ? {
		x: 4,
		y: 92
	} : DREAMS[at] ?? {
		x: 4,
		y: 92
	};
	function fly(i) {
		const to = DREAMS[i];
		if (!to || i === at) {
			setShown(i);
			return;
		}
		setAngle(Math.atan2(to.y - pos.y, to.x - pos.x) * 180 / Math.PI + 90);
		setAt(i);
		setShown(null);
		window.setTimeout(() => {
			setShown(i);
			setVisited((v) => v.includes(i) ? v : [...v, i]);
		}, FLIGHT_MS);
	}
	const dream = shown === null ? null : DREAMS[shown];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hud-box exp-card",
		"aria-label": "Le voyage vers nos rêves",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exp-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "🚀 TOUCHE UNE DESTINATION"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hud-mono hud-mono-bright",
					children: [
						"RÊVES VISITÉS ",
						visited.length,
						"/",
						DREAMS.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dream-map",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "dream-path",
						viewBox: "0 0 100 100",
						preserveAspectRatio: "none",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: ["4,92", ...DREAMS.map((d) => `${d.x},${d.y}`)].join(" ") })
					}),
					DREAMS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `dream ${visited.includes(i) ? "is-visited" : ""} ${at === i ? "is-here" : ""}`,
						style: {
							left: `${d.x}%`,
							top: `${d.y}%`,
							animationDelay: `${i * -.7}s`
						},
						onClick: () => fly(i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dream-glow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "dream-icon",
								children: d.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "dream-name",
								children: d.name
							})
						]
					}, d.name)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ship",
						style: {
							left: `${pos.x}%`,
							top: `${pos.y}%`,
							transitionDuration: `${FLIGHT_MS}ms`,
							rotate: `${angle}deg`
						},
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spaceship, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dream-message",
				"aria-live": "polite",
				children: dream ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hud-mono hud-mono-bright",
							children: [dream.icon, " DESTINATION ATTEINTE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "exp-title my-2",
							children: dream.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic text-xl text-blush",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
								text: dream.message,
								delay: 200
							})
						})
					]
				}, dream.name) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: at === null ? "Le vaisseau attend tes ordres, capitaine." : "Voyage en cours…"
				})
			})
		]
	});
}
/** Pick our next adventures; the choice is remembered on this device. */
function AdventurePicker() {
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(ADVENTURE_KEY);
			if (raw) {
				setPicked(JSON.parse(raw));
				setSaved(true);
			}
		} catch {}
	}, []);
	function toggle(a) {
		setSaved(false);
		setPicked((p) => p.includes(a) ? p.filter((x) => x !== a) : p.length >= 3 ? p : [...p, a]);
	}
	function save() {
		try {
			window.localStorage.setItem(ADVENTURE_KEY, JSON.stringify(picked));
		} catch {}
		setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hud-box exp-card",
		"aria-label": "Nos prochaines aventures",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exp-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [
						"🧭 CHOISIS NOS ",
						3,
						" PROCHAINES AVENTURES"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hud-mono hud-mono-bright",
					children: [
						picked.length,
						"/",
						3
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "chip-cloud",
				children: ADVENTURES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `adv-chip ${picked.includes(a) ? "is-on" : ""}`,
					onClick: () => toggle(a),
					"aria-pressed": picked.includes(a),
					children: a
				}, a))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 text-center",
				children: saved && picked.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reward rise-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, { id: picked.join() }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "✦ MISSION ENREGISTRÉE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic mt-2 text-xl text-blush",
							children: picked.join(" · ")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn cosmic-btn-primary",
					disabled: !picked.length,
					onClick: save,
					children: "Valider notre mission ✦"
				})
			})
		]
	});
}
function TimeCapsule() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hud-box exp-card text-center",
		"aria-label": "Capsule temporelle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: ["⏳ CAPSULE TEMPORELLE · À OUVRIR EN ", CAPSULE.openOn.toUpperCase()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `capsule ${open ? "is-open" : ""}`,
				onClick: () => setOpen(true),
				"aria-label": "Ouvrir la capsule",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "capsule-half capsule-top" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "capsule-core" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "capsule-half capsule-bottom" })
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "capsule-message serif-italic rise-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
					text: CAPSULE.message,
					delay: 700,
					step: 55
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "cosmic-btn",
				onClick: () => setOpen(true),
				children: "Ouvrir la capsule maintenant"
			})
		]
	});
}
function AvenirExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "exp-stack",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DreamJourney, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventurePicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeCapsule, {})
		]
	});
}
//#endregion
//#region src/components/experiences/AudioPlayer.tsx
function fmt(s) {
	if (!Number.isFinite(s)) return "0:00";
	return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}
/** Play/pause player for one of her own voice recordings, played exactly as uploaded. */
function AudioPlayer({ src, title }) {
	const ref = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [time, setTime] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const a = ref.current;
		return () => a?.pause();
	}, []);
	function toggle() {
		const a = ref.current;
		if (!a) return;
		if (a.paused) a.play();
		else a.pause();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `voice ${playing ? "is-playing" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "voice-btn",
				onClick: toggle,
				"aria-label": playing ? "Pause" : "Écouter",
				children: playing ? "❚❚" : "▶"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "voice-title",
					children: ["🎙️ ", title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "voice-bar",
					type: "range",
					min: 0,
					max: duration || 0,
					step: .1,
					value: time,
					"aria-label": "Position de lecture",
					onChange: (e) => {
						if (ref.current) ref.current.currentTime = Number(e.target.value);
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "voice-time",
				children: [
					fmt(time),
					" / ",
					fmt(duration)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "voice-wave",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref,
				src,
				preload: "metadata",
				onPlay: () => setPlaying(true),
				onPause: () => setPlaying(false),
				onEnded: () => setPlaying(false),
				onTimeUpdate: (e) => setTime(e.currentTarget.currentTime),
				onLoadedMetadata: (e) => setDuration(e.currentTarget.duration)
			})
		]
	});
}
/** Voice recordings attached to a planet; shows a gentle placeholder until one is uploaded. */
function VoiceNotes({ planet, placeholder }) {
	const { data } = useQuery(mediaQuery("audio"));
	const tracks = (data ?? []).filter((t) => t.planet === planet && t.src);
	if (!tracks.length) return placeholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "voice voice-empty",
		children: ["🎙️ ", placeholder]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-3",
		children: tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, {
			src: t.src ?? "",
			title: t.title || "Message vocal"
		}, t.id))
	});
}
//#endregion
//#region src/components/experiences/Film.tsx
var MUSIC_VOLUME = .55;
var FINALE_STEP_MS = 3200;
/** Cross-fades the film score when a scene asks for another track. */
function useScore(active, track, paused) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const prev = ref.current;
		if (prev && prev.dataset["src"] === track) return;
		const next = new Audio(track);
		next.dataset["src"] = track;
		next.loop = true;
		next.volume = 0;
		next.play().catch(() => void 0);
		ref.current = next;
		let v = 0;
		const id = window.setInterval(() => {
			v = Math.min(MUSIC_VOLUME, v + .05);
			next.volume = v;
			if (prev) prev.volume = Math.max(0, prev.volume - .06);
			if (v >= MUSIC_VOLUME && (!prev || prev.volume <= 0)) {
				prev?.pause();
				window.clearInterval(id);
			}
		}, 120);
		return () => window.clearInterval(id);
	}, [active, track]);
	(0, import_react.useEffect)(() => {
		const a = ref.current;
		if (!a || !active) return;
		if (paused) a.pause();
		else a.play().catch(() => void 0);
	}, [paused, active]);
	(0, import_react.useEffect)(() => {
		if (active) return;
		ref.current?.pause();
		ref.current = null;
	}, [active]);
	(0, import_react.useEffect)(() => () => ref.current?.pause(), []);
}
function SceneView({ scene, on, paused, onEnd }) {
	const vid = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const v = vid.current;
		if (!v) return;
		if (on && !paused) v.play().catch(() => void 0);
		else v.pause();
	}, [on, paused]);
	(0, import_react.useEffect)(() => {
		if (on && vid.current) vid.current.currentTime = 0;
	}, [on]);
	const left = (0, import_react.useRef)(scene.seconds * 1e3);
	(0, import_react.useEffect)(() => {
		if (!on) left.current = scene.seconds * 1e3;
	}, [on, scene.seconds]);
	(0, import_react.useEffect)(() => {
		if (scene.video || !on || paused) return;
		const started = Date.now();
		const t = window.setTimeout(onEnd, left.current);
		return () => {
			window.clearTimeout(t);
			left.current -= Date.now() - started;
		};
	}, [
		on,
		paused,
		scene.video,
		onEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: `film-scene ${on ? "is-on" : ""} ${paused ? "is-paused" : ""}`,
		"aria-hidden": !on,
		children: scene.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: vid,
			src: scene.video,
			poster: scene.img,
			playsInline: true,
			preload: "auto",
			onEnded: onEnd,
			onLoadedData: (e) => e.currentTarget.volume = .6
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: scene.img,
			alt: "",
			width: 1920,
			height: 1080,
			style: { animationDuration: `${scene.seconds + 2}s` }
		})
	});
}
/** Our animated first-meeting film, then the 6-years message. */
function FilmExperience({ onDone, doneLabel = "Retourner dans notre univers ✦" }) {
	const [phase, setPhase] = (0, import_react.useState)("poster");
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(0);
	const last = FILM_SCENES.length - 1;
	const scene = FILM_SCENES[Math.min(i, last)];
	const finaleSteps = 2 + FILM_FINALE.message.length;
	useScore(phase !== "poster", phase === "finale" ? FILM_MUSIC.final : FILM_MUSIC[scene?.music ?? "rencontre"], paused);
	(0, import_react.useEffect)(() => {
		duckAmbience(phase !== "poster");
		return () => duckAmbience(false);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "finale" || step >= finaleSteps) return;
		const t = window.setTimeout(() => setStep((s) => s + 1), step === 0 ? 900 : FINALE_STEP_MS);
		return () => window.clearTimeout(t);
	}, [
		phase,
		step,
		finaleSteps
	]);
	function next() {
		if (i < last) setI((n) => n + 1);
		else {
			setStep(0);
			setPhase("finale");
		}
	}
	function start() {
		setI(0);
		setStep(0);
		setPaused(false);
		setPhase("playing");
	}
	if (phase === "poster") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "film-poster rise-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "✦ NOTRE HISTOIRE · LE FILM"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "film-poster-frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: FILM_POSTER,
					alt: "Nous deux en dessin animé, assis au bord de la rivière",
					width: 784,
					height: 1040
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "serif-italic",
					children: FILM_POSTER_CAPTION
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "cosmic-btn cosmic-btn-primary",
				onClick: start,
				children: "▶ Revivre notre première rencontre"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Monte le son 🔊"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "film",
		"aria-label": "Mini-film : notre première rencontre",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "film-screen",
			children: [
				FILM_SCENES.map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneView, {
					scene: s,
					on: phase === "playing" && k === i,
					paused,
					onEnd: next
				}, s.img)),
				phase === "finale" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "film-scene is-on film-scene-hold",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: FILM_SCENES[last]?.img,
						alt: "",
						width: 1920,
						height: 1080
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "story-letterbox story-letterbox-top" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "story-letterbox story-letterbox-bottom" }),
				phase === "playing" && scene && (scene.kicker || scene.title || scene.text) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `film-caption ${scene.title ? "film-caption-date" : ""}`,
					children: [
						scene.kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hud-mono hud-mono-bright",
							children: scene.kicker
						}),
						scene.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "film-date",
							children: scene.title
						}),
						scene.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "story-text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
								text: scene.text,
								delay: scene.title ? 1400 : 700,
								step: 110
							})
						})
					]
				}, i),
				phase === "finale" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "film-finale",
					children: [
						step >= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "film-finale-date rise-in",
							children: FILM_FINALE.date
						}),
						step >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "film-finale-title rise-in",
							children: [FILM_FINALE.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
								id: "six",
								count: 22
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "film-finale-message",
							children: FILM_FINALE.message.slice(0, Math.max(0, step - 2)).map((line, k, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `film-finale-line ${k === arr.length - 1 ? "is-current" : ""}`,
								children: line
							}, line))
						})
					]
				}),
				phase === "playing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "story-progress",
					children: FILM_SCENES.map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `story-seg ${k < i ? "is-done" : ""} ${k === i ? "is-on" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
					}, s.img))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "story-controls",
			children: phase === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nav-chip hud-mono hud-mono-bright",
				onClick: () => setPaused((p) => !p),
				children: paused ? "▶ Lecture" : "❚❚ Pause"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nav-chip hud-mono hud-mono-bright",
				onClick: () => {
					setStep(0);
					setPhase("finale");
				},
				children: "Passer ⏭"
			})] }) : step >= finaleSteps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3 rise-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn cosmic-btn-primary",
					onClick: onDone,
					children: doneLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-chip hud-mono hud-mono-bright",
					onClick: start,
					children: "↺ Revoir le film"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nav-chip hud-mono hud-mono-bright",
				onClick: () => setStep(finaleSteps),
				children: "Tout afficher"
			})
		})]
	});
}
//#endregion
//#region src/assets/images/cosmic_chest_closed_1795041712158.jpg
var cosmic_chest_closed_1795041712158_default = "/assets/cosmic_chest_closed_1795041712158-0bu0uD6e.jpg";
//#endregion
//#region src/assets/images/cosmic_chest_ajar_1795041711299.jpg
var cosmic_chest_ajar_1795041711299_default = "/assets/cosmic_chest_ajar_1795041711299-BS5r6R2P.jpg";
//#endregion
//#region src/assets/story/crampons.jpg
var crampons_default = "/assets/crampons-BP3Zzkmx.jpg";
//#endregion
//#region src/components/experiences/FinalGiftSequence.tsx
var DIAL_R = 62;
var DIAL_C = 2 * Math.PI * DIAL_R;
var COUNTDOWN_WHISPERS = {
	5: "Parmi des milliards d’étoiles dans notre ciel…",
	4: "Chaque battement nous rapproche du dernier secret…",
	3: "Une promesse gardée rien que pour toi…",
	2: "Ferme les yeux un instant, mon Roi…",
	1: "Voici la dernière merveille de notre univers."
};
var GIFT_NOTES = {
	message: {
		label: "Le Message",
		title: "Pour chacun de tes élans",
		lines: ["Dans mon univers, il y a nos éclats de rire, nos nuits étoilées et cette fierté immense quand je te vois vivre ta passion.", "Ce cadeau final est une promesse : sur chaque pelouse, je serai toujours celle qui t’applaudit le plus fort."]
	},
	terrain: {
		label: "Sur le Terrain",
		title: "Ta paire de chaussures de football",
		lines: ["Pensées pour la vitesse, la précision et les grands soirs — elles n’attendent plus que tes premiers appuis sur le terrain.", "Chaque course, chaque passe et chaque but portera un peu de notre histoire."]
	},
	promesse: {
		label: "Notre Promesse",
		title: "Toujours dans ton camp",
		lines: ["Enfile-les, fais briller ton jeu et n’oublie jamais combien je t’admire et combien je t’aime.", "Envoie autant d’étoiles que tu veux — chacune est un vœu pour nos prochains chapitres."]
	}
};
function FinalGiftSequence({ onReplayJourney }) {
	const [stage, setStage] = (0, import_react.useState)("countdown");
	const [count, setCount] = (0, import_react.useState)(5);
	const [countdownFlash, setCountdownFlash] = (0, import_react.useState)(false);
	const [chestPhase, setChestPhase] = (0, import_react.useState)("sealed");
	const [chestBurstId, setChestBurstId] = (0, import_react.useState)(0);
	const [giftBurstId, setGiftBurstId] = (0, import_react.useState)(1);
	const [wishesCount, setWishesCount] = (0, import_react.useState)(0);
	const [activeTab, setActiveTab] = (0, import_react.useState)("message");
	const [tilt, setTilt] = (0, import_react.useState)({
		rx: 0,
		ry: 0
	});
	const timerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (stage !== "countdown") return;
		if (count <= 0) {
			setCountdownFlash(true);
			warp(.7, 900);
			const t = setTimeout(() => {
				setCountdownFlash(false);
				setChestPhase("sealed");
				setStage("chest");
			}, 900);
			return () => clearTimeout(t);
		}
		const t = setTimeout(() => {
			setCount((c) => c - 1);
		}, 1150);
		return () => clearTimeout(t);
	}, [stage, count]);
	function handleAdvanceChest() {
		if (chestPhase === "sealed") {
			setChestPhase("ajar");
			setChestBurstId((n) => n + 1);
			warp(.35, 650);
			return;
		}
		if (chestPhase === "ajar") {
			setChestPhase("opening");
			setChestBurstId((n) => n + 1);
			warp(.85, 1100);
			timerRef.current = setTimeout(() => {
				setGiftBurstId((n) => n + 1);
				setStage("gift");
			}, 1350);
		}
	}
	function handleBootsTilt(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / Math.max(1, rect.width) - .5;
		const y = (e.clientY - rect.top) / Math.max(1, rect.height) - .5;
		setTilt({
			rx: -y * 7,
			ry: x * 9
		});
	}
	function handleStarWish() {
		setGiftBurstId((n) => n + 1);
		setWishesCount((n) => n + 1);
		warp(.45, 700);
	}
	function handleReplayGift() {
		if (timerRef.current) clearTimeout(timerRef.current);
		setCount(5);
		setCountdownFlash(false);
		setChestPhase("sealed");
		setStage("countdown");
		warp(.3, 500);
	}
	const whisper = COUNTDOWN_WHISPERS[count] ?? COUNTDOWN_WHISPERS[1] ?? "";
	const activeNote = GIFT_NOTES[activeTab];
	if (stage === "countdown") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `finale-scene final-gift-fade ${countdownFlash ? "is-flashing" : ""}`,
		children: [
			countdownFlash && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "final-gift-flash",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "archive-note",
				children: "UNE DERNIÈRE SURPRISE T’ATTEND"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "final-countdown-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "final-countdown-halo",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "countdown-dial final-countdown-dial",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 148 148",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "final-orbit-dashed",
								cx: "74",
								cy: "74",
								r: 70
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "countdown-track",
								cx: "74",
								cy: "74",
								r: DIAL_R
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "countdown-progress",
								cx: "74",
								cy: "74",
								r: DIAL_R,
								strokeDasharray: DIAL_C,
								strokeDashoffset: DIAL_C * (Math.max(0, count) / 5)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "countdown countdown-pop final-countdown-num",
						children: count > 0 ? count : "✦"
					}, count)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "finale-line serif-italic is-current final-whisper",
				children: count > 0 ? whisper : "Révélation en cours…"
			}, count),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nav-chip hud-mono hud-mono-bright mt-2",
				onClick: () => {
					setCount(0);
				},
				children: "Ouvrir le coffre →"
			})
		]
	});
	if (stage === "chest") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "finale-scene final-gift-fade",
		children: [
			chestPhase === "opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "final-gift-flash is-intense",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: chestPhase === "sealed" ? "✦ ÉTAPE 1 / 2 · LE SCEAU ASTRAL" : chestPhase === "ajar" ? "✦ ÉTAPE 2 / 2 · LA LUMIÈRE INTÉRIEURE" : "✦ LE COFFRE S’OUVRE…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "exp-title my-1",
				children: chestPhase === "sealed" ? "Un coffre mystérieux t’attend" : chestPhase === "ajar" ? "Une lueur dorée s’échappe déjà…" : "Découvre ton cadeau final"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "serif-italic max-w-md text-[17px] text-mist",
				children: chestPhase === "sealed" ? "Touche le coffre pour briser le sceau céleste." : chestPhase === "ajar" ? "Quelque chose pensé pour chacun de tes pas sur le terrain repose à l’intérieur…" : "Laisse les étoiles dévoiler la suite…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "final-chest-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `final-chest-aura is-${chestPhase}`,
						"aria-hidden": true
					}),
					chestPhase !== "sealed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `final-chest-beam is-${chestPhase}`,
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
						id: chestBurstId,
						count: 28
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `final-chest-card is-${chestPhase}`,
						onClick: handleAdvanceChest,
						disabled: chestPhase === "opening",
						"aria-label": chestPhase === "sealed" ? "Briser le sceau du coffre mystérieux" : "Soulever le couvercle du coffre mystérieux",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cosmic_chest_closed_1795041712158_default,
								alt: "Coffre mystérieux scellé par des constellations dorées",
								className: `final-chest-img ${chestPhase === "sealed" ? "is-visible" : ""}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cosmic_chest_ajar_1795041711299_default,
								alt: "Coffre mystérieux entrouvert laissant échapper une lueur dorée",
								className: `final-chest-img ${chestPhase !== "sealed" ? "is-visible" : ""}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "final-chest-scrim",
								"aria-hidden": true
							}),
							chestPhase === "sealed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "final-chest-seal",
								"aria-hidden": true,
								children: "✦"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "cosmic-btn cosmic-btn-primary finale-next",
				onClick: handleAdvanceChest,
				disabled: chestPhase === "opening",
				children: chestPhase === "sealed" ? "Briser le sceau ✦" : chestPhase === "ajar" ? "Soulever le couvercle ✦" : "Ouverture en cours…"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "finale-scene final-gift-reveal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gift final-gift-showcase",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
					id: giftBurstId,
					count: 32
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "✦ CADEAU FINAL RÉVÉLÉ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "final-boots-stage",
					onMouseMove: handleBootsTilt,
					onMouseLeave: () => setTilt({
						rx: 0,
						ry: 0
					}),
					style: { transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "final-boots-rays",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "gift-img final-boots-img",
						src: crampons_default,
						alt: "Une paire de chaussures de football blanches et dorées posée sur un coussin étoilé",
						width: 900,
						height: 840
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "countdown my-1",
					children: COUNTDOWN_END_SYMBOL
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "finale-line serif-italic is-current",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
						text: SURPRISE_MESSAGE,
						step: 85
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hud-box final-gift-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "final-gift-tabs",
							role: "tablist",
							"aria-label": "Mots doux du cadeau",
							children: [
								"message",
								"terrain",
								"promesse"
							].map((tabKey) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": activeTab === tabKey,
								className: `nav-chip hud-mono ${activeTab === tabKey ? "hud-mono-bright is-selected" : ""}`,
								onClick: () => setActiveTab(tabKey),
								children: GIFT_NOTES[tabKey].label
							}, tabKey))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "final-gift-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "serif-italic text-[22px] text-blush",
								children: activeNote.title
							}), activeNote.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-mist",
								children: line
							}, line))]
						}, activeTab),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "final-gift-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cosmic-btn cosmic-btn-primary",
								onClick: handleStarWish,
								children: "✦ Envoyer une pluie d’étoiles"
							}), wishesCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hud-mono hud-mono-bright tabular-nums",
								children: [
									wishesCount,
									" ",
									wishesCount > 1 ? "étoiles envoyées" : "étoile envoyée"
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cosmic-btn cosmic-btn-ghost",
						onClick: handleReplayGift,
						children: "↺ Revoir la révélation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cosmic-btn cosmic-btn-ghost",
						onClick: onReplayJourney,
						children: "↺ Revivre le voyage"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/experiences/Finale.tsx
var MESSAGE_MS = 2600;
function Next({ onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "cosmic-btn cosmic-btn-primary finale-next",
		onClick,
		children
	});
}
function FinaleExperience() {
	const [stage, setStage] = (0, import_react.useState)("start");
	const [msg, setMsg] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (stage !== "journey") return;
		warp(1, 2600);
		const t = setTimeout(() => setStage("planets"), 3400);
		return () => clearTimeout(t);
	}, [stage]);
	(0, import_react.useEffect)(() => {
		if (stage !== "planets" || msg >= FINALE_MESSAGES.length) return;
		const t = setTimeout(() => setMsg((m) => m + 1), msg === 0 ? 2200 : MESSAGE_MS);
		return () => clearTimeout(t);
	}, [stage, msg]);
	const shownMessages = FINALE_MESSAGES.slice(0, msg);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `finale finale-${stage}`,
		"aria-live": "polite",
		children: [
			stage === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "finale-scene rise-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "✦ LE VOYAGE FINAL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "exp-title my-4",
						children: "Prêt pour le cœur de notre univers ?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-7 text-sm text-muted-foreground",
						children: "Monte le son 🔊 et laisse-toi guider."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, {
						onClick: () => setStage("journey"),
						children: "Commencer le voyage ✦"
					})
				]
			}),
			stage === "journey" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "finale-scene",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "journey-galaxy",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/galaxy-WpWQvhua.jpg",
						alt: "",
						width: 1024,
						height: 1024
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "finale-line serif-italic",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
						text: "Voyage au cœur de notre galaxie…",
						step: 120
					})
				})]
			}),
			stage === "planets" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "finale-scene",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "finale-planets",
						children: PLANETS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "finale-planet",
							style: { animationDelay: `${i * 450}ms` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
								planet: p,
								index: i,
								size: "clamp(38px, 8vw, 64px)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-mono",
								children: p.name
							})]
						}, p.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "finale-messages",
						children: shownMessages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `finale-line serif-italic ${i === shownMessages.length - 1 ? "is-current" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
								text: m,
								step: 90
							})
						}, m))
					}),
					msg >= FINALE_MESSAGES.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, {
						onClick: () => setStage("heart"),
						children: "Continuer ♥"
					})
				]
			}),
			stage === "heart" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "finale-scene",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "giant-heart",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "giant-heart-shape" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "giant-heart-photo",
								src: "/assets/couple-cosmos-DV8zdZvV.jpg",
								alt: "",
								width: 1024,
								height: 1280
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
								id: "heart",
								count: 24
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "finale-line serif-italic is-current",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
							text: "Toi + moi = mon univers entier.",
							delay: 600,
							step: 110
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, {
						onClick: () => setStage("letter"),
						children: "Lire ma lettre 💌"
					})
				]
			}),
			stage === "letter" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "finale-scene",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "love-letter hud-box",
					children: LOVE_LETTER.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "letter-line",
						style: { animationDelay: `${400 + i * 1100}ms` },
						children: line
					}, line))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, {
					onClick: () => setStage("film"),
					children: "Notre film 🎬"
				})]
			}),
			stage === "film" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "finale-scene",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmExperience, {
					onDone: () => setStage("gift_sequence"),
					doneLabel: "Découvrir le cadeau final ✦"
				})
			}),
			stage === "gift_sequence" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalGiftSequence, { onReplayJourney: () => {
				setStage("start");
				setMsg(0);
			} })
		]
	});
}
//#endregion
//#region src/components/experiences/PetitMonde.tsx
var TABS = [
	{
		id: "quiz",
		icon: "🧠",
		label: "Qui connaît le mieux l’autre ?"
	},
	{
		id: "defis",
		icon: "🎴",
		label: "Défis du duo"
	},
	{
		id: "penalty",
		icon: "⚽",
		label: "Séance de penalties"
	}
];
function Quiz() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const q = QUIZ[idx];
	const done = idx >= QUIZ.length;
	function pick(w) {
		if (!q || picked) return;
		setPicked(w);
		if (w === q.answer) setScore((s) => s + 1);
	}
	if (done) {
		const perfect = score >= QUIZ.length - 1;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "riddle-end rise-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "riddle-trophy",
					children: perfect ? "🏆" : score >= QUIZ.length / 2 ? "🥈" : "🎈"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "exp-title",
					children: [
						score,
						" / ",
						QUIZ.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "serif-italic text-blush text-xl",
					children: perfect ? "Tu me connais par cœur. Trophée du meilleur copain du monde !" : "On a encore plein de choses à découvrir l’un sur l’autre ❤️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn mt-5",
					onClick: () => {
						setIdx(0);
						setScore(0);
						setPicked(null);
					},
					children: "↺ Rejouer"
				})
			]
		});
	}
	if (!q) return null;
	const right = picked === q.answer;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hud-mono hud-mono-bright",
				children: [
					"QUESTION ",
					idx + 1,
					"/",
					QUIZ.length,
					" · SCORE ",
					score
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "quiz-icon",
				children: q.icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "riddle-q",
				children: q.question
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "who-row",
				children: Object.keys(WHO_LABEL).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `answer-btn who-btn ${picked && w === q.answer ? "is-right" : ""} ${picked === w && !right ? "is-wrong" : ""}`,
					onClick: () => pick(w),
					disabled: !!picked,
					children: [WHO_LABEL[w], picked === w && right && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, { id: idx + 1 })]
				}, w))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "riddle-feedback justify-center",
				"aria-live": "polite",
				children: picked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: right ? "text-rose" : "text-muted-foreground",
					children: right ? "✦ Exactement ce que j’aurais répondu !" : `Raté ! Ma réponse : ${WHO_LABEL[q.answer]}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn cosmic-btn-ghost",
					onClick: () => {
						setIdx(idx + 1);
						setPicked(null);
					},
					children: "Suivante →"
				})] })
			})
		]
	}, idx);
}
function Challenges() {
	const [flipped, setFlipped] = (0, import_react.useState)([]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-5 text-center text-sm text-muted-foreground",
		children: "Retourne une carte… et relève le défi avec moi."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flip-grid",
		children: CHALLENGES.map((c, i) => {
			const on = flipped.includes(i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `flip ${on ? "is-flipped" : ""}`,
				onClick: () => setFlipped((f) => on ? f.filter((x) => x !== i) : [...f, i]),
				"aria-label": on ? c.text : `Défi ${c.theme}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flip-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flip-face flip-front",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flip-icon",
							children: c.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hud-mono hud-mono-bright",
							children: c.theme
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flip-face flip-back",
						children: c.text
					})]
				})
			}, c.text);
		})
	})] });
}
var ZONES = [
	"Gauche",
	"Centre",
	"Droite"
];
function Penalty() {
	const [shots, setShots] = (0, import_react.useState)([]);
	const last = shots[shots.length - 1];
	const goals = shots.filter((s) => s.goal).length;
	const over = shots.length >= 5;
	const won = goals >= 3;
	function shoot(zone) {
		if (over) return;
		const keeper = Math.floor(Math.random() * 3);
		setShots((s) => [...s, {
			zone,
			keeper,
			goal: keeper !== zone
		}]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: [
					"Marque ",
					3,
					" buts sur ",
					5,
					" tirs pour gagner ta récompense. Choisis où tirer !"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pitch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "goal",
					children: [ZONES.map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "goal-zone",
						onClick: () => shoot(i),
						disabled: over,
						"aria-label": `Tirer à ${z.toLowerCase()}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hud-mono",
							children: z
						})
					}, z)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "keeper",
						style: { left: `${(last ? last.keeper : 1) * 33.33 + 16.66}%` },
						"aria-hidden": true,
						children: "🧤"
					}, `k${shots.length}`)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `ball ${last ? "is-shot" : ""}`,
					style: last ? { "--bx": `${(last.zone - 1) * 33}%` } : void 0,
					"aria-hidden": true,
					children: "⚽"
				}, `b${shots.length}`)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shot-dots",
				"aria-label": `${goals} buts`,
				children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `shot-dot ${shots[i] ? shots[i]?.goal ? "is-goal" : "is-miss" : ""}` }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "riddle-feedback justify-center",
				"aria-live": "polite",
				children: last && !over && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: last.goal ? "text-rose" : "text-muted-foreground",
					children: last.goal ? "BUUUT ! ⚽✨" : "Arrêté ! Encore…"
				})
			}),
			over && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in mt-2",
				children: [won ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reward",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
							id: "win",
							count: 22
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow",
							children: [
								"🏆 VICTOIRE · ",
								goals,
								"/",
								5
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic mt-2 text-2xl text-blush",
							children: "Bon pour : un câlin illimité ⚽❤️"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "serif-italic text-xl text-blush",
					children: [
						goals,
						" but",
						goals > 1 ? "s" : "",
						"… la revanche t’attend !"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn mt-4",
					onClick: () => setShots([]),
					children: "↺ Nouvelle séance"
				})]
			})
		]
	});
}
function PetitMondeExperience() {
	const [tab, setTab] = (0, import_react.useState)("quiz");
	const [cheat, setCheat] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "exp-stack",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tab-row",
			role: "tablist",
			children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "tab",
				"aria-selected": tab === t.id,
				className: `tab-card ${tab === t.id ? "is-on" : ""}`,
				onClick: () => setTab(t.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tab-icon",
					children: t.icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tab-label",
					children: t.label
				})]
			}, t.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hud-box exp-card relative",
			children: [
				tab === "quiz" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
				tab === "defis" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Challenges, {}),
				tab === "penalty" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Penalty, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hidden-egg",
					onClick: () => setCheat(true),
					"aria-label": "Surprise cachée",
					children: "🎮"
				}),
				cheat && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "egg-toast rise-in",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, { id: "egg" }),
						"Code triche activé : +100 bisous 💋",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ml-3 underline",
							onClick: () => setCheat(false),
							children: "OK"
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/experiences/Rencontre.tsx
var SCENE_MS = 6500;
/** Cinematic slideshow of our first meeting, drawn from our real photos. */
function StoryCinema() {
	const [i, setI] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const last = STORY_SCENES.length - 1;
	const scene = STORY_SCENES[i];
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		const t = setTimeout(() => {
			if (i < last) setI(i + 1);
			else setPlaying(false);
		}, SCENE_MS);
		return () => clearTimeout(t);
	}, [
		i,
		playing,
		last
	]);
	function go(n) {
		setI(Math.max(0, Math.min(last, n)));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "story",
		"aria-label": "Notre histoire en images",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "story-screen",
			children: [
				STORY_SCENES.map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: `story-scene ${k === i ? "is-on" : ""}`,
					"aria-hidden": k !== i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.img,
						alt: s.caption,
						width: 1280,
						height: 960,
						loading: k < 2 ? "eager" : "lazy"
					})
				}, s.img)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "story-letterbox story-letterbox-top" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "story-letterbox story-letterbox-bottom" }),
				scene && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "story-caption",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hud-mono hud-mono-bright",
							children: scene.chapter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "story-title",
							children: scene.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "story-text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
								text: scene.caption,
								delay: 500,
								step: 110
							})
						})
					]
				}, i),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "story-progress",
					children: STORY_SCENES.map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `${s.chapter} : ${s.title}`,
						className: `story-seg ${k < i ? "is-done" : ""} ${k === i ? "is-on" : ""} ${k === i && playing ? "is-playing" : ""}`,
						style: { animationDuration: `${SCENE_MS}ms` },
						onClick: () => go(k),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
					}, s.img))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "story-controls",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-chip hud-mono hud-mono-bright",
					onClick: () => go(i - 1),
					disabled: i === 0,
					children: "← Avant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-chip hud-mono hud-mono-bright",
					onClick: () => {
						if (!playing && i === last) setI(0);
						setPlaying((p) => !p);
					},
					children: playing ? "❚❚ Pause" : i === last ? "↺ Revoir" : "▶ Lecture"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-chip hud-mono hud-mono-bright",
					onClick: () => go(i + 1),
					disabled: i === last,
					children: "Après →"
				})
			]
		})]
	});
}
/** Five riddles about our first meeting, with a celebration on each right answer. */
function Riddles() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [found, setFound] = (0, import_react.useState)(null);
	const [wrong, setWrong] = (0, import_react.useState)([]);
	const [score, setScore] = (0, import_react.useState)(0);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const done = idx >= RIDDLES.length;
	const riddle = RIDDLES[idx];
	function pick(o) {
		if (!riddle || found !== null) return;
		if (o === riddle.answer) {
			setFound(o);
			if (!wrong.length) setScore((s) => s + 1);
			setBurst((b) => b + 1);
		} else setWrong((w) => [...w, o]);
	}
	function next() {
		setIdx((n) => n + 1);
		setFound(null);
		setWrong([]);
	}
	function restart() {
		setIdx(0);
		setFound(null);
		setWrong([]);
		setScore(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hud-box exp-card",
		"aria-label": "Énigmes de notre rencontre",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "exp-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "✦ 5 ÉNIGMES DE NOTRE RENCONTRE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hud-mono hud-mono-bright",
				children: done ? "TERMINÉ" : `${idx + 1} / ${RIDDLES.length}`
			})]
		}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "riddle-end rise-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "riddle-trophy",
					children: "🏆"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "exp-title",
					children: [
						score,
						" / ",
						RIDDLES.length,
						" du premier coup"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "serif-italic text-blush text-xl",
					children: score === RIDDLES.length ? "Tu te souviens de tout… comme moi." : "Chaque détail de notre histoire compte."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "cosmic-btn mt-5",
					onClick: restart,
					children: "↺ Rejouer"
				})
			]
		}) : riddle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rise-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "riddle-q",
					children: riddle.question
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "answer-grid",
					children: riddle.options.map((opt, o) => {
						const state = found === o ? "is-right" : wrong.includes(o) ? "is-wrong" : "";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `answer-btn ${state}`,
							onClick: () => pick(o),
							disabled: found !== null || wrong.includes(o),
							children: [opt, found === o && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, { id: burst })]
						}, opt);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "riddle-feedback",
					"aria-live": "polite",
					children: found !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-rose",
						children: ["✦ Bonne réponse ! ", riddle.success]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cosmic-btn cosmic-btn-ghost",
						onClick: next,
						children: idx === RIDDLES.length - 1 ? "Voir mon score" : "Énigme suivante →"
					})] }) : wrong.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Presque… essaie encore, mon Roi."
					}) : null
				})
			]
		}, idx)]
	});
}
function RencontreExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "exp-stack",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCinema, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Riddles, {})]
	});
}
//#endregion
//#region src/components/experiences/Souvenirs.tsx
var SIZES = [
	"memory-lg",
	"memory-md",
	"memory-sm",
	"memory-md",
	"memory-lg",
	"memory-sm"
];
var TILTS = [
	-4,
	3,
	-2,
	5,
	-3,
	2,
	-5
];
var SHIFTS = [
	0,
	40,
	-20,
	60,
	10,
	-30,
	30
];
var STAR_SPOTS = [
	{
		top: "6%",
		left: "48%"
	},
	{
		top: "34%",
		left: "4%"
	},
	{
		top: "58%",
		left: "94%"
	},
	{
		top: "86%",
		left: "40%"
	},
	{
		top: "20%",
		left: "88%"
	},
	{
		top: "72%",
		left: "12%"
	}
];
function MemoryCard({ item, index, onOpen }) {
	const { ref, seen } = useInView();
	const style = {
		"--tilt": `${TILTS[index % TILTS.length]}deg`,
		"--shift": `${SHIFTS[index % SHIFTS.length]}px`,
		"--float-delay": `${index % 5 * -1.3}s`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `memory ${SIZES[index % SIZES.length]} ${seen ? "is-seen" : ""}`,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "memory-frame",
			onClick: onOpen,
			"aria-label": `Agrandir : ${item.caption || item.title}`,
			children: [
				item.src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.caption || item.title,
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "memory-sheen" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "memory-sparkle" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "memory-sparkle" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "memory-sparkle" })
			]
		}), seen && item.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "memory-caption serif-italic",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
				text: `« ${item.caption} »`,
				delay: 350
			})
		})]
	});
}
function Overlay({ onClose, children }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overlay",
		role: "dialog",
		"aria-modal": "true",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overlay-inner",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "overlay-close",
				onClick: onClose,
				"aria-label": "Fermer",
				children: "✕"
			}), children]
		})
	});
}
function SouvenirsExperience() {
	const photos = useQuery(mediaQuery("photo"));
	const secrets = useQuery(mediaQuery("secret"));
	const [open, setOpen] = (0, import_react.useState)(null);
	const [secret, setSecret] = (0, import_react.useState)(null);
	const [found, setFound] = (0, import_react.useState)([]);
	const list = (photos.data ?? []).filter((p) => p.src);
	const stars = (secrets.data ?? []).slice(0, STAR_SPOTS.length);
	const current = open === null ? null : list[open];
	function step(d) {
		if (open === null || !list.length) return;
		setOpen((open + d + list.length) % list.length);
	}
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "exp-stack",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exp-head justify-center gap-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "TOUCHE UN SOUVENIR POUR L’AGRANDIR"
				}), stars.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hud-mono hud-mono-bright",
					children: [
						"✦ ÉTOILES SECRÈTES ",
						found.length,
						"/",
						stars.length
					]
				})]
			}),
			photos.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "memory-loading",
				children: "Les souvenirs arrivent des étoiles…"
			}),
			photos.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "archive-note",
				children: "Les souvenirs n’ont pas pu se charger. Réessaie dans un instant."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "memory-field",
				children: [list.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryCard, {
					item,
					index: i,
					onOpen: () => setOpen(i)
				}, item.id)), stars.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `secret-star ${found.includes(s.id) ? "is-found" : ""}`,
					style: STAR_SPOTS[i],
					"aria-label": "Étoile secrète",
					onClick: () => {
						setSecret(s);
						setFound((f) => f.includes(s.id) ? f : [...f, s.id]);
					},
					children: "✦"
				}, s.id))]
			}),
			current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
				onClose: () => setOpen(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "lightbox",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.src ?? "",
						alt: current.caption || current.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "lightbox-caption serif-italic",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
							text: `« ${current.caption} »`,
							delay: 300,
							step: 90
						})
					})]
				}, current.id), list.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lightbox-nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono hud-mono-bright",
							onClick: () => step(-1),
							children: "← Précédent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hud-mono",
							children: [
								(open ?? 0) + 1,
								" / ",
								list.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-chip hud-mono hud-mono-bright",
							onClick: () => step(1),
							children: "Suivant →"
						})
					]
				})]
			}),
			secret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
				onClose: () => setSecret(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hud-box secret-card rise-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {
							id: secret.id,
							count: 20
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "✦ SOUVENIR SECRET"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "exp-title my-3",
							children: secret.title
						}),
						secret.src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "secret-img",
							src: secret.src,
							alt: secret.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic text-blush text-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
								text: secret.caption,
								delay: 250
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/routes/univers.$planet.tsx?tsr-split=component
/** Each planet is its own interactive experience. */
var EXPERIENCES = {
	"notre-rencontre": RencontreExperience,
	"nos-souvenirs": SouvenirsExperience,
	"notre-petit-monde": PetitMondeExperience,
	"notre-avenir": AvenirExperience,
	"mon-univers": FinaleExperience
};
function PlanetDetail() {
	const { planet } = Route.useLoaderData();
	if (!useUnlocked()) return null;
	const index = getPlanetIndex(planet.slug);
	const prev = PLANETS[(index - 1 + PLANETS.length) % PLANETS.length];
	const next = PLANETS[(index + 1) % PLANETS.length];
	const num = String(index + 1).padStart(2, "0");
	const Experience = EXPERIENCES[planet.slug];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `screen-in relative min-h-screen px-4 pb-20 pt-16 sm:px-8 planet-${index + 1}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudFrame, {
			topLeft: `ARCHIVE ${num}/05 · ${planet.code}`,
			topRight: "TRANSMISSION DÉCHIFFRÉE",
			bottomLeft: "SIGNAL STABLE · 100%",
			bottomRight: "ORIGINE · SYSTÈME DOUDOU"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "planet-head rise-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "planet-head-orb",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "archive-orb-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "archive-orb-float",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
								planet,
								index,
								size: "clamp(64px, 12vw, 104px)"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow",
							children: ["ARCHIVES DE NOTRE GALAXIE · ", num]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "my-2 text-[clamp(36px,6vw,58px)] leading-none",
							children: planet.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif-italic text-[clamp(18px,2.4vw,22px)] text-blush",
							children: planet.intro
						})
					] })]
				}),
				Experience && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				planet.slug !== "mon-univers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 max-w-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceNotes, { planet: planet.slug })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-12 flex flex-col items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full max-w-xl flex-wrap items-center justify-between gap-3",
						children: [prev && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/univers/$planet",
							params: { planet: prev.slug },
							className: "nav-chip hud-mono hud-mono-bright",
							onClick: () => warp(.3, 450),
							children: ["← ", prev.name]
						}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/univers/$planet",
							params: { planet: next.slug },
							className: "nav-chip hud-mono hud-mono-bright",
							onClick: () => warp(.3, 450),
							children: [next.name, " →"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/univers",
						className: "cosmic-btn cosmic-btn-ghost",
						onClick: () => warp(.3, 450),
						children: "◎ Retour au système solaire"
					})]
				})
			]
		})]
	}, planet.slug);
}
//#endregion
export { PlanetDetail as component };
