import { t as supabase } from "./client-DnYJWX7F.mjs";
import { t as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-BrORvvzT.js
var MEDIA_BUCKET = "souvenirs";
var LOVABLE_ASSET_ORIGIN = "https://id-preview--36884c16-b95b-4a5c-b9db-8d8fd071a318.lovable.app";
function resolveLovableAsset(url) {
	if (!url) return url;
	return url.startsWith("/__l5e/assets-v1/") ? `${LOVABLE_ASSET_ORIGIN}${url}` : url;
}
async function fetchMedia(kind) {
	const { data, error } = await supabase.from("media_items").select("*").eq("kind", kind).order("sort_order").order("created_at");
	if (error) throw error;
	const paths = data.flatMap((d) => d.storage_path ? [d.storage_path] : []);
	const signed = {};
	if (paths.length) {
		const { data: links } = await supabase.storage.from(MEDIA_BUCKET).createSignedUrls(paths, 86400);
		for (const l of links ?? []) if (l.path && l.signedUrl) signed[l.path] = l.signedUrl;
	}
	return data.map((d) => ({
		...d,
		src: d.storage_path ? signed[d.storage_path] ?? null : resolveLovableAsset(d.url)
	}));
}
var mediaQuery = (kind) => queryOptions({
	queryKey: ["media", kind],
	queryFn: () => fetchMedia(kind),
	staleTime: 6e4
});
//#endregion
export { mediaQuery as n, resolveLovableAsset as r, MEDIA_BUCKET as t };
