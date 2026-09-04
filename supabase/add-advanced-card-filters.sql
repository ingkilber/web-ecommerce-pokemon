-- Run after add-card-type.sql in Supabase SQL Editor.
-- Product attributes adapted from TCG marketplace filters for a single-store catalog.
alter table public.cards
  add column if not exists is_signed boolean not null default false,
  add column if not exists is_reverse_holo boolean not null default false,
  add column if not exists is_altered boolean not null default false,
  add column if not exists is_stamped boolean not null default false,
  add column if not exists is_freshly_pulled boolean not null default false,
  add column if not exists has_photos boolean not null default false,
  add column if not exists accepts_offers boolean not null default false,
  add column if not exists has_discount boolean not null default false,
  add column if not exists grading_company text,
  add column if not exists grading_grade numeric(4,1);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'cards_grading_grade_range') then
    alter table public.cards add constraint cards_grading_grade_range
      check (grading_grade is null or (grading_grade >= 0 and grading_grade <= 10));
  end if;
end $$;

create index if not exists cards_active_condition_idx on public.cards(active, condition);
create index if not exists cards_active_language_idx on public.cards(active, language);
create index if not exists cards_active_rarity_idx on public.cards(active, rarity);
create index if not exists cards_active_collection_idx on public.cards(active, collection);
create index if not exists cards_active_graded_idx on public.cards(active, grading_company) where grading_company is not null;

comment on column public.cards.is_signed is 'Carta firmada';
comment on column public.cards.is_reverse_holo is 'Carta reverse holo';
comment on column public.cards.is_altered is 'Carta alterada';
comment on column public.cards.is_stamped is 'Carta con sello o estampado';
comment on column public.cards.is_freshly_pulled is 'Carta recién obtenida de sobre';
comment on column public.cards.has_photos is 'Publicación con fotografías adicionales';
comment on column public.cards.accepts_offers is 'Acepta ofertas';
comment on column public.cards.has_discount is 'Tiene descuento';
