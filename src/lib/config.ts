import { PLATFORM_SVG } from './svg-paths';

// ============================================================
// فایل تنظیمات سقیفه
// اینجا میتونی آیکون‌ها، پلتفرم‌ها و هر چیزی رو شخصی‌سازی کنی
// ============================================================

// ---- آیکون دسته‌ها ----
// کلید = slug دسته، مقدار = اسم آیکون (فقط بخش آخر، بدون ph: و -bold)
// مثلاً اگه خواستی آیکون scholars عوض بشه، اسم آیکون رو از اینجا ببین:
// https://icones.js.org/collection/ph
export const CATEGORY_ICONS: Record<string, string> = {
  scholars: 'book',
  library: 'book-open',
  Inviter: 'users',
  Cultural: 'palette',
  Religious: 'cross',
  Political: 'buildings',
  Regions: 'map-trifold',
};

// ---- پلتفرم‌های شبکه‌های اجتماعی ----
// کلید = اسم فارسی پلتفرم (همون مقداری که تو دیتابیس ذخیره میشه)
// icon = آیکون کامل Iconify (مثلاً simple-icons:telegram)
// color = رنگ به صورت هگز (مثلاً #29B6F6)
// name_en = اسم انگلیسی (برای تشخیص خودکار)
export const PLATFORMS: Record<string, { icon: string; color: string; name_en: string }> = {
  تلگرام:    { icon: '/icons/platforms/telegram.svg',   color: '#29B6F6', name_en: 'telegram' },
  اینستاگرام: { icon: '/icons/platforms/instagram.svg',  color: '#E1306C', name_en: 'instagram' },
  اکس:       { icon: '/icons/platforms/x.svg',           color: '#222222', name_en: 'x' },
  یوتیوب:    { icon: '/icons/platforms/youtube.svg',     color: '#FF0000', name_en: 'youtube' },
  'فیس بوک': { icon: '/icons/platforms/facebook.svg',    color: '#1877F2', name_en: 'facebook' },
  وبسایت:    { icon: '/icons/platforms/globe.svg',      color: '#4CAF50', name_en: 'website' },
  سایت:      { icon: '/icons/platforms/globe.svg',      color: '#4CAF50', name_en: 'site' },
  آپارات:    { icon: '/icons/platforms/aparat.svg',      color: '#E7194B', name_en: 'aparat' },
  تیک‌تاک:   { icon: '/icons/platforms/tiktok.svg',      color: '#010101', name_en: 'tiktok' },
  واتساپ:    { icon: '/icons/platforms/whatsapp.svg',    color: '#25D366', name_en: 'whatsapp' },
  ساندکلود:  { icon: '/icons/platforms/soundcloud.svg',  color: '#FF5500', name_en: 'soundcloud' },
  کاست‌باکس: { icon: '/icons/platforms/castbox.svg',     color: '#F55B23', name_en: 'castbox' },
  تردز:     { icon: '/icons/platforms/threads.svg',      color: '#000000', name_en: 'threads' },
  بلواسکای:  { icon: '/icons/platforms/bluesky.svg',     color: '#0285FF', name_en: 'bluesky' },
  توییتر:   { icon: '/icons/platforms/twitter.svg',      color: '#1DA1F2', name_en: 'twitter' },
  پینترست:  { icon: '/icons/platforms/pinterest.svg',    color: '#E60023', name_en: 'pinterest' },
  ایمیل:    { icon: '/icons/platforms/envelope.svg',     color: '#EA4335', name_en: 'email' },
  تماس:     { icon: '/icons/platforms/phone.svg',        color: '#10B981', name_en: 'phone' },
  وبلاگ:    { icon: '/icons/platforms/article.svg',      color: '#FF8F00', name_en: 'blog' },
};

