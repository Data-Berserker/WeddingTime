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