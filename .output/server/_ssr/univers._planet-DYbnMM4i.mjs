import { r as resolveLovableAsset } from "./media-BrORvvzT.mjs";
import { a as getPlanet } from "./universe-BxcUkM-o.mjs";
import { Gt as notFound, _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/univers._planet-DYbnMM4i.js
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
var $$splitComponentImporter = () => import("./univers._planet-BKMo_gvc.mjs");
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
export { initAmbience as a, getServerAmbience as i, duckAmbience as n, subscribeAmbience as o, getAmbience as r, toggleAmbience as s, Route as t };
