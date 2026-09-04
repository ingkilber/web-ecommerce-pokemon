-- Run after schema.sql. Images remain on the current Vercel site until you upload replacements through the admin.
insert into public.cards (name, card_number, collection, category, rarity, language, condition, price, stock, active, featured, image_url) values
('Centiskorch','010/084','PBL A','single','Fase 1','Español','Casi perfecta',8500,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.16 PM.jpeg'),
('Seaking','014/084','PBL A','single','Fase 1','Español','Casi perfecta',6200,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.16 PM (1).jpeg'),
('Wailmer','015/084','PBL A','single','Básico','Español','Casi perfecta',4800,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.16 PM (2).jpeg'),
('Relicanth','017/084','PBL A','single','Básico','Español','Casi perfecta',7200,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.27 PM.jpeg'),
('Popplio','018/084','PBL A','single','Básico','Español','Casi perfecta',4500,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.27 PM (1).jpeg'),
('Brionne','019/084','PBL A','single','Fase 1','Español','Casi perfecta',6800,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.28 PM.jpeg'),
('Tropius','001/084','PBL A','single','Básico','Español','Casi perfecta',5300,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.20.10 PM.jpeg'),
('Grubbin','002/084','PBL A','single','Básico','Español','Casi perfecta',3900,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.20.11 PM.jpeg'),
('Fomantis','003/084','PBL A','single','Básico','Español','Casi perfecta',4100,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.20.11 PM (1).jpeg'),
('Poltchageist','005/084','PBL A','single','Básico','Español','Casi perfecta',5600,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.20.11 PM (2).jpeg'),
('Sinistcha','006/084','PBL A','single','Fase 1','Español','Casi perfecta',7500,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.40.27 PM.jpeg'),
('Heatran','007/084','PBL A','single','Básico','Español','Casi perfecta',8900,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.15 PM.jpeg'),
('Sizzlipede','009/084','PBL A','single','Básico','Español','Casi perfecta',4300,1,true,false,'readme-images/singles/WhatsApp Image 2026-09-03 at 10.55.15 PM (1).jpeg'),
('Sobre Llamas Obsidianas · Charizard',null,'Llamas Obsidianas','sealed','Booster sellado · 10 cartas','Español','Nuevo',8500,1,true,true,'readme-images/cartas-selladas/carta1.png'),
('Sobre Llamas Obsidianas · Dragonite',null,'Llamas Obsidianas','sealed','Booster sellado · 10 cartas','Español','Nuevo',8500,1,true,true,'readme-images/cartas-selladas/carta2.png'),
('Sobre Llamas Obsidianas · Revavroom',null,'Llamas Obsidianas','sealed','Booster sellado · 10 cartas','Español','Nuevo',8200,1,true,true,'readme-images/cartas-selladas/carta3.png'),
('Sobre Llamas Obsidianas · Tyranitar',null,'Llamas Obsidianas','sealed','Booster sellado · 10 cartas','Español','Nuevo',8700,1,true,true,'readme-images/cartas-selladas/carta4.png');
