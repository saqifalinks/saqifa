create extension if not exists "pgcrypto";

create table if not exists categories (
  id text primary key,
  name text not null,
  description text default '',
  icon text default '📁',
  display_order int default 0
);

create table if not exists entities (
  id uuid primary key default gen_random_uuid(),
  category_id text not null references categories(id) on delete cascade,
  name text not null,
  bio text default '',
  display_order int default 0,
  is_active boolean default true
);

create table if not exists entity_links (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references entities(id) on delete cascade,
  platform text not null,
  label text not null,
  icon text default '🔗',
  url text not null,
  display_order int default 0,
  is_active boolean default true
);

create table if not exists daily_slides (
  id uuid primary key default gen_random_uuid(),
  slide_type text not null check (slide_type in ('book', 'video', 'audio', 'article')),
  title text not null,
  description text default '',
  image_url text not null,
  cta_text text not null default 'مشاهده',
  url text not null,
  display_order int default 0,
  is_active boolean default true
);

create table if not exists daily_links (
  id uuid primary key default gen_random_uuid(),
  column_side text not null check (column_side in ('right', 'left')),
  platform text not null,
  title text not null,
  description text default '',
  icon text default '🔗',
  url text not null,
  display_order int default 0,
  is_active boolean default true
);

create table if not exists link_suggestions (
  id uuid primary key default gen_random_uuid(),
  sender_name text default '',
  target_name text not null,
  target_url text not null,
  notes text default '',
  status text not null default 'new',
  created_at timestamptz default now()
);

alter table categories enable row level security;
alter table entities enable row level security;
alter table entity_links enable row level security;
alter table daily_slides enable row level security;
alter table daily_links enable row level security;
alter table link_suggestions enable row level security;

drop policy if exists "public read categories" on categories;
create policy "public read categories" on categories for select using (true);

drop policy if exists "public read entities" on entities;
create policy "public read entities" on entities for select using (true);

drop policy if exists "public read entity links" on entity_links;
create policy "public read entity links" on entity_links for select using (true);

drop policy if exists "public read daily slides" on daily_slides;
create policy "public read daily slides" on daily_slides for select using (true);

drop policy if exists "public read daily links" on daily_links;
create policy "public read daily links" on daily_links for select using (true);

drop policy if exists "public insert suggestions" on link_suggestions;
create policy "public insert suggestions" on link_suggestions for insert with check (true);
