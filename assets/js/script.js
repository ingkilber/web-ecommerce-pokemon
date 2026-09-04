'use strict';
if (document.body.dataset.page === 'admin' || document.body.dataset.page === 'singles') document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="assets/css/admin.css">');
document.head.insertAdjacentHTML('beforeend', '<style>.auth-dialog h2{margin:2px 0 8px;font-size:25px!important;line-height:1.3;letter-spacing:.02em}.auth-dialog form{gap:16px!important}.auth-dialog label{line-height:1.5;letter-spacing:.01em}.auth-dialog .eyebrow{margin:0 0 -4px;letter-spacing:.13em}.auth-dialog input{margin-top:8px!important;line-height:1.35}.auth-dialog .demo-access{margin:0;line-height:1.55;letter-spacing:.01em}.auth-switch{margin:4px 0 0;text-align:center;font-size:13px;line-height:1.5;letter-spacing:.01em;color:#b8aabe}.auth-switch button{padding:0;border:0;background:transparent;color:var(--color-secondary);font:inherit;font-weight:700;cursor:pointer}</style>');
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
  if (!$('[data-cart-count]')) return;
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
  catalog.innerHTML = catalogItems.map((item, index) => `<article class="product sealed-product" data-index="${index}" tabindex="0"><div class="product-image"><img src="readme-images/cartas-selladas/${item[3]}" alt="${item[0]}"></div><small>${item[1]}</small><h3>${item[0]}</h3><div><b>${money.format(item[2])}</b><button data-add="${index}" aria-label="Comprar ${item[0]}">Comprar</button></div></article>`).join('');
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

const isSinglesPage = document.body.dataset.page === 'singles';
const isAdminPage = document.body.dataset.page === 'admin';
if (!isSinglesPage && !isAdminPage) { setBrand(); renderCatalog(); setupIntro(); }
renderCart(); setupDialogs();
$('[data-cart-button]') && ($('[data-cart-button]').innerHTML = 'Carrito <span data-cart-count>0</span>'); renderCart();
$('[data-close-cart]')?.addEventListener('click', () => toggleCart(false));
$('[data-overlay]')?.addEventListener('click', () => toggleCart(false));
$('[data-menu-button]')?.addEventListener('click', () => $('[data-navigation]').classList.toggle('open'));
$('[data-search-button]')?.addEventListener('click', () => $('[data-search-dialog]').showModal());
$('[data-checkout-button]')?.addEventListener('click', () => { if (!cart.length) return; const total = cart.reduce((sum, item) => sum + item[2], 0); const message = ['Hola GHOSTNOX, quiero realizar esta compra:', '', ...cart.map(item => `• ${item[0]} — ${item[1]} — ${money.format(item[2])}`), '', `Total: ${money.format(total)}`, '', 'Quedo atento/a para coordinar el pago y envío.'].join('\n'); window.open(`https://wa.me/5491170591196?text=${encodeURIComponent(message)}`, '_blank', 'noopener'); });
function enhanceAccountRegistration() {
  const dialog = document.querySelector('.auth-dialog');
  const form = dialog.querySelector('form');
  const title = form.querySelector('h2');
  const demo = form.querySelector('.demo-access');
  const submit = form.querySelector('.button');
  form.insertAdjacentHTML('afterbegin', '<label data-register-name hidden>Nombre<input name="name" type="text" autocomplete="name"></label>');
  form.querySelector('.form-message').insertAdjacentHTML('beforebegin', '<p class="auth-switch"><span data-switch-copy>No tenes cuenta?</span> <button type="button" data-register-switch>Crear una cuenta</button></p>');
  let registering = false;
  const setMode = value => {
    registering = value;
    const name = form.querySelector('[data-register-name]');
    name.hidden = !value;
    name.querySelector('input').required = value;
    title.textContent = value ? 'Crea tu cuenta' : 'Bienvenido a GHOSTNOX';
    demo.hidden = value;
    submit.textContent = value ? 'Crear cuenta' : 'Iniciar sesion';
    form.querySelector('[data-switch-copy]').textContent = value ? 'Ya tenes cuenta?' : 'No tenes cuenta?';
    form.querySelector('[data-register-switch]').textContent = value ? 'Iniciar sesion' : 'Crear una cuenta';
    form.querySelector('.form-message').textContent = '';
  };
  form.querySelector('[data-register-switch]').onclick = () => setMode(!registering);
  document.addEventListener('submit', event => {
    if (event.target !== form || !registering) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const data = Object.fromEntries(new FormData(form));
    activeUser = { name: data.name.trim(), email: data.email };
    localStorage.setItem('ghostnoxUser', JSON.stringify(activeUser));
    document.querySelector('[data-account-button]').textContent = `Hola, ${activeUser.name.split(' ')[0]}`;
    dialog.close();
  }, true);
}
if (!isSinglesPage && !isAdminPage) enhanceAccountRegistration();

