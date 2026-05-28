import { c as createComponent } from './astro-component_1LsuzNAk.mjs';
import 'piccolore';
import { l as createRenderInstruction, t as renderHead, k as addAttribute, u as renderSlot, v as renderTemplate } from './entrypoint_Dini-5of.mjs';
import 'clsx';
import { createClient } from '@supabase/supabase-js';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "سَقِیفَه", wide = false } = Astro2.props;
  return renderTemplate`<html lang="fa" dir="rtl"> <head>${renderScript($$result, "/Users/isa/saqifah/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;800;900&display=swap" rel="stylesheet">${renderScript($$result, "/Users/isa/saqifah/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")}${renderHead()}</head> <body> <main${addAttribute(["page-shell", wide && "page-shell--wide"], "class:list")}> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/isa/saqifah/src/layouts/Layout.astro", void 0);

const supabaseUrl = "https://yoraqyajzsbioghuabgz.supabase.co";
const supabaseAnonKey = "sb_publishable_CMTTMMTKg0Xxz0eHGocONQ_bQfqasZK";
const isSupabaseConfigured = Boolean(supabaseAnonKey);
function fetchWithTimeout(input, init) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 2e3);
  const merged = { ...init, signal: ctrl.signal };
  return fetch(input, merged).finally(() => clearTimeout(timer));
}
const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey, { fetch: fetchWithTimeout }) : null;

const CATEGORY_ICONS = {
  scholars: "mosque",
  library: "book-bookmark",
  inviter: "microphone",
  cultural: "pencil",
  religious: "building",
  m1: "folder",
  m2: "folder",
  m3: "folder",
  m4: "folder",
  m5: "folder",
  m6: "folder",
  m7: "folder",
  m8: "folder",
  m9: "folder",
  m10: "folder"
};
const PLATFORMS = {
  تلگرام: { icon: "simple-icons:telegram", color: "#29B6F6", name_en: "telegram" },
  اینستاگرام: { icon: "simple-icons:instagram", color: "#E1306C", name_en: "instagram" },
  اکس: { icon: "simple-icons:x", color: "#222222", name_en: "x" },
  یوتیوب: { icon: "simple-icons:youtube", color: "#FF0000", name_en: "youtube" },
  "فیس بوک": { icon: "simple-icons:facebook", color: "#1877F2", name_en: "facebook" },
  وبسایت: { icon: "ph:globe-bold", color: "#4CAF50", name_en: "website" },
  سایت: { icon: "ph:globe-bold", color: "#4CAF50", name_en: "site" },
  آپارات: { icon: "simple-icons:aparat", color: "#E7194B", name_en: "aparat" },
  لینکدین: { icon: "simple-icons:linkedin", color: "#0A66C2", name_en: "linkedin" },
  تیک‌تاک: { icon: "simple-icons:tiktok", color: "#010101", name_en: "tiktok" },
  واتساپ: { icon: "simple-icons:whatsapp", color: "#25D366", name_en: "whatsapp" },
  ساندکلود: { icon: "simple-icons:soundcloud", color: "#FF5500", name_en: "soundcloud" },
  اسپاتیفای: { icon: "simple-icons:spotify", color: "#1DB954", name_en: "spotify" },
  تردز: { icon: "simple-icons:threads", color: "#000000", name_en: "threads" },
  دیسکورد: { icon: "simple-icons:discord", color: "#5865F2", name_en: "discord" },
  توییتر: { icon: "simple-icons:twitter", color: "#1DA1F2", name_en: "twitter" },
  پینترست: { icon: "simple-icons:pinterest", color: "#E60023", name_en: "pinterest" },
  ایمیل: { icon: "ph:envelope-bold", color: "#EA4335", name_en: "email" },
  وبلاگ: { icon: "ph:article-bold", color: "#FF8F00", name_en: "blog" }
};
const SUGGEST_PLATFORMS = [
  { id: "telegram", icon: "simple-icons:telegram", label: "تلگرام", color: "#29B6F6" },
  { id: "instagram", icon: "simple-icons:instagram", label: "اینستاگرام", color: "#E1306C" },
  { id: "x", icon: "simple-icons:x", label: "ایکس", color: "#222222" },
  { id: "youtube", icon: "simple-icons:youtube", label: "یوتیوب", color: "#FF0000" },
  { id: "website", icon: "ph:globe-bold", label: "وبسایت", color: "#4CAF50" },
  { id: "aparat", icon: "simple-icons:aparat", label: "آپارات", color: "#E7194B" },
  { id: "linkedin", icon: "simple-icons:linkedin", label: "لینکدین", color: "#0A66C2" },
  { id: "tiktok", icon: "simple-icons:tiktok", label: "تیک‌تاک", color: "#010101" },
  { id: "whatsapp", icon: "simple-icons:whatsapp", label: "واتساپ", color: "#25D366" },
  { id: "facebook", icon: "simple-icons:facebook", label: "فیسبوک", color: "#1877F2" },
  { id: "soundcloud", icon: "simple-icons:soundcloud", label: "ساندکلاد", color: "#FF5500" },
  { id: "spotify", icon: "simple-icons:spotify", label: "اسپاتیفای", color: "#1DB954" },
  { id: "threads", icon: "simple-icons:threads", label: "تردز", color: "#000000" },
  { id: "discord", icon: "simple-icons:discord", label: "دیسکورد", color: "#5865F2" }
];
const LOCAL_ICONS = /* @__PURE__ */ new Set(["scholars"]);
function getCategoryIcon(slug) {
  if (LOCAL_ICONS.has(slug)) return `/icons/${slug}.svg`;
  const icon = CATEGORY_ICONS[slug];
  if (icon) return `ph:${icon}-bold`;
  return "ph:folder-bold";
}
function isLocalIcon(slug) {
  return LOCAL_ICONS.has(slug);
}
function getPlatformInfo(platform) {
  const def = PLATFORMS[platform];
  if (def) return { icon: def.icon, color: def.color, label: platform };
  const key = platform?.toLowerCase() ?? "";
  for (const [, v] of Object.entries(PLATFORMS)) {
    if (key.includes(v.name_en) || v.name_en.includes(key)) {
      return { icon: v.icon, color: v.color, label: platform };
    }
  }
  return { icon: "ph:link-bold", color: "#888888", label: platform || "لینک" };
}

export { $$Layout as $, PLATFORMS as P, SUGGEST_PLATFORMS as S, getPlatformInfo as a, isSupabaseConfigured as b, getCategoryIcon as g, isLocalIcon as i, supabase as s };
