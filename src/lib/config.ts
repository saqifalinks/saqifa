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
  inviter: 'microphone',
  cultural: 'pencil',
  religious: 'building',
  m1: 'folder',
  m2: 'folder',
  m3: 'folder',
  m4: 'folder',
  m5: 'folder',
  m6: 'folder',
  m7: 'folder',
  m8: 'folder',
  m9: 'folder',
  m10: 'folder',
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
  لینکدین:   { icon: 'simple-icons:linkedin',    color: '#0A66C2', name_en: 'linkedin' },
  تیک‌تاک:   { icon: 'simple-icons:tiktok',      color: '#010101', name_en: 'tiktok' },
  واتساپ:    { icon: 'simple-icons:whatsapp',    color: '#25D366', name_en: 'whatsapp' },
  ساندکلود:  { icon: 'simple-icons:soundcloud',  color: '#FF5500', name_en: 'soundcloud' },
  اسپاتیفای: { icon: 'simple-icons:spotify',     color: '#1DB954', name_en: 'spotify' },
  تردز:     { icon: 'simple-icons:threads',      color: '#000000', name_en: 'threads' },
  دیسکورد:  { icon: 'simple-icons:discord',      color: '#5865F2', name_en: 'discord' },
  توییتر:   { icon: 'simple-icons:twitter',      color: '#1DA1F2', name_en: 'twitter' },
  پینترست:  { icon: 'simple-icons:pinterest',    color: '#E60023', name_en: 'pinterest' },
  ایمیل:    { icon: 'ph:envelope-bold',          color: '#EA4335', name_en: 'email' },
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
  { id: 'linkedin',   icon: 'simple-icons:linkedin',    label: 'لینکدین',   color: '#0A66C2' },
  { id: 'tiktok',     icon: 'simple-icons:tiktok',      label: 'تیک‌تاک',   color: '#010101' },
  { id: 'whatsapp',   icon: 'simple-icons:whatsapp',    label: 'واتساپ',    color: '#25D366' },
  { id: 'facebook',   icon: 'simple-icons:facebook',    label: 'فیسبوک',    color: '#1877F2' },
  { id: 'soundcloud', icon: 'simple-icons:soundcloud',  label: 'ساندکلاد',  color: '#FF5500' },
  { id: 'spotify',    icon: 'simple-icons:spotify',     label: 'اسپاتیفای', color: '#1DB954' },
  { id: 'threads',    icon: 'simple-icons:threads',     label: 'تردز',      color: '#000000' },
  { id: 'discord',    icon: 'simple-icons:discord',     label: 'دیسکورد',   color: '#5865F2' },
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
export const LOCAL_ICONS = new Set(['scholars']);

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