(() => {
 if (!isSinglesPage) return;
 const cards=[['Charizard ex','223/197','Obsidian Flames','Fuego','Ilustracion especial','Ingles','Casi perfecta',185000],['Pikachu ex','247/191','Surging Sparks','Rayo','Ilustracion especial','Ingles','Casi perfecta',98000],['Gengar VMAX','271/264','Fusion Strike','Psiquico','Secreta','Ingles','Casi perfecta',220000],['Koraidon','047/084','Pitch Black','Lucha','Rara','Espanol','Casi perfecta',400],['Lugia V','186/195','Silver Tempest','Incoloro','Ilustracion especial','Ingles','Casi perfecta',125000],['Mew ex','232/091','Paldean Fates','Psiquico','Ilustracion especial','Japones','Casi perfecta',72000],['Dragonite V','192/203','Evolving Skies','Dragon','Ultra rara','Ingles','Ligeramente jugada',64000],['Umbreon VMAX','215/203','Evolving Skies','Oscuridad','Secreta','Ingles','Casi perfecta',64000],['Blastoise ex','200/165','151','Agua','Ilustracion especial','Espanol','Casi perfecta',112000],['Gardevoir ex','245/198','Scarlet & Violet','Psiquico','Ilustracion especial','Espanol','Casi perfecta',83000],...JSON.parse(localStorage.getItem('ghostnoxSingles')||'[]').map(card=>[card.name,card.number,card.expansion,card.type,card.rarity,card.language,card.condition,Number(card.price)])];
 cards.splice(0, cards.length,
  ['Centiskorch','010/084','Expansión 084','Fuego','Fase 1','Español','Casi perfecta',8500],
  ['Seaking','014/084','Expansión 084','Agua','Fase 1','Español','Casi perfecta',6200],
  ['Wailmer','015/084','Expansión 084','Agua','Básico','Español','Casi perfecta',4800],
  ['Relicanth','017/084','Expansión 084','Agua','Básico','Español','Casi perfecta',7200],
  ['Popplio','018/084','Expansión 084','Agua','Básico','Español','Casi perfecta',4500],
  ['Brionne','019/084','Expansión 084','Agua','Fase 1','Español','Casi perfecta',6800],
  ['Tropius','001/084','Expansión 084','Planta','Básico','Español','Casi perfecta',5300],
  ['Grubbin','002/084','Expansión 084','Planta','Básico','Español','Casi perfecta',3900],
  ['Fomantis','003/084','Expansión 084','Planta','Básico','Español','Casi perfecta',4100],
  ['Poltchageist','005/084','Expansión 084','Planta','Básico','Español','Casi perfecta',5600],
  ['Sinistcha','006/084','Expansión 084','Planta','Fase 1','Español','Casi perfecta',7500],
  ['Heatran','007/084','Expansión 084','Fuego','Básico','Español','Casi perfecta',8900],
  ['Sizzlipede','009/084','Expansión 084','Fuego','Básico','Español','Casi perfecta',4300],
  ...JSON.parse(localStorage.getItem('ghostnoxSingles')||'[]').map(card=>[card.name,card.number,card.expansion,card.type,card.rarity,card.language,card.condition,Number(card.price)])
 );
 cards.slice(0, 13).forEach(card => { card[2] = 'PBL A'; });
 const singlesImages=['WhatsApp Image 2026-09-03 at 10.20.10 PM.jpeg','WhatsApp Image 2026-09-03 at 10.20.11 PM (1).jpeg','WhatsApp Image 2026-09-03 at 10.20.11 PM (2).jpeg','WhatsApp Image 2026-09-03 at 10.40.27 PM.jpeg','WhatsApp Image 2026-09-03 at 10.20.11 PM.jpeg','WhatsApp Image 2026-09-03 at 10.55.15 PM.jpeg','WhatsApp Image 2026-09-03 at 10.55.15 PM (1).jpeg','WhatsApp Image 2026-09-03 at 10.55.16 PM.jpeg','WhatsApp Image 2026-09-03 at 10.55.16 PM (1).jpeg','WhatsApp Image 2026-09-03 at 10.55.16 PM (2).jpeg','WhatsApp Image 2026-09-03 at 10.55.27 PM.jpeg','WhatsApp Image 2026-09-03 at 10.55.27 PM (1).jpeg','WhatsApp Image 2026-09-03 at 10.55.28 PM.jpeg'];
 cards.slice(0,13).forEach((card,index)=>card.image=`readme-images/singles/${singlesImages[index]}`);
 const singlesImageByName={Tropius:'WhatsApp Image 2026-09-03 at 10.20.10 PM.jpeg',Fomantis:'WhatsApp Image 2026-09-03 at 10.20.11 PM (1).jpeg',Poltchageist:'WhatsApp Image 2026-09-03 at 10.20.11 PM (2).jpeg',Grubbin:'WhatsApp Image 2026-09-03 at 10.20.11 PM.jpeg',Sinistcha:'WhatsApp Image 2026-09-03 at 10.40.27 PM.jpeg',Sizzlipede:'WhatsApp Image 2026-09-03 at 10.55.15 PM (1).jpeg',Heatran:'WhatsApp Image 2026-09-03 at 10.55.15 PM.jpeg',Seaking:'WhatsApp Image 2026-09-03 at 10.55.16 PM (1).jpeg',Wailmer:'WhatsApp Image 2026-09-03 at 10.55.16 PM (2).jpeg',Centiskorch:'WhatsApp Image 2026-09-03 at 10.55.16 PM.jpeg',Popplio:'WhatsApp Image 2026-09-03 at 10.55.27 PM (1).jpeg',Relicanth:'WhatsApp Image 2026-09-03 at 10.55.27 PM.jpeg',Brionne:'WhatsApp Image 2026-09-03 at 10.55.28 PM.jpeg'};
 cards.slice(0,13).forEach(card=>card.image=`readme-images/singles/${singlesImageByName[card[0]]}`);
 cards.slice(13).forEach((card,index)=>card.image=JSON.parse(localStorage.getItem('ghostnoxSingles')||'[]')[index]?.image || '');
 if (localStorage.getItem('ghostnoxSinglesManaged') === 'true') { const managedCards = JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]'); cards.splice(0, cards.length, ...managedCards.map(card => { const item = [card.name,card.number,card.expansion,card.type,card.rarity,card.language,card.condition,Number(card.price)]; item.image = card.image || `readme-images/singles/${singlesImageByName[card.name] || ''}`; return item; })); }
 const fields=[['Expansion',2],['Tipo',3],['Rareza',4],['Idioma',5],['Estado',6]];
 const s=document.createElement('section');s.id='singles';s.className='singles';s.innerHTML=`<div class="singles-title"><div><p class="eyebrow">SINGLES</p><h2>La carta que falta<br>en tu coleccion.</h2><p>Cartas individuales verificadas para completar tu binder.</p></div><button data-toggle-filters>Filtros</button></div><div class="singles-layout"><aside><div class="filter-head"><b>Filtros</b><button data-clear>Limpiar</button></div><label>Buscar<input data-search placeholder="Nombre, numero o expansion"></label>${fields.map(([n,i])=>`<details open><summary>${n}</summary>${[...new Set(cards.map(c=>c[i]))].map(v=>`<label><input type="checkbox" data-filter="${i}" value="${v}"> ${v}</label>`).join('')}</details>`).join('')}<details open><summary>Precio</summary><div class="price"><input type="number" data-min placeholder="Min."><input type="number" data-max placeholder="Max."></div></details><label><input type="checkbox" data-stock> Solo disponibles</label></aside><div class="singles-main"><div class="single-toolbar"><span><b data-count></b> cartas encontradas</span><label>Ordenar <select data-sort><option value="default">Destacadas</option><option value="low">Menor precio</option><option value="high">Mayor precio</option><option value="name">A-Z</option></select></label></div><div class="single-grid"></div><p class="empty" hidden>No encontramos cartas.<button data-clear>Restablecer filtros</button></p><div class="pages"></div></div></div>`;document.querySelector('#singles-view').append(s);
 const state={q:'',filters:{},min:'',max:'',stock:false,sort:'default',page:1};const grid=s.querySelector('.single-grid');
 function render(){let list=cards.filter(c=>(!state.q||c.slice(0,3).join(' ').toLowerCase().includes(state.q))&&Object.entries(state.filters).every(([i,v])=>!v.length||v.includes(c[i]))&&(!state.min||c[7]>=state.min)&&(!state.max||c[7]<=state.max));if(state.sort==='low')list.sort((a,b)=>a[7]-b[7]);if(state.sort==='high')list.sort((a,b)=>b[7]-a[7]);if(state.sort==='name')list.sort((a,b)=>a[0].localeCompare(b[0]));const found=list.length;let pages=Math.max(1,Math.ceil(found/6));state.page=Math.min(state.page,pages);list=list.slice((state.page-1)*6,state.page*6);s.querySelector('[data-count]').textContent=found;grid.innerHTML=list.map(c=>`<article class="single"><button class="heart">♡</button><div class="single-art ${c[3].toLowerCase()}"><small>POKEMON</small><strong>${c[0]}</strong><i>${c[1]}</i></div><div><p>${c[2]} · ${c[1]}</p><h3>${c[0]}</h3><em>${c[5]} · ${c[6]}</em><footer><b>${money.format(c[7])}</b><span><select>${[1,2,3].map(x=>`<option>${x}</option>`).join('')}</select><button data-add-single="${cards.indexOf(c)}">+</button></span></footer></div></article>`).join('');s.querySelector('.empty').hidden=!!list.length;s.querySelector('.pages').innerHTML=Array.from({length:pages},(_,i)=>`<button class="${state.page===i+1?'active':''}" data-page="${i+1}">${i+1}</button>`).join('')}
 s.addEventListener('input',e=>{if(e.target.matches('[data-search]'))state.q=e.target.value.toLowerCase();if(e.target.matches('[data-min]'))state.min=Number(e.target.value);if(e.target.matches('[data-max]'))state.max=Number(e.target.value);if(e.target.matches('[data-filter]'))state.filters[e.target.dataset.filter]=[...s.querySelectorAll(`[data-filter="${e.target.dataset.filter}"]:checked`)].map(x=>x.value);state.page=1;render()});s.addEventListener('change',e=>{if(e.target.matches('[data-sort]')){state.sort=e.target.value;render()}});s.addEventListener('click',e=>{if(e.target.matches('[data-page]')){state.page=+e.target.dataset.page;render()}if(e.target.matches('.heart'))e.target.classList.toggle('saved');if(e.target.matches('[data-add-single]')){let c=cards[e.target.dataset.addSingle],n=+e.target.parentElement.querySelector('select').value;while(n--)cart.push([c[0],`${c[2]} · ${c[6]}`,c[7]]);renderCart();toggleCart(true)}if(e.target.matches('[data-clear]')){Object.assign(state,{q:'',filters:{},min:'',max:'',sort:'default',page:1});s.querySelectorAll('input').forEach(i=>{i.checked=false;i.value=''});s.querySelector('[data-sort]').value='default';render()}if(e.target.matches('[data-toggle-filters]'))s.classList.toggle('open')});render();
 const decorateSingles = () => grid.querySelectorAll('.single').forEach(card => { const buyButton = card.querySelector('[data-add-single]'); buyButton.textContent = 'Comprar'; buyButton.setAttribute('aria-label', `Comprar ${cards[buyButton.dataset.addSingle][0]}`); const item = cards[buyButton.dataset.addSingle]; if (!item.image) return; const art = card.querySelector('.single-art'); art.innerHTML = `<img src="${encodeURI(item.image)}" alt="${item[0]}">`; art.dataset.preview = 'true'; });
 new MutationObserver(decorateSingles).observe(grid, { childList: true });
 decorateSingles();
 s.addEventListener('click', event => { const art = event.target.closest('.single-art[data-preview]'); if (!art) return; const card = art.closest('.single'); const item = cards[card.querySelector('[data-add-single]').dataset.addSingle]; openSingleDetail(item); });
})();

