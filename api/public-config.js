export default function handler(request, response) {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return response.status(500).json({ error: 'Supabase no está configurado.' });
  response.setHeader('Cache-Control', 'public, max-age=300');
  return response.status(200).json({ url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY });
}
