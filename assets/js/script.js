'use strict';
document.head.insertAdjacentHTML('beforeend', `<style>:root{--color-primary:#8e46c7;--color-primary-hover:#bd6cf4;--color-secondary:#d564ce;--color-accent:#ff3d9a;--color-surface:#161021;--color-bg:#0a0710;--border-color:#4a3156}.header-logo-image{width:150px;height:56px;object-fit:contain}.account-button{border:1px solid var(--color-secondary)!important;border-radius:20px;padding:7px 10px!important;font-size:12px!important}.hero-art{background:radial-gradient(circle,#9e4cdb44,transparent 62%)}.ghostnox-hero-logo{max-width:min(440px,100%);max-height:460px;object-fit:contain;filter:drop-shadow(0 18px 32px #000)}.sealed-product{overflow:hidden;cursor:pointer}.sealed-product .product-image{height:285px;padding:8px;overflow:hidden;border-radius:8px;background:#1b1028}.sealed-product .product-image img{display:block;width:100%;height:100%;object-fit:contain}.contact{padding:90px 20px;text-align:center;background:var(--color-surface)}.contact p:not(.eyebrow){color:#b8aabe}.contact a+a{margin-left:15px;color:var(--color-secondary)}.social-links{display:flex;gap:14px}.auth-dialog,.product-detail-dialog{border:1px solid var(--border-color);border-radius:16px;background:var(--color-surface);color:white}.auth-dialog{width:min(430px,92vw);padding:30px}.auth-dialog form{display:grid;gap:12px}.auth-dialog input{display:block;width:100%;margin-top:5px;padding:12px;background:var(--color-bg);border:1px solid var(--border-color);border-radius:6px;color:white}.dialog-close,.detail-close{border:0;background:transparent;color:white;font-size:28px}.demo-access,.form-message{font-size:12px;color:#e1c7f4}.product-detail-dialog{width:min(820px,92vw);padding:0;overflow:auto}.product-detail-dialog::backdrop,.auth-dialog::backdrop{background:#07040bd9}.detail-content{display:grid;grid-template-columns:1fr 1fr}.detail-image{min-height:490px;padding:28px;display:grid;place-items:center;background:#110a19}.detail-image img{max-width:100%;max-height:470px;object-fit:contain}.detail-copy{padding:45px 35px}.detail-copy h2{font-size:32px}.detail-meta{color:var(--color-secondary);font-size:12px}.detail-description,.detail-note{color:#b8aabe;line-height:1.7}.detail-price{font-size:23px;font-weight:800}.detail-close{position:absolute;right:12px;top:8px;z-index:2}.ghostnox-intro{position:fixed;z-index:50;inset:0;display:grid;place-items:center;background:radial-gradient(circle,#33184c,#07050b 72%);overflow:hidden}.ghostnox-intro.leaving{opacity:0;transition:.5s}.intro-stage{width:min(440px,88vw);height:min(540px,82vh);position:relative}.pokeball{position:absolute;bottom:38px;left:50%;transform:translateX(-50%);width:min(245px,58vw);aspect-ratio:1;border-radius:50%;background:#160d1d;box-shadow:0 20px 28px #000;animation:ball .9s both}.ball-top,.ball-bottom{position:absolute;width:100%;height:50%;left:0}.ball-top{top:0;border-radius:250px 250px 0 0;background:linear-gradient(145deg,#ff5a80,#760b35);transform-origin:bottom;animation:top .8s 1s forwards}.ball-bottom{bottom:0;border-radius:0 0 250px 250px;background:linear-gradient(145deg,#fff,#777080);transform-origin:top;animation:bottom .8s 1s forwards}.ball-line{position:absolute;z-index:2;top:calc(50% - 9px);height:18px;width:100%;background:#100914}.ball-core{position:absolute;z-index:3;top:50%;left:50%;width:66px;height:66px;transform:translate(-50%,-50%);border:9px solid #160c20;border-radius:50%;background:radial-gradient(circle,#fff 0 22%,#df65e2 25% 42%,#321642 45%)}.intro-logo-wrap{position:absolute;z-index:4;width:82%;left:9%;bottom:90px;opacity:0;animation:logo 1.2s 1.4s forwards}.intro-logo-wrap img{width:100%}.skip-intro{position:absolute;z-index:5;right:20px;bottom:20px;border:1px solid #ffffff55;border-radius:20px;background:#0008;color:white;padding:8px 12px}@keyframes ball{from{opacity:0;transform:translate(-50%,100px) scale(.7)}to{opacity:1;transform:translateX(-50%)}}@keyframes top{to{transform:translateY(-35px);opacity:.4}}@keyframes bottom{to{transform:translateY(25px);opacity:.4}}@keyframes logo{to{opacity:1;transform:translateY(-35px)}}@media(max-width:760px){.hero{min-height:0!important;padding-bottom:28px}.hero-art{position:relative!important;inset:auto!important;opacity:1!important;width:100%!important;height:285px!important;margin-top:18px}.ghostnox-hero-logo{max-width:290px;max-height:275px}.sealed-product .product-image{height:215px}.detail-content{grid-template-columns:1fr}.detail-image{min-height:280px}.detail-image img{max-height:300px}.detail-copy{padding:26px 24px}.contact{padding:70px 20px}.account-button{display:block!important;font-size:11px!important}.header-logo-image{width:115px}.social-links{justify-content:center;flex-wrap:wrap}}</style>`);

