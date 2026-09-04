-- Run this once in Supabase SQL Editor to mark the current sealed products as sold out.
update public.cards
set stock = 0
where category = 'sealed';
