create extension if not exists "pgcrypto";

-- پلتفرم‌های مرجع (آیکون و رنگ)
create table if not exists platforms (
  id text primary key,
  icon text not null,
  color text not null,
  name_en text not null default '',
  display_order int not null default 0
);

insert into platforms (id, icon, color, name_en, display_order) values
  ('تلگرام', 'simple-icons:telegram', '#29B6F6', 'telegram', 1),
  ('اینستاگرام', 'simple-icons:instagram', '#E1306C', 'instagram', 2),
  ('اکس', 'simple-icons:x', '#222222', 'x', 3),
  ('یوتیوب', 'simple-icons:youtube', '#FF0000', 'youtube', 4),
  ('فیس بوک', 'simple-icons:facebook', '#1877F2', 'facebook', 5),
  ('وبسایت', 'ph:globe-bold', '#4CAF50', 'website', 6),
  ('سایت', 'ph:globe-bold', '#4CAF50', 'site', 7),
  ('آپارات', 'simple-icons:aparat', '#E7194B', 'aparat', 8),
  ('لینکدین', 'simple-icons:linkedin', '#0A66C2', 'linkedin', 9),
  ('تیک‌تاک', 'simple-icons:tiktok', '#010101', 'tiktok', 10),
  ('واتساپ', 'simple-icons:whatsapp', '#25D366', 'whatsapp', 11),
  ('ساندکلود', 'simple-icons:soundcloud', '#FF5500', 'soundcloud', 12),
  ('اسپاتیفای', 'simple-icons:spotify', '#1DB954', 'spotify', 13),
  ('تردز', 'simple-icons:threads', '#000000', 'threads', 14),
  ('دیسکورد', 'simple-icons:discord', '#5865F2', 'discord', 15),
  ('توییتر', 'simple-icons:twitter', '#1DA1F2', 'twitter', 16),
  ('پینترست', 'simple-icons:pinterest', '#E60023', 'pinterest', 17),
  ('ایمیل', 'ph:envelope-bold', '#EA4335', 'email', 18),
  ('وبلاگ', 'ph:article-bold', '#FF8F00', 'blog', 19)
on conflict (id) do nothing;

-- دسته‌ها (icon_name: از FontAwesome استفاده میکنه، کد خودش تبدیل میکنه)
create table if not exists categories (
  id serial primary key,
  name text not null,
  slug text not null unique,
  icon_name text default 'fa-solid fa-folder',
  display_order int not null default 0,
  created_at timestamptz default now()
);

-- اشخاص / مراکز
create table if not exists entities (
  id serial primary key,
  category_id int not null references categories(id) on delete cascade,
  name text not null,
  title text default '',
  description text default '',
  avatar_url text default '',
  verification_type text default null,
  display_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- لینک‌ها (platform = کلید از جدول platforms)
create table if not exists links (
  id serial primary key,
  entity_id int not null references entities(id) on delete cascade,
  platform text not null,
  url text not null,
  display_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- محتوای روزانه (اسلاید)
create table if not exists daily_content (
  day_id serial primary key,
  book_json jsonb default null,
  video_json jsonb default null,
  audio_json jsonb default null,
  article_json jsonb default null,
  created_at timestamptz default now()
);

-- پیشنهاد لینک
create table if not exists link_suggestions (
  id serial primary key,
  sender_name text default '',
  target_name text not null,
  target_url text not null,
  notes text default '',
  status text not null default 'new',
  created_at timestamptz default now()
);

-- فیلترها (مثلاً منطقه، زبان، ...)
create table if not exists filters (
  id serial primary key,
  name text not null,
  slug text not null unique,
  display_order int not null default 0
);

-- مقادیر هر فیلتر (مثلاً شمال، جنوب، مرکز برای فیلتر منطقه)
create table if not exists filter_options (
  id serial primary key,
  filter_id int not null references filters(id) on delete cascade,
  value text not null,
  display_order int not null default 0
);

-- اتصال فیلتر به دسته‌ها (کدوم دسته کدوم فیلتر رو داشته باشه)
create table if not exists category_filters (
  category_id int not null references categories(id) on delete cascade,
  filter_id int not null references filters(id) on delete cascade,
  is_active boolean default true,
  primary key (category_id, filter_id)
);

-- مقدار فیلتر برای هر entity
create table if not exists entity_filter_values (
  entity_id int not null references entities(id) on delete cascade,
  filter_option_id int not null references filter_options(id) on delete cascade,
  primary key (entity_id, filter_option_id)
);

-- RLS
alter table platforms enable row level security;
alter table categories enable row level security;
alter table entities enable row level security;
alter table links enable row level security;
alter table daily_content enable row level security;
alter table link_suggestions enable row level security;
alter table filters enable row level security;
alter table filter_options enable row level security;
alter table category_filters enable row level security;
alter table entity_filter_values enable row level security;

drop policy if exists "public read platforms" on platforms;
create policy "public read platforms" on platforms for select using (true);

drop policy if exists "public read categories" on categories;
create policy "public read categories" on categories for select using (true);

drop policy if exists "public read entities" on entities;
create policy "public read entities" on entities for select using (true);

drop policy if exists "public read links" on links;
create policy "public read links" on links for select using (true);

drop policy if exists "public read daily content" on daily_content;
create policy "public read daily content" on daily_content for select using (true);

drop policy if exists "public insert suggestions" on link_suggestions;
create policy "public insert suggestions" on link_suggestions for insert with check (true);

drop policy if exists "public read filters" on filters;
create policy "public read filters" on filters for select using (true);

drop policy if exists "public read filter_options" on filter_options;
create policy "public read filter_options" on filter_options for select using (true);

drop policy if exists "public read category_filters" on category_filters;
create policy "public read category_filters" on category_filters for select using (true);

drop policy if exists "public read entity_filter_values" on entity_filter_values;
create policy "public read entity_filter_values" on entity_filter_values for select using (true);
