-- Sabores da Andréia / Neon PostgreSQL
-- Execute this file once in the Neon SQL Editor (or with `psql $DATABASE_URL -f ...`).
-- The application uses America/Sao_Paulo as the business timezone.

create extension if not exists pgcrypto;

create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint admin_users_email_lowercase check (email = lower(email))
);

create table if not exists menu_items (
  id text primary key,
  name text not null,
  price_cents integer not null check (price_cents >= 0),
  category text not null check (category in ('daily_dish', 'a_la_carte', 'drink')),
  description text,
  image_key text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists side_dishes (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- A single row per business date selects the dish featured on the home page.
create table if not exists daily_menus (
  service_date date primary key,
  daily_dish_id text references menu_items(id) on delete restrict,
  updated_by uuid references admin_users(id) on delete set null,
  updated_at timestamptz not null default now()
);

-- Availability is deliberately stored per date. This lets an administrator
-- turn an item off as it runs out without changing its catalogue definition.
create table if not exists daily_side_dishes (
  service_date date not null,
  side_dish_id uuid not null references side_dishes(id) on delete cascade,
  is_available boolean not null default true,
  updated_by uuid references admin_users(id) on delete set null,
  updated_at timestamptz not null default now(),
  primary key (service_date, side_dish_id)
);

create index if not exists menu_items_category_active_idx
  on menu_items (category, is_active);
create index if not exists daily_side_dishes_date_available_idx
  on daily_side_dishes (service_date, is_available);

-- Keep timestamps correct for catalogue and account edits.
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists admin_users_set_updated_at on admin_users;
create trigger admin_users_set_updated_at before update on admin_users
for each row execute function set_updated_at();

drop trigger if exists menu_items_set_updated_at on menu_items;
create trigger menu_items_set_updated_at before update on menu_items
for each row execute function set_updated_at();

drop trigger if exists side_dishes_set_updated_at on side_dishes;
create trigger side_dishes_set_updated_at before update on side_dishes
for each row execute function set_updated_at();
