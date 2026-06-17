import type { APIRoute } from "astro";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

type Category = { slug: string; updated_at?: string };

export const GET: APIRoute = async ({ url }) => {
  const origin = url.origin;
  const pages: { loc: string; lastmod?: string; priority?: string }[] = [
    { loc: `${origin}/`, priority: "1.0" },
    { loc: `${origin}/regions`, priority: "0.9" },
  ];

  if (isSupabaseConfigured && supabase) {
    const { data: categories } = await supabase
      .from("categories")
      .select("slug, updated_at")
      .order("display_order", { ascending: true });

    if (categories) {
      for (const cat of categories as Category[]) {
        pages.push({
          loc: `${origin}/${cat.slug}`,
          lastmod: cat.updated_at,
          priority: "0.8",
        });
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>${p.lastmod ? `\n    <lastmod>${new Date(p.lastmod).toISOString()}</lastmod>` : ""}${p.priority ? `\n    <priority>${p.priority}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
