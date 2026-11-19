import { queryOptions } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";

export const MEDIA_BUCKET = "souvenirs";
export type MediaKind = "photo" | "secret" | "audio";

const LOVABLE_ASSET_ORIGIN = "https://id-preview--36884c16-b95b-4a5c-b9db-8d8fd071a318.lovable.app";

export function resolveLovableAsset(url: string): string;
export function resolveLovableAsset(url: string | null): string | null;
export function resolveLovableAsset(url: string | null): string | null {
  if (!url) return url;
  return url.startsWith("/__l5e/assets-v1/") ? `${LOVABLE_ASSET_ORIGIN}${url}` : url;
}

export type MediaItem = {
  id: string;
  kind: string;
  title: string;
  caption: string;
  url: string | null;
  storage_path: string | null;
  planet: string | null;
  sort_order: number;
  /** Ready-to-use address of the file (bundled asset or signed upload link). */
  src: string | null;
};

async function fetchMedia(kind: MediaKind): Promise<MediaItem[]> {
  const { data, error } = await supabase
    .from("media_items")
    .select("*")
    .eq("kind", kind)
    .order("sort_order")
    .order("created_at");
  if (error) throw error;
  const paths = data.flatMap((d) => (d.storage_path ? [d.storage_path] : []));
  const signed: Record<string, string> = {};
  if (paths.length) {
    const { data: links } = await supabase.storage
      .from(MEDIA_BUCKET)
      .createSignedUrls(paths, 60 * 60 * 24);
    for (const l of links ?? []) if (l.path && l.signedUrl) signed[l.path] = l.signedUrl;
  }
  return data.map((d) => ({
    ...d,
    src: d.storage_path ? (signed[d.storage_path] ?? null) : resolveLovableAsset(d.url),
  }));
}

export const mediaQuery = (kind: MediaKind) =>
  queryOptions({ queryKey: ["media", kind], queryFn: () => fetchMedia(kind), staleTime: 60_000 });
