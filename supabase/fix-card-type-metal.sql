-- Ejecutar una vez en el SQL Editor de Supabase en proyectos ya desplegados.
-- Alinea el CHECK de la tabla con las opciones disponibles en el administrador.
alter table public.cards drop constraint if exists cards_card_type_check;
alter table public.cards add constraint cards_card_type_check
  check (card_type in ('Agua', 'Fuego', 'Planta', 'Rayo', 'Psíquico', 'Oscuridad', 'Dragón', 'Incoloro', 'Lucha', 'Metal', 'Sin especificar'));
