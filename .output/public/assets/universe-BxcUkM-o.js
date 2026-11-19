//#region src/lib/universe.ts
var SECRET_CODE = "DOUDOU";
var WRONG_CODE_MESSAGE = "Ce code ne semble pas être le bon. Essaie encore, mon Roi.";
var UNLOCK_KEY = "doudou-universe-unlocked";
function isSecretCode(input) {
	return input.trim().toUpperCase() === SECRET_CODE;
}
function markUnlocked() {
	try {
		window.sessionStorage.setItem(UNLOCK_KEY, "1");
	} catch {}
}
function readUnlocked() {
	try {
		return window.sessionStorage.getItem(UNLOCK_KEY) === "1";
	} catch {
		return false;
	}
}
var PLANETS = [
	{
		slug: "notre-rencontre",
		code: "MONDE-01 · ORIGINE",
		look: {
			orbit: .96,
			period: 64,
			size: 30
		},
		name: "Notre rencontre",
		intro: "Tout a commencé par un simple regard.",
		body: "Une cour d’université, un stylo noir, un regard… et le début de nous. En août 2021, nos chemins ont commencé à écrire une seule histoire."
	},
	{
		slug: "nos-souvenirs",
		code: "MONDE-02 · MÉMOIRE",
		look: {
			orbit: .79,
			period: 50,
			size: 26,
			moon: true
		},
		name: "Nos souvenirs",
		intro: "Chaque instant avec toi devient précieux.",
		body: "Nos sourires, nos retrouvailles après les cours et ces petits instants qui deviennent de grands souvenirs."
	},
	{
		slug: "notre-petit-monde",
		code: "MONDE-03 · COMPLICITÉ",
		look: {
			orbit: .62,
			period: 39,
			size: 24
		},
		name: "Notre petit monde",
		intro: "Notre bonheur, à notre façon.",
		body: "Un petit monde à nous, fait de complicité, de rires et de détails que nous seuls pouvons comprendre."
	},
	{
		slug: "notre-avenir",
		code: "MONDE-04 · HORIZON",
		look: {
			orbit: .46,
			period: 29,
			size: 28,
			ring: true
		},
		name: "Notre avenir",
		intro: "Tant de rêves à vivre ensemble.",
		body: "Des projets, des voyages, des rêves… et encore tant de pages à écrire ensemble."
	},
	{
		slug: "mon-univers",
		code: "MONDE-05 · CŒUR",
		look: {
			orbit: .31,
			period: 20,
			size: 20
		},
		name: "Mon univers",
		intro: "Parmi des milliards d’étoiles, je te choisis, toi.",
		body: "Parmi des milliards d’étoiles, c’est toi que je choisis. Aujourd’hui, demain et dans tous les univers possibles."
	}
];
var COUNTDOWN_END_SYMBOL = "👟";
var SURPRISE_MESSAGE = "Une surprise t’attend, mon Roi. ❤️";
function getPlanet(slug) {
	return PLANETS.find((p) => p.slug === slug);
}
function getPlanetIndex(slug) {
	return PLANETS.findIndex((p) => p.slug === slug);
}
//#endregion
export { getPlanet as a, markUnlocked as c, WRONG_CODE_MESSAGE as i, readUnlocked as l, PLANETS as n, getPlanetIndex as o, SURPRISE_MESSAGE as r, isSecretCode as s, COUNTDOWN_END_SYMBOL as t };
