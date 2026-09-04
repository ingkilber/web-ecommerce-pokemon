import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

let client;

export async function supabase() {
  if (client) return client;
  const response = await fetch('/api/public-config');
  if (!response.ok) throw new Error('No fue posible obtener la configuración de Supabase.');
  const { url, anonKey } = await response.json();
  if (!url || !anonKey) throw new Error('Faltan variables de Supabase en Vercel.');
  client = createClient(url, anonKey);
  return client;
}
