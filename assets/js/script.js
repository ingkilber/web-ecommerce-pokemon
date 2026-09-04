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

setupBrand();
setupIntro();
setupNavigation();
if (document.body.dataset.page !== 'admin') setupCardDialog();
