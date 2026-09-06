function enhanceAdmin() {
  const form = document.querySelector('#admin-card-form');
  if (!form || form.dataset.enhancedFields) return false;
  form.dataset.enhancedFields = 'true';
  const category = form.elements.category;
  const categoryValue = category.value;
  category.outerHTML = `<input name="category" list="card-categories" value="${categoryValue}" required><datalist id="card-categories"><option value="single"><option value="sealed"><option value="accesorio"><option value="lote"></datalist>`;
  form.querySelector('.form-row').insertAdjacentHTML('afterend', '<div class="form-row"><label>Tipo Pokémon<select name="card_type"><option>Sin especificar</option><option>Agua</option><option>Fuego</option><option>Planta</option><option>Rayo</option><option>Psíquico</option><option>Oscuridad</option><option>Dragón</option><option>Incoloro</option><option>Lucha</option></select></label><label>Empresa de gradación<input name="grading_company" placeholder="PSA, CGC, BGS..."></label></div><label>Grado de la carta<input name="grading_grade" type="number" min="0" max="10" step="0.5" placeholder="Ej.: 9.5"></label>');
  if (!form.elements.id.value) form.elements.condition.value = 'Nueva';
  form.addEventListener('reset', () => setTimeout(() => {
    if (!form.elements.id.value) form.elements.condition.value = 'Nueva';
  }, 0));
  const bindFeedback = () => {
    const originalSubmit = form.onsubmit;
    if (!originalSubmit) return setTimeout(bindFeedback, 100);
    if (form.dataset.saveFeedbackReady) return;
    form.dataset.saveFeedbackReady = 'true';
    const modal = document.createElement('div');
    modal.className = 'save-card-modal';
    modal.hidden = true;
    modal.style.display = 'none';
    modal.innerHTML = '<div class="save-card-dialog" role="alertdialog" aria-live="assertive"><span class="save-card-spinner" aria-hidden="true"></span><h2></h2><p></p><button type="button" class="button" hidden>Entendido</button></div>';
    document.body.append(modal);
    const title = modal.querySelector('h2'), detail = modal.querySelector('p'), close = modal.querySelector('button');
    const show = (heading, text, state) => { modal.dataset.state = state; title.textContent = heading; detail.textContent = text; close.hidden = state === 'loading'; modal.hidden = false; modal.style.display = 'grid'; };
    close.onclick = () => { modal.hidden = true; modal.style.display = 'none'; };
    form.onsubmit = async event => {
      show('Guardando carta…', 'Estamos guardando los cambios. Esto puede tardar unos segundos si subiste una imagen.', 'loading');
      const submitButton = form.querySelector('button[type="submit"], .button');
      if (submitButton) submitButton.disabled = true;
      await originalSubmit.call(form, event);
      const message = document.querySelector('#admin-message')?.textContent;
      if (message === 'Carta guardada correctamente.') show('Carta guardada', 'Los cambios se guardaron exitosamente. Seguís en el gestor administrador.', 'success');
      else show('No se pudo guardar', message || 'Intentá nuevamente.', 'error');
      if (submitButton) submitButton.disabled = false;
    };
  };
  bindFeedback();
  return true;
}
const observer = new MutationObserver(() => { if (enhanceAdmin()) observer.disconnect(); });
observer.observe(document.documentElement, { childList: true, subtree: true });
enhanceAdmin();