if (isAdminPage) {
  const login = document.querySelector('#admin-login');
  const panel = document.querySelector('#admin-panel');
  const inventory = document.querySelector('#admin-list');
  const getAdminCards = () => JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]');
  const renderInventory = () => { inventory.innerHTML = getAdminCards().map(card => `<li><span><b>${card.name}</b><small>${card.expansion} · ${money.format(card.price)} · Stock ${card.stock}</small></span><button data-delete-card="${card.id}">Eliminar</button></li>`).join(''); };
  const showPanel = () => { login.closest('.admin-login').hidden = true; panel.hidden = false; renderInventory(); };
  if (sessionStorage.getItem('ghostnoxAdmin') === 'true') showPanel();
  login.onsubmit = event => { event.preventDefault(); const data = Object.fromEntries(new FormData(login)); if (data.username === 'admin' && data.password === 'admin') { sessionStorage.setItem('ghostnoxAdmin', 'true'); showPanel(); } else login.querySelector('[data-login-error]').textContent = 'Usuario o contraseña incorrectos.'; };
  document.querySelector('#admin-card-form').onsubmit = event => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); const cards = getAdminCards(); cards.unshift({ id: crypto.randomUUID(), name: data.name.trim(), number: data.number.trim(), expansion: data.expansion.trim(), type: data.type, rarity: data.rarity.trim(), language: data.language, condition: data.condition, price: Number(data.price), stock: Number(data.stock) }); localStorage.setItem('ghostnoxSingles', JSON.stringify(cards)); event.currentTarget.reset(); document.querySelector('#admin-message').textContent = 'Carta guardada y publicada en Singles.'; renderInventory(); };
  document.querySelector('#admin-logout').onclick = () => { sessionStorage.removeItem('ghostnoxAdmin'); location.reload(); };
  document.querySelector('#export-json').onclick = () => { const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(getAdminCards(), null, 2)], { type: 'application/json' })); link.download = 'singles.json'; link.click(); URL.revokeObjectURL(link.href); };
  inventory.onclick = event => { const id = event.target.dataset.deleteCard; if (!id) return; localStorage.setItem('ghostnoxSingles', JSON.stringify(getAdminCards().filter(card => card.id !== id))); renderInventory(); };
}
function openSingleDetail(item) {
  const detail = $('.product-detail-dialog');
  detail.querySelector('.detail-content').innerHTML = `<div class="detail-image"><img src="${item.image}" alt="${item[0]}"></div><div class="detail-copy"><p class="eyebrow">SINGLE</p><h2>${item[0]}</h2><p class="detail-meta">${item[2]} · ${item[1]}</p><p class="detail-description">${item[3]} · ${item[4]} · ${item[5]} · ${item[6]}</p><p class="detail-price">${money.format(item[7])}</p></div>`;
  detail.showModal();
}

