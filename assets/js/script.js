'use strict';

const $ = selector => document.querySelector(selector);

function setupBrand() {
  if (document.body.dataset.page || !$('.hero')) return;
  document.title = 'GHOSTNOX — Cartas Pokémon originales';
  $('link[rel="icon"]').href = 'readme-images/GHOSTNOX-FAVICON.ico';
  $('header .brand').innerHTML = '<img class="header-logo-image" src="readme-images/GHOSTNOX-NEW.png" alt="GHOSTNOX">';
  $('.hero .eyebrow').textContent = 'TIENDA DE CARTAS POKÉMON ORIGINALES';
  $('.hero h1').innerHTML = 'Cartas Pokémon <em>originales</em><br>para tu colección.';
  $('.copy>p:not(.eyebrow)').textContent = 'Comprá cartas Pokémon originales, verificadas y protegidas. Encontrá piezas para empezar, completar o elevar tu colección.';
  $('.hero .button').textContent = 'Ver cartas originales →';
  $('.hero-art').innerHTML = '<img class="ghostnox-hero-logo" src="readme-images/GHOSTNOX-GRANDE.png" alt="GHOSTNOX">';
  $('nav').insertAdjacentHTML('beforeend', '<a href="#contacto">Contacto</a>');
  const footer = $('footer');
  footer.innerHTML = '<a class="brand" href="#inicio">GHOSTNOX</a><p>Tienda de cartas Pokémon originales para coleccionistas.</p><div class="social-links"><a href="https://www.instagram.com/ghostnoxtcg" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/ghostnoxtcg" target="_blank" rel="noopener">Facebook</a><a href="https://wa.me/5491170591196" target="_blank" rel="noopener">WhatsApp</a></div><p>© 2026 GHOSTNOX</p>';
  footer.insertAdjacentHTML('beforebegin', '<section class="contact" id="contacto"><p class="eyebrow">CONTACTO</p><h2>Hablemos de tu colección.</h2><p>Consultanos por cartas Pokémon originales, productos disponibles o ayuda con tu compra.</p><div><a class="button" href="https://wa.me/5491170591196" target="_blank" rel="noopener">WhatsApp +54 9 11 7059-1196</a><a href="https://www.instagram.com/ghostnoxtcg" target="_blank" rel="noopener">Instagram @ghostnoxtcg →</a></div></section>');
}

function setupIntro() {
  if (document.body.dataset.page) return;
  const intro = document.createElement('section');
  intro.className = 'ghostnox-intro';
  intro.innerHTML = '<button class="skip-intro">Omitir intro</button><div class="intro-stage"><div class="intro-logo-wrap"><img src="readme-images/GHOSTNOX-GRANDE.png" alt="GHOSTNOX"></div><div class="pokeball"><div class="ball-top"></div><div class="ball-line"></div><div class="ball-bottom"></div><div class="ball-core"></div></div></div>';
  document.body.prepend(intro);
  const close = () => { intro.classList.add('leaving'); setTimeout(() => intro.remove(), 500); };
  intro.querySelector('.skip-intro').onclick = close;
  setTimeout(close, 4300);
}

function setupNavigation() {
  $('[data-menu-button]')?.addEventListener('click', () => $('[data-navigation]')?.classList.toggle('open'));
  $('[data-search-button]')?.addEventListener('click', () => $('[data-search-dialog]')?.showModal());
}

function setupCardDialog() {
  const detail = document.createElement('dialog');
  detail.className = 'product-detail-dialog';
  detail.innerHTML = '<button class="detail-close" aria-label="Cerrar">×</button><div class="detail-content"></div>';
  document.body.append(detail);
  detail.querySelector('.detail-close').onclick = () => detail.close();
  detail.addEventListener('click', event => { if (event.target === detail) detail.close(); });
  window.openCardDialog = card => {
    detail.querySelector('.detail-content').innerHTML = `<div class="detail-image">${card.image_url ? `<img src="${card.image_url}" alt="${card.name}">` : ''}</div><div class="detail-copy"><p class="eyebrow">${card.category || 'SINGLE'}</p><h2>${card.name}</h2><p class="detail-meta">${card.collection || ''} ${card.card_number ? `· ${card.card_number}` : ''}</p><p class="detail-description">${card.description || 'Carta Pokémon para colección.'}</p><p class="detail-price">${new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(card.price)}</p></div>`;
    detail.showModal();
  };
}

setupBrand();
setupIntro();
setupNavigation();
if (document.body.dataset.page !== 'admin') setupCardDialog();
