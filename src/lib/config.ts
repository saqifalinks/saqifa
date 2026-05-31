// ============================================================
// فایل تنظیمات سقیفه
// اینجا میتونی آیکون‌ها، پلتفرم‌ها و هر چیزی رو شخصی‌سازی کنی
// ============================================================

// ---- آیکون دسته‌ها ----
// کلید = slug دسته، مقدار = اسم آیکون (فقط بخش آخر، بدون ph: و -bold)
// مثلاً اگه خواستی آیکون scholars عوض بشه، اسم آیکون رو از اینجا ببین:
// https://icones.js.org/collection/ph
export const CATEGORY_ICONS: Record<string, string> = {
  scholars: 'mosque',
  library: 'book-bookmark',
  Inviter: 'microphone',   // مراکز دینی
  Cultural: 'pencil',      // فرهنگی
  Religious: 'building',   // مدارس دینی
  Political: 'building',
  Regions: 'map-pin',
  Balochi: 'translate',
  Arabic: 'translate',
  Kurdish: 'translate',
  Turkish: 'translate',
  Pashto: 'translate',
  Turkmen: 'translate',
};

// ---- پلتفرم‌های شبکه‌های اجتماعی ----
// کلید = اسم فارسی پلتفرم (همون مقداری که تو دیتابیس ذخیره میشه)
// icon = آیکون کامل Iconify (مثلاً simple-icons:telegram)
// color = رنگ به صورت هگز (مثلاً #29B6F6)
// name_en = اسم انگلیسی (برای تشخیص خودکار)
export const PLATFORMS: Record<string, { icon: string; color: string; name_en: string }> = {
  تلگرام:    { icon: 'simple-icons:telegram',   color: '#29B6F6', name_en: 'telegram' },
  اینستاگرام: { icon: 'simple-icons:instagram',  color: '#E1306C', name_en: 'instagram' },
  اکس:       { icon: 'simple-icons:x',           color: '#222222', name_en: 'x' },
  یوتیوب:    { icon: 'simple-icons:youtube',     color: '#FF0000', name_en: 'youtube' },
  'فیس بوک': { icon: 'simple-icons:facebook',    color: '#1877F2', name_en: 'facebook' },
  وبسایت:    { icon: 'ph:globe-bold',            color: '#4CAF50', name_en: 'website' },
  سایت:      { icon: 'ph:globe-bold',            color: '#4CAF50', name_en: 'site' },
  آپارات:    { icon: 'simple-icons:aparat',      color: '#E7194B', name_en: 'aparat' },
  تیک‌تاک:   { icon: 'simple-icons:tiktok',      color: '#010101', name_en: 'tiktok' },
  واتساپ:    { icon: 'simple-icons:whatsapp',    color: '#25D366', name_en: 'whatsapp' },
  ساندکلود:  { icon: 'simple-icons:soundcloud',  color: '#FF5500', name_en: 'soundcloud' },
  کاست‌باکس: { icon: 'simple-icons:castbox',     color: '#F55B23', name_en: 'castbox' },
  تردز:     { icon: 'simple-icons:threads',      color: '#000000', name_en: 'threads' },
  بلواسکای:  { icon: 'simple-icons:bluesky',     color: '#0285FF', name_en: 'bluesky' },
  توییتر:   { icon: 'simple-icons:twitter',      color: '#1DA1F2', name_en: 'twitter' },
  پینترست:  { icon: 'simple-icons:pinterest',    color: '#E60023', name_en: 'pinterest' },
  ایمیل:    { icon: 'ph:envelope-bold',          color: '#EA4335', name_en: 'email' },
  تماس:     { icon: 'ph:phone-bold',             color: '#10B981', name_en: 'phone' },
  وبلاگ:    { icon: 'ph:article-bold',           color: '#FF8F00', name_en: 'blog' },
};

// ---- پلتفرم‌های فرم «افزودن لینک» ----
// برای مودال پیشنهاد لینک جدید استفاده میشه
export const SUGGEST_PLATFORMS: { id: string; icon: string; label: string; color: string }[] = [
  { id: 'telegram',   icon: 'simple-icons:telegram',   label: 'تلگرام',    color: '#29B6F6' },
  { id: 'instagram',  icon: 'simple-icons:instagram',  label: 'اینستاگرام', color: '#E1306C' },
  { id: 'x',          icon: 'simple-icons:x',           label: 'ایکس',      color: '#222222' },
  { id: 'youtube',    icon: 'simple-icons:youtube',     label: 'یوتیوب',    color: '#FF0000' },
  { id: 'website',    icon: 'ph:globe-bold',            label: 'وبسایت',    color: '#4CAF50' },
  { id: 'aparat',     icon: 'simple-icons:aparat',      label: 'آپارات',    color: '#E7194B' },
  { id: 'tiktok',     icon: 'simple-icons:tiktok',      label: 'تیک‌تاک',   color: '#010101' },
  { id: 'whatsapp',   icon: 'simple-icons:whatsapp',    label: 'واتساپ',    color: '#25D366' },
  { id: 'facebook',   icon: 'simple-icons:facebook',    label: 'فیسبوک',    color: '#1877F2' },
  { id: 'soundcloud', icon: 'simple-icons:soundcloud',  label: 'ساندکلاد',  color: '#FF5500' },
  { id: 'castbox',    icon: 'simple-icons:castbox',     label: 'کاست‌باکس', color: '#F55B23' },
  { id: 'threads',    icon: 'simple-icons:threads',     label: 'تردز',      color: '#000000' },
  { id: 'bluesky',    icon: 'simple-icons:bluesky',     label: 'بلواسکای',  color: '#0285FF' },
  { id: 'email',      icon: 'ph:envelope-bold',         label: 'ایمیل',     color: '#EA4335' },
  { id: 'phone',      icon: 'ph:phone-bold',            label: 'تماس',      color: '#10B981' },
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
export const LOCAL_ICONS = new Set(['scholars', 'library', 'Inviter', 'Cultural', 'Religious', 'Political', 'Regions', 'Languages']);

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