if (isAdminPage) {
  const adminForm = document.querySelector('#admin-card-form');
  const adminList = document.querySelector('#admin-list');
  let editingCardId = null;
  const storedCards = () => JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]');
  const drawAdminList = () => { adminList.innerHTML = storedCards().map(card => `<li><span><b>${card.name}</b><small>${card.expansion} · ${money.format(card.price)} · Stock ${card.stock}</small></span><span><button data-edit-card="${card.id}">Editar</button><button data-delete-card="${card.id}">Eliminar</button></span></li>`).join(''); };
  const clearEditor = () => { editingCardId = null; adminForm.reset(); adminForm.querySelector('.button').textContent = 'Guardar carta'; document.querySelector('#admin-message').textContent = ''; };
  adminForm.onsubmit = event => { event.preventDefault(); const data = Object.fromEntries(new FormData(adminForm)); const card = { id: editingCardId || crypto.randomUUID(), name: data.name.trim(), number: data.number.trim(), expansion: data.expansion.trim(), type: data.type, rarity: data.rarity.trim(), language: data.language, condition: data.condition, price: Number(data.price), stock: Number(data.stock) }; const cards = storedCards(); const index = cards.findIndex(item => item.id === editingCardId); if (index >= 0) cards[index] = card; else cards.unshift(card); localStorage.setItem('ghostnoxSingles', JSON.stringify(cards)); document.querySelector('#admin-message').textContent = editingCardId ? 'Carta actualizada.' : 'Carta guardada y publicada en Singles.'; clearEditor(); drawAdminList(); };
  adminList.onclick = event => { const id = event.target.dataset.editCard || event.target.dataset.deleteCard; if (!id) return; const cards = storedCards(); if (event.target.dataset.deleteCard) { localStorage.setItem('ghostnoxSingles', JSON.stringify(cards.filter(card => card.id !== id))); drawAdminList(); return; } const card = cards.find(item => item.id === id); if (!card) return; editingCardId = id; ['name','number','expansion','type','rarity','language','condition','price','stock'].forEach(field => { adminForm.elements[field].value = card[field] ?? ''; }); adminForm.querySelector('.button').textContent = 'Guardar cambios'; document.querySelector('#admin-message').textContent = `Editando ${card.name}.`; window.scrollTo({ top: 0, behavior: 'smooth' }); };
  drawAdminList();
}

