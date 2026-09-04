-- Execute this file in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  role text not null default 'customer' check (role in ('admin', 'customer')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.cards (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  description text not null default '',
  price numeric(12,2) not null check (price >= 0),
  stock integer not null default 0 check (stock >= 0),
  category text not null default 'single',
  collection text not null default '',
  rarity text not null default '',
  image_url text,
  active boolean not null default true,
  featured boolean not null default false,
  card_number text,
  language text not null default 'Español',
  condition text not null default 'Casi perfecta',
  pokemon_name text,
  card_type text not null default 'Sin especificar',
  set_name text,
  slug text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cards_active_category_idx on public.cards(active, category);
create index if not exists cards_featured_idx on public.cards(featured) where active;

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists cards_updated_at on public.cards;
create trigger cards_updated_at before update on public.cards for each row execute function public.set_updated_at();

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin insert into public.profiles (id, email) values (new.id, coalesce(new.email, '')); return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin' and active = true);
$$;
grant execute on function public.is_admin() to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.cards enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.cards to anon;
grant select, insert, update, delete on public.cards to authenticated;
grant select on public.profiles to authenticated;

create policy "profiles own or admin read" on public.profiles for select to authenticated using (id = auth.uid() or public.is_admin());
create policy "profiles admin update" on public.profiles for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "cards public active read" on public.cards for select to anon, authenticated using (active = true or public.is_admin());
create policy "cards admin insert" on public.cards for insert to authenticated with check (public.is_admin());
create policy "cards admin update" on public.cards for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "cards admin delete" on public.cards for delete to authenticated using (public.is_admin());

insert into storage.buckets (id, name, public) values ('card-images', 'card-images', true) on conflict (id) do update set public = true;
create policy "card images public read" on storage.objects for select to anon, authenticated using (bucket_id = 'card-images');
create policy "card images admin insert" on storage.objects for insert to authenticated with check (bucket_id = 'card-images' and public.is_admin());
create policy "card images admin update" on storage.objects for update to authenticated using (bucket_id = 'card-images' and public.is_admin()) with check (bucket_id = 'card-images' and public.is_admin());
create policy "card images admin delete" on storage.objects for delete to authenticated using (bucket_id = 'card-images' and public.is_admin());
