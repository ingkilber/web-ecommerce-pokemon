-- Run once in Supabase SQL Editor.
-- Adds the missing Pokémon type used by the Singles filter.
alter table public.cards
  add column if not exists card_type text not null default 'Sin especificar';


alter table public.cards drop constraint if exists cards_card_type_check;
update public.cards set card_type = 'Sin especificar' where card_type = 'Dragón';
alter table public.cards add constraint cards_card_type_check
  check (card_type in ('Agua', 'Fuego', 'Planta', 'Rayo', 'Psíquico', 'Oscuridad', 'Incoloro', 'Lucha', 'Metal', 'Entrenador', 'Sin especificar'));

update public.cards
set card_type = case name
  when 'Centiskorch' then 'Fuego'
  when 'Seaking' then 'Agua'
  when 'Wailmer' then 'Agua'
  when 'Relicanth' then 'Agua'
  when 'Popplio' then 'Agua'
  when 'Brionne' then 'Agua'
  when 'Tropius' then 'Planta'
  when 'Grubbin' then 'Planta'
  when 'Fomantis' then 'Planta'
  when 'Poltchageist' then 'Planta'
  when 'Sinistcha' then 'Planta'
  when 'Heatran' then 'Fuego'
  when 'Sizzlipede' then 'Fuego'
  else card_type
end
where category = 'single';

create index if not exists cards_active_type_idx
  on public.cards(active, card_type);