if (isAdminPage) {
  const form = document.querySelector('#admin-card-form');
  const list = document.querySelector('#admin-list');
  const readImage = file => new Promise((resolve, reject) => { if (!file) return resolve(''); const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); });
  list.addEventListener('click', event => { if (event.target.dataset.editCard) form.dataset.editingId = event.target.dataset.editCard; });
  form.onsubmit = async event => { event.preventDefault(); const data = Object.fromEntries(new FormData(form)); const cards = JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]'); const index = cards.findIndex(card => card.id === form.dataset.editingId); const previous = index >= 0 ? cards[index] : {}; const image = await readImage(form.elements.image.files[0]) || previous.image || ''; const card = { id: previous.id || crypto.randomUUID(), name: data.name.trim(), number: data.number.trim(), expansion: data.expansion.trim(), type: data.type, rarity: data.rarity.trim(), language: data.language, condition: data.condition, price: Number(data.price), stock: Number(data.stock), image }; if (index >= 0) cards[index] = card; else cards.unshift(card); localStorage.setItem('ghostnoxSingles', JSON.stringify(cards)); form.reset(); delete form.dataset.editingId; form.querySelector('.button').textContent = 'Guardar carta'; document.querySelector('#admin-message').textContent = 'Carta guardada y su imagen se verá en Singles.'; list.innerHTML = cards.map(card => `<li><span><b>${card.name}</b><small>${card.expansion} · ${money.format(card.price)} · Stock ${card.stock}</small></span><span><button data-edit-card="${card.id}">Editar</button><button data-delete-card="${card.id}">Eliminar</button></span></li>`).join(''); };
}

