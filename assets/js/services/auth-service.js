import { supabase } from '../supabase-client.js';
export async function login(email, password) { const { data, error } = await (await supabase()).auth.signInWithPassword({ email, password }); if (error) throw error; return data; }
export async function logout() { const { error } = await (await supabase()).auth.signOut(); if (error) throw error; }
export async function getAdminProfile() { const client = await supabase(); const { data: { user } } = await client.auth.getUser(); if (!user) return null; const { data, error } = await client.from('profiles').select('id,email,name,role,active').eq('id', user.id).maybeSingle(); if (error) throw error; return data?.role === 'admin' && data.active ? data : null; }
