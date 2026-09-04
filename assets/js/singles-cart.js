import { getActiveCards } from './services/cards-service.js';
const key = 'ghostnoxCart';
document.addEventListener('click', async event => {
  if (document.body.dataset.page !== 'singles') return;
  const button = event.target.closest('[data-add-card]');
  if (!button || button.disabled) return;
  const article = button.closest('[data-card-id]');
  const cards = await getActiveCards('single');
  const card = cards.find(item => item.id === article.dataset.cardId);
  if (!card) return;
  const quantity = Number(article.querySelector('[data-quantity]')?.value) || 1;
  const cart = JSON.parse(localStorage.getItem(key) || '[]');
  const item = cart.find(entry => entry.id === card.id);
  if (item) item.quantity = Math.min(item.quantity + quantity, card.stock);
  else cart.push({ id: card.id, name: card.name, price: Number(card.price), quantity });
  localStorage.setItem(key, JSON.stringify(cart));
  document.querySelector('[data-cart-panel]')?.classList.add('open');
  document.querySelector('[data-overlay]')?.classList.add('visible');
});
const panel = document.querySelector('[data-cart-panel]'), overlay = document.querySelector('[data-overlay]');
document.querySelector('[data-cart-button]')?.addEventListener('click', () => { panel?.classList.add('open'); overlay?.classList.add('visible'); });
document.querySelector('[data-close-cart]')?.addEventListener('click', () => { panel?.classList.remove('open'); overlay?.classList.remove('visible'); });
overlay?.addEventListener('click', () => { panel?.classList.remove('open'); overlay?.classList.remove('visible'); });
document.querySelector('[data-checkout-button]')?.addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem(key) || '[]'); if (!cart.length) return;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const text = ['Hola GHOSTNOX, quiero realizar esta compra:', '', ...cart.map(item => `• ${item.name} × ${item.quantity}`), '', `Total: ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(total)}`].join('\n');
  window.open(`https://wa.me/5491170591196?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
