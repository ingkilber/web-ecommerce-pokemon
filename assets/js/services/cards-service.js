import { supabase } from '../supabase-client.js';

const db = async () => supabase();
export async function getActiveCards(category) { let query = (await db()).from('cards').select('*').eq('active', true).order('featured', { ascending: false }).order('created_at', { ascending: false }); if (category) query = query.eq('category', category); const { data, error } = await query; if (error) throw error; return data; }
export async function getAllCards() { const { data, error } = await (await db()).from('cards').select('*').order('updated_at', { ascending: false }); if (error) throw error; return data; }
export async function createCard(card) { const { data, error } = await (await db()).from('cards').insert(card).select().single(); if (error) throw error; return data; }
export async function updateCard(id, card) { const { data, error } = await (await db()).from('cards').update(card).eq('id', id).select().single(); if (error) throw error; return data; }
export async function deactivateCard(id) { return updateCard(id, { active: false }); }
export async function uploadCardImage(file) { const client = await db(); const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-'); const path = `cards/${crypto.randomUUID()}-${cleanName}`; const { error } = await client.storage.from('card-images').upload(path, file, { upsert: false, contentType: file.type }); if (error) throw error; return client.storage.from('card-images').getPublicUrl(path).data.publicUrl; }
