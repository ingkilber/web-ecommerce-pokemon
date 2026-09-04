import { createCard, updateCard, uploadCardImage } from './services/cards-service.js';

function enhanceAdmin() {
  const form = document.querySelector('#admin-card-form');
  if (!form || form.dataset.enhancedFields) return false;
  form.dataset.enhancedFields = 'true';
  const category = form.elements.category;
  const categoryValue = category.value;
  category.outerHTML = `<input name="category" list="card-categories" value="${categoryValue}" required><datalist id="card-categories"><option value="single"><option value="sealed"><option value="accesorio"><option value="lote"></datalist>`;
  form.querySelector('.form-row').insertAdjacentHTML('afterend', '<div class="form-row"><label>Tipo Pokémon<select name="card_type"><option>Sin especificar</option><option>Agua</option><option>Fuego</option><option>Planta</option><option>Rayo</option><option>Psíquico</option><option>Oscuridad</option><option>Dragón</option><option>Incoloro</option><option>Lucha</option></select></label><label>Empresa de gradación<input name="grading_company" placeholder="PSA, CGC, BGS..."></label></div><label>Grado de la carta<input name="grading_grade" type="number" min="0" max="10" step="0.5" placeholder="Ej.: 9.5"></label>');
  const submit = async event => {
    event.preventDefault();
    const data = new FormData(form), image = data.get('image');
    const payload = { name: data.get('name').trim(), description: data.get('description').trim(), price: Number(data.get('price')), stock: Number(data.get('stock')), category: data.get('category').trim().toLowerCase(), collection: data.get('collection').trim(), card_number: data.get('card_number').trim(), rarity: data.get('rarity').trim(), language: data.get('language').trim(), condition: data.get('condition').trim(), card_type: data.get('card_type'), grading_company: data.get('grading_company').trim() || null, grading_grade: data.get('grading_grade') ? Number(data.get('grading_grade')) : null, active: data.get('active') === 'on', featured: data.get('featured') === 'on' };
    const message = document.querySelector('#admin-message');
    try { if (image instanceof File && image.size) payload.image_url = await uploadCardImage(image); if (data.get('id')) await updateCard(data.get('id'), payload); else await createCard(payload); message.textContent = 'Carta guardada correctamente.'; setTimeout(() => location.reload(), 500); } catch (error) { message.textContent = error.message; }
  };
  const replaceHandler = () => { form.onsubmit = submit; };
  replaceHandler(); setTimeout(replaceHandler, 500); setTimeout(replaceHandler, 1500);
  return true;
}
const observer = new MutationObserver(() => { if (enhanceAdmin()) observer.disconnect(); });
observer.observe(document.documentElement, { childList: true, subtree: true });
enhanceAdmin();