const catalogItems = [
  ['Sobre Llamas Obsidianas · Charizard', 'Booster sellado · 10 cartas', 8500, 'carta1.png'],
  ['Sobre Llamas Obsidianas · Dragonite', 'Booster sellado · 10 cartas', 8500, 'carta2.png'],
  ['Sobre Llamas Obsidianas · Revavroom', 'Booster sellado · 10 cartas', 8200, 'carta3.png'],
  ['Sobre Llamas Obsidianas · Tyranitar', 'Booster sellado · 10 cartas', 8700, 'carta4.png']
];
const money = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
const cart = [];
const demoUser = { email: 'entrenador@ghostnox.com', password: 'Ghostnox2026!', name: 'Entrenador GHOSTNOX' };
let activeUser = JSON.parse(localStorage.getItem('ghostnoxUser') || 'null');
const $ = selector => document.querySelector(selector);

function setBrand() {
  document.title = 'GHOSTNOX — Cartas Pokémon originales';
  $('link[rel="icon"]').href = 'readme-images/GHOSTNOX-FAVICON.ico';
  $('header .brand').innerHTML = '<img class="header-logo-image" src="readme-images/GHOSTNOX-NEW.png" alt="GHOSTNOX, tienda de cartas Pokémon originales">';
  $('.hero .eyebrow').textContent = 'TIENDA DE CARTAS POKÉMON ORIGINALES';
  $('.hero h1').innerHTML = 'Cartas Pokémon <em>originales</em><br>para tu colección.';
  $('.copy>p:not(.eyebrow)').textContent = 'Comprá cartas Pokémon originales, verificadas y protegidas. Encontrá piezas para empezar, completar o elevar tu colección.';
  $('.hero .button').textContent = 'Ver cartas originales →';
  $('.hero-art').innerHTML = '<img class="ghostnox-hero-logo" src="readme-images/GHOSTNOX-GRANDE.png" alt="GHOSTNOX">';
  $('nav').insertAdjacentHTML('beforeend', '<a href="#contacto">Contacto</a>');
  $('footer').innerHTML = '<a class="brand" href="#inicio">GHOSTNOX</a><p>Tienda de cartas Pokémon originales para coleccionistas.</p><div class="social-links"><a href="https://www.instagram.com/ghostnoxtcg" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/ghostnoxtcg" target="_blank" rel="noopener">Facebook</a><a href="https://wa.me/5491170591196" target="_blank" rel="noopener">WhatsApp</a></div><p>© 2026 GHOSTNOX</p>';
  $('footer').insertAdjacentHTML('beforebegin', '<section class="contact" id="contacto"><p class="eyebrow">CONTACTO</p><h2>Hablemos de tu colección.</h2><p>Consultanos por cartas Pokémon originales, productos disponibles o ayuda con tu compra.</p><div><a class="button" href="https://wa.me/5491170591196" target="_blank" rel="noopener">WhatsApp +54 9 11 7059-1196</a><a href="https://www.instagram.com/ghostnoxtcg" target="_blank" rel="noopener">Instagram @ghostnoxtcg →</a></div></section>');
}

function renderCart() {
  $('[data-cart-count]').textContent = cart.length;
  $('[data-cart-total]').textContent = money.format(cart.reduce((total, item) => total + item[2], 0));
  $('[data-cart-items]').innerHTML = cart.length ? cart.map(item => `<p><b>${item[0]}</b><br><small>${item[1]} · ${money.format(item[2])}</small></p>`).join('') : '<p>Tu carrito está vacío.</p>';
}
function toggleCart(open) { $('[data-cart-panel]').classList.toggle('open', open); $('[data-overlay]').classList.toggle('visible', open); }