// ---- پلتفرم‌های فرم «افزودن لینک» ----
// برای مودال پیشنهاد لینک جدید استفاده میشه
export const SUGGEST_PLATFORMS: { id: string; icon: string; label: string; color: string }[] = [
  { id: 'telegram',   icon: '/icons/platforms/telegram.svg',   label: 'تلگرام',    color: '#29B6F6' },
  { id: 'instagram',  icon: '/icons/platforms/instagram.svg',  label: 'اینستاگرام', color: '#E1306C' },
  { id: 'x',          icon: '/icons/platforms/x.svg',           label: 'ایکس',      color: '#222222' },
  { id: 'youtube',    icon: '/icons/platforms/youtube.svg',     label: 'یوتیوب',    color: '#FF0000' },
  { id: 'website',    icon: '/icons/platforms/globe.svg',      label: 'وبسایت',    color: '#4CAF50' },
  { id: 'aparat',     icon: '/icons/platforms/aparat.svg',      label: 'آپارات',    color: '#E7194B' },
  { id: 'tiktok',     icon: '/icons/platforms/tiktok.svg',      label: 'تیک‌تاک',   color: '#010101' },
  { id: 'whatsapp',   icon: '/icons/platforms/whatsapp.svg',    label: 'واتساپ',    color: '#25D366' },
  { id: 'facebook',   icon: '/icons/platforms/facebook.svg',    label: 'فیسبوک',    color: '#1877F2' },
  { id: 'soundcloud', icon: '/icons/platforms/soundcloud.svg',  label: 'ساندکلاد',  color: '#FF5500' },
  { id: 'castbox',    icon: '/icons/platforms/castbox.svg',     label: 'کاست‌باکس', color: '#F55B23' },
  { id: 'threads',    icon: '/icons/platforms/threads.svg',     label: 'تردز',      color: '#000000' },
  { id: 'bluesky',    icon: '/icons/platforms/bluesky.svg',     label: 'بلواسکای',  color: '#0285FF' },
  { id: 'email',      icon: '/icons/platforms/envelope.svg',    label: 'ایمیل',     color: '#EA4335' },
  { id: 'phone',      icon: '/icons/platforms/phone.svg',       label: 'تماس',      color: '#10B981' },
];

// ---- شبکه‌های اجتماعی منوی چپ دسکتاپ ----
// لینک‌هایی که تو منوی سمت چپ دسکتاپ نمایش داده میشن
export const SOCIAL_LINKS: { url: string; icon: string; label: string }[] = [
  { url: '#', icon: 'simple-icons:telegram',   label: 'تلگرام' },
  { url: '#', icon: 'simple-icons:instagram',  label: 'اینستاگرام' },
  { url: '#', icon: 'simple-icons:x',          label: 'ایکس' },
  { url: '#', icon: 'simple-icons:youtube',    label: 'یوتیوب' },
];

export const SAQIFAH_SITE = "https://saqifah.com";

// ---- آیکون‌های محلی (public/icons/) ----
export const LOCAL_ICONS = new Set(['scholars', 'library', 'Inviter', 'Cultural', 'Religious', 'Religious-Activists', 'Political', 'Regions', 'Languages']);

// ---- تابع کمکی: گرفتن آیکون دسته از روی slug ----
export function getCategoryIcon(slug: string): string {
  if (LOCAL_ICONS.has(slug)) return `/icons/${slug}.svg`;
  const icon = CATEGORY_ICONS[slug];
  if (icon) return `ph:${icon}-bold`;
  return 'ph:folder-bold';
}

export function isLocalIcon(slug: string): boolean {
  return LOCAL_ICONS.has(slug);
}

// ---- تابع کمکی: گرفتن اطلاعات پلتفرم از روی اسم فارسی ----
export function getPlatformInfo(platform: string): { icon: string; color: string; label: string } {
  const def = PLATFORMS[platform];
  if (def) return { icon: def.icon, color: def.color, label: platform };
  // تشخیص هوشمند: اگه اسم پلتفرم با اسم انگلیسی تطبیق داشت
  const key = platform?.toLowerCase() ?? '';
  for (const [, v] of Object.entries(PLATFORMS)) {
    if (key.includes(v.name_en) || v.name_en.includes(key)) {
      return { icon: v.icon, color: v.color, label: platform };
    }
  }
  return { icon: 'ph:link-bold', color: '#888888', label: platform || 'لینک' };
}

// ---- تابع کمکی: گرفتن SVG پلتفرم (داده درون‌خطی، بدون نیاز به HTTP) ----
export function getPlatformSvg(platform: string): SvgInfo {
  const def = PLATFORMS[platform];
  if (def && PLATFORM_SVG[def.name_en]) return PLATFORM_SVG[def.name_en];
  const key = platform?.toLowerCase() ?? '';
  for (const [, v] of Object.entries(PLATFORMS)) {
    if ((key.includes(v.name_en) || v.name_en.includes(key)) && PLATFORM_SVG[v.name_en]) return PLATFORM_SVG[v.name_en];
  }
  return PLATFORM_SVG['link'];
}

export function normalizeUrl(url: string, platform?: string): string {
  if (!url) return url;
  const u = url.trim();
  if (platform === 'ایمیل') return u.startsWith('mailto:') ? u : `mailto:${u}`;
  if (platform === 'تماس') return u.startsWith('tel:') ? u : `tel:${u}`;
  if (!u.startsWith('http://') && !u.startsWith('https://')) return `https://${u}`;
  return u;
}
