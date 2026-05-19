// ── CUENTA REGRESIVA ──
function updateCountdown() {
  const target = new Date('2026-11-07T18:00:00-06:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('cd-dias').textContent  = '000';
    document.getElementById('cd-horas').textContent = '00';
    document.getElementById('cd-min').textContent   = '00';
    document.getElementById('cd-seg').textContent   = '00';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-dias').textContent  = String(days).padStart(3, '0');
  document.getElementById('cd-horas').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-min').textContent   = String(mins).padStart(2, '0');
  document.getElementById('cd-seg').textContent   = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── NOMBRE DEL INVITADO ──
// Uso: ?invitado=Rocio%20y%20Arturo
const params   = new URLSearchParams(window.location.search);
const invitado = params.get('invitado')
  ? decodeURIComponent(params.get('invitado'))
  : null;

if (invitado) {
  const coverInvite = document.getElementById('cover-invite');
  if (coverInvite) coverInvite.textContent = `¡Hola, ${invitado}!`;

  const rsvpTitle = document.getElementById('rsvp-title');
  if (rsvpTitle) rsvpTitle.textContent = `¿Nos acompañas, ${invitado}?`;
}

// ── MODAL RSVP ──
function openRsvpModal() {
  const modal = document.getElementById('rsvp-modal');
  const guestName = document.getElementById('modal-guest-name');
  guestName.textContent = invitado || 'Invitado';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeRsvpModal(event) {
  // Cierra solo si se hace click en el fondo oscuro o en el botón X
  if (event && event.target !== document.getElementById('rsvp-modal')) return;
  document.getElementById('rsvp-modal').style.display = 'none';
  document.body.style.overflow = '';
}

function submitRsvp(respuesta) {
  const comentarios = document.getElementById('modal-comments').value.trim();

  const datos = {
    invitado: invitado || 'Invitado',
    respuesta,          // 'confirma' | 'ausencia'
    comentarios,
    fecha: new Date().toISOString(),
  };

  console.log('RSVP:', datos);

  // TODO: reemplazar con llamada a tu API
  // fetch('https://tu-api.com/rsvp', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(datos),
  // });

  // Cierra el modal y muestra confirmación
  document.getElementById('rsvp-modal').style.display = 'none';
  document.body.style.overflow = '';

  const mensaje = respuesta === 'confirma'
    ? `¡Gracias, ${datos.invitado}! Tu asistencia ha sido confirmada. 🎉`
    : `Gracias por avisarnos, ${datos.invitado}. ¡Los tendremos en nuestros corazones!`;

  alert(mensaje);
}