function openDetail(item) {
  const detail = $('.product-detail-dialog');
  detail.querySelector('.detail-content').innerHTML = `<div class="detail-image"><img src="readme-images/cartas-selladas/${item[3]}" alt="${item[0]}"></div><div class="detail-copy"><p class="eyebrow">PRODUCTO SELLADO</p><h2>${item[0]}</h2><p class="detail-meta">${item[1]}</p><p class="detail-description">Sobre original sellado de Pokémon. Ideal para sumar a tu colección, regalar o disfrutar una apertura con cartas oficiales.</p><p class="detail-price">${money.format(item[2])}</p><p class="detail-note">La imagen es ilustrativa del producto. Consultanos si necesitás más información.</p></div>`;
  detail.showModal();
}
function renderCatalog() {
  const catalog = $('.products');
  catalog.innerHTML = catalogItems.map((item, index) => `<article class="product sealed-product" data-index="${index}" tabindex="0"><div class="product-image"><img src="readme-images/cartas-selladas/${item[3]}" alt="${item[0]}"></div><small>${item[1]}</small><h3>${item[0]}</h3><div><b>${money.format(item[2])}</b><button data-add="${index}" aria-label="Agregar ${item[0]}">+</button></div></article>`).join('');
  catalog.addEventListener('click', event => { const add = event.target.closest('[data-add]'); const card = event.target.closest('.sealed-product'); if (add) { cart.push(catalogItems[add.dataset.add]); renderCart(); toggleCart(true); } else if (card) openDetail(catalogItems[card.dataset.index]); });
  catalog.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.sealed-product')) { event.preventDefault(); openDetail(catalogItems[event.target.dataset.index]); } });
  document.querySelectorAll('.filters button').forEach(button => button.classList.toggle('active', button.textContent.trim() === 'Sellado'));
}

function setupAccount() {
  $('header .actions').insertAdjacentHTML('beforeend', '<button class="account-button" data-account-button>Ingresar</button>');
  const dialog = document.createElement('dialog'); dialog.className = 'auth-dialog'; dialog.innerHTML = `<form><button type="button" class="dialog-close">×</button><p class="eyebrow">ACCESO DE ENTRENADOR</p><h2>Bienvenido a GHOSTNOX</h2><label>Email<input name="email" type="email" required></label><label>Contraseña<input name="password" type="password" required></label><p class="demo-access">Cuenta demo:<br><b>${demoUser.email}</b><br><b>${demoUser.password}</b></p><button class="button">Iniciar sesión →</button><p class="form-message"></p></form>`; document.body.append(dialog);
  const account = $('[data-account-button]'); const update = () => account.textContent = activeUser ? `Hola, ${activeUser.name.split(' ')[0]}` : 'Ingresar'; update();
  account.onclick = () => activeUser ? alert(`Sesión activa: ${activeUser.name}`) : dialog.showModal(); dialog.querySelector('.dialog-close').onclick = () => dialog.close();
  dialog.querySelector('form').onsubmit = event => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); if (data.email === demoUser.email && data.password === demoUser.password) { activeUser = demoUser; localStorage.setItem('ghostnoxUser', JSON.stringify(activeUser)); update(); dialog.close(); } else dialog.querySelector('.form-message').textContent = 'Usá la cuenta demo indicada.'; };
  $('[data-checkout-button]').onclick = () => { if (!cart.length) return; if (!activeUser) { toggleCart(false); dialog.showModal(); } else alert(`Gracias, ${activeUser.name}. Tu solicitud de compra está lista para continuar.`); };
}

function setupIntro() { const intro = document.createElement('section'); intro.className = 'ghostnox-intro'; intro.innerHTML = '<button class="skip-intro">Omitir intro</button><div class="intro-stage"><div class="intro-logo-wrap"><img src="readme-images/GHOSTNOX-GRANDE.png" alt="GHOSTNOX"></div><div class="pokeball"><div class="ball-top"></div><div class="ball-line"></div><div class="ball-bottom"></div><div class="ball-core"></div></div></div>'; document.body.prepend(intro); const close = () => { intro.classList.add('leaving'); setTimeout(() => intro.remove(), 500); }; intro.querySelector('button').onclick = close; setTimeout(close, 4300); }

function setupDialogs() { const detail = document.createElement('dialog'); detail.className = 'product-detail-dialog'; detail.innerHTML = '<button class="detail-close">×</button><div class="detail-content"></div>'; document.body.append(detail); detail.querySelector('.detail-close').onclick = () => detail.close(); detail.addEventListener('click', event => { if (event.target === detail) detail.close(); }); }

setBrand(); renderCatalog(); renderCart(); setupDialogs(); setupAccount(); setupIntro();
$('[data-cart-button]').innerHTML = 'Carrito <span data-cart-count>0</span>'; renderCart();
$('[data-close-cart]').onclick = () => toggleCart(false); $('[data-overlay]').onclick = () => toggleCart(false); $('[data-menu-button]').onclick = () => $('[data-navigation]').classList.toggle('open'); $('[data-search-button]').onclick = () => $('[data-search-dialog]').showModal();