if (isAdminPage) {
  const initialSingles = [
    ['Centiskorch','010/084','PBL A','Fuego','Fase 1',8500],['Seaking','014/084','PBL A','Agua','Fase 1',6200],['Wailmer','015/084','PBL A','Agua','Básico',4800],['Relicanth','017/084','PBL A','Agua','Básico',7200],['Popplio','018/084','PBL A','Agua','Básico',4500],['Brionne','019/084','PBL A','Agua','Fase 1',6800],['Tropius','001/084','PBL A','Planta','Básico',5300],['Grubbin','002/084','PBL A','Planta','Básico',3900],['Fomantis','003/084','PBL A','Planta','Básico',4100],['Poltchageist','005/084','PBL A','Planta','Básico',5600],['Sinistcha','006/084','PBL A','Planta','Fase 1',7500],['Heatran','007/084','PBL A','Fuego','Básico',8900],['Sizzlipede','009/084','PBL A','Fuego','Básico',4300]
  ];
  const imageNames = {Tropius:'WhatsApp Image 2026-09-03 at 10.20.10 PM.jpeg',Fomantis:'WhatsApp Image 2026-09-03 at 10.20.11 PM (1).jpeg',Poltchageist:'WhatsApp Image 2026-09-03 at 10.20.11 PM (2).jpeg',Grubbin:'WhatsApp Image 2026-09-03 at 10.20.11 PM.jpeg',Sinistcha:'WhatsApp Image 2026-09-03 at 10.40.27 PM.jpeg',Sizzlipede:'WhatsApp Image 2026-09-03 at 10.55.15 PM (1).jpeg',Heatran:'WhatsApp Image 2026-09-03 at 10.55.15 PM.jpeg',Seaking:'WhatsApp Image 2026-09-03 at 10.55.16 PM (1).jpeg',Wailmer:'WhatsApp Image 2026-09-03 at 10.55.16 PM (2).jpeg',Centiskorch:'WhatsApp Image 2026-09-03 at 10.55.16 PM.jpeg',Popplio:'WhatsApp Image 2026-09-03 at 10.55.27 PM (1).jpeg',Relicanth:'WhatsApp Image 2026-09-03 at 10.55.27 PM.jpeg',Brionne:'WhatsApp Image 2026-09-03 at 10.55.28 PM.jpeg'};
  if (localStorage.getItem('ghostnoxSinglesManaged') !== 'true') { const existing = JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]'); const seed = initialSingles.map(([name,number,expansion,type,rarity,price]) => ({ id: crypto.randomUUID(), name, number, expansion, type, rarity, language: 'Español', condition: 'Casi perfecta', price, stock: 1, image: `readme-images/singles/${imageNames[name]}` })); localStorage.setItem('ghostnoxSingles', JSON.stringify([...seed, ...existing])); localStorage.setItem('ghostnoxSinglesManaged', 'true'); }
  const inventory = document.querySelector('#admin-list');
  if (!document.querySelector('#admin-search')) inventory.insertAdjacentHTML('beforebegin', '<div class="admin-tools"><input id="admin-search" type="search" placeholder="Buscar carta en el inventario"><b id="admin-count"></b></div>');
  const renderManagedInventory = () => { const query = document.querySelector('#admin-search').value.toLowerCase(); const cards = JSON.parse(localStorage.getItem('ghostnoxSingles') || '[]').filter(card => `${card.name} ${card.number} ${card.expansion}`.toLowerCase().includes(query)); document.querySelector('#admin-count').textContent = `${cards.length} cartas`; inventory.innerHTML = cards.map(card => `<li><span><b>${card.name}</b><small>${card.number} · ${card.expansion} · ${money.format(card.price)} · Stock ${card.stock}</small></span><span><button data-edit-card="${card.id}">Editar</button><button data-delete-card="${card.id}">Eliminar</button></span></li>`).join(''); };
  document.querySelector('#admin-search').addEventListener('input', renderManagedInventory);
  renderManagedInventory();
}
