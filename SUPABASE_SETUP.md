# Configuración de Supabase y Vercel

1. Creá un proyecto en Supabase.
2. En **SQL Editor**, ejecutá primero `supabase/schema.sql` y después `supabase/seed.sql`.
3. En **Authentication > Users**, creá manualmente el usuario administrador con email y contraseña.
4. En SQL Editor, asignale el rol. Si el usuario fue creado antes de ejecutar `schema.sql`, primero creá su perfil:

   ```sql
   insert into public.profiles (id, email, role, active)
   select id, email, 'admin', true from auth.users
   where email = 'tu-email@dominio.com'
   on conflict (id) do nothing;

   update public.profiles set role = 'admin', active = true where email = 'tu-email@dominio.com';
   ```

5. El script crea el bucket público `card-images` y sus políticas. Confirmá que exista en **Storage**.
6. Localmente, copiá `.env.example` a `.env.local` y completá `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
7. En Vercel, agregá esas mismas variables en **Project > Settings > Environment Variables** para Production, Preview y Development. No agregues `SUPABASE_SERVICE_ROLE_KEY`.
8. Hacé deploy. La función `/api/public-config` entrega solo URL y anon key, que son credenciales públicas diseñadas para el cliente; las políticas RLS protegen los datos.
9. Probá `admin.html`: iniciá sesión con el usuario creado, creá una carta con imagen y verificá `singles.html`.

## Notas de migración

`seed.sql` incorpora las 13 cartas existentes. Mantiene temporalmente sus URLs de imágenes del repositorio para no perder contenido. Al editar una carta y reemplazar su imagen desde el administrador, la nueva imagen se guarda en Supabase Storage y su URL pasa a la tabla `cards`.

## Seguridad

- Los visitantes solo pueden leer cartas `active = true`.
- Solo perfiles activos con `role = 'admin'` pueden crear, editar, desactivar o subir imágenes.
- La validación se hace con RLS en Supabase, no solo en el navegador.
- No hay registro público de administradores ni credenciales hardcodeadas.
