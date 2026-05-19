// ── CONFIGURACIÓN SUPABASE ──
const SUPABASE_URL     = 'https://zbwndyeozrpjrmltsdri.supabase.co/rest/v1';
const SUPABASE_ANON_KEY = 'sb_publishable_61Gn8It1YJxEXel2Z_xLqw_ScRM8tC4';

// ── CUENTA REGRESIVA ──
function updateCountdown() {
  const target = new Date('2026-11-07T14:00:00-06:00');
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

// ── PARÁMETROS DEL URL ──
// Ejemplo: ?id=UUID&invitado1=Irma%20Dolores&invitado2=Jose%20Manuel&tickets=2
const params    = new URLSearchParams(window.location.search);
const guestId   = params.get('id')        ? decodeURIComponent(params.get('id'))        : null;
const invitado1 = params.get('invitado1') ? decodeURIComponent(params.get('invitado1')) : null;
const invitado2 = params.get('invitado2') ? decodeURIComponent(params.get('invitado2')) : null;
const tickets   = params.get('tickets')   ? parseInt(params.get('tickets'), 10)         : null;

// Nombre compuesto para mostrar en textos
const nombreMostrado = invitado1
  ? (invitado2 ? `${invitado1} y ${invitado2}` : invitado1)
  : null;

const esPlural = !!invitado2;

if (nombreMostrado) {
  const coverInvite = document.getElementById('cover-invite');
  if (coverInvite) coverInvite.textContent = `¡Hola, ${nombreMostrado}!`;

  const rsvpTitle = document.getElementById('rsvp-title');
  if (rsvpTitle) rsvpTitle.textContent = esPlural
    ? `¿Nos acompañan, ${nombreMostrado}?`
    : `¿Nos acompañas, ${nombreMostrado}?`;
}

// ── MODAL RSVP ──
function openRsvpModal() {
  const modal = document.getElementById('rsvp-modal');

  document.getElementById('modal-guest-name').textContent =
    nombreMostrado || 'Invitado';

  const ticketsRow = document.getElementById('modal-tickets-row');
  const ticketsVal = document.getElementById('modal-tickets-value');
  if (ticketsRow && ticketsVal) {
    if (tickets) {
      ticketsVal.textContent = `${tickets} lugar${tickets > 1 ? 'es' : ''} reservado${tickets > 1 ? 's' : ''}`;
      ticketsRow.style.display = 'block';
    } else {
      ticketsRow.style.display = 'none';
    }
  }

  const confirmBtn = document.getElementById('modal-confirm-btn');
  if (confirmBtn) confirmBtn.textContent = esPlural
    ? '✓   Confirmamos asistencia'
    : '✓   Confirmo asistencia';

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeRsvpModal(event) {
  if (event && event.target !== document.getElementById('rsvp-modal')) return;
  document.getElementById('rsvp-modal').style.display = 'none';
  document.body.style.overflow = '';
}

async function submitRsvp(respuesta) {
  if (!guestId) {
    alert('No se encontró el identificador del invitado. Verifica el link de tu invitación.');
    return;
  }

  const comentarios = document.getElementById('modal-comments').value.trim();

  const payload = {
    confirmo:       true,
    asistira:       respuesta === 'confirma',
    comentarios:    comentarios || null,
    confirmado_el:  new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString().replace('Z', '-06:00'),
  };

  try {
    const nombre = nombreMostrado || 'Invitado';

    // ── SUPABASE UPDATE ──
    const res = await fetch(`${SUPABASE_URL}/invitados?id=eq.${guestId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':  'application/json',
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify(payload),
    });

    // ── NTFY NOTIFICATION ──
    const asiste = respuesta === 'confirma';
    await fetch('https://ntfy.sh/Wedding_JC_Gabriela', {
      method: 'POST',
      headers: {
        'Title':    asiste ? 'Confirmacion de asistencia' : 'No podra asistir',
        'Priority': asiste ? 'default' : 'low',
      },
      body: asiste
        ? `Confirma: ${nombre}. ${tickets ? `Pases: ${tickets}.` : ''} ${comentarios ? `Comentario: ${comentarios}` : ''}`.trim()
        : `No asistira: ${nombre}. ${comentarios ? `Comentario: ${comentarios}` : ''}`.trim(),
    });

    document.getElementById('rsvp-modal').style.display = 'none';
    document.body.style.overflow = '';

    if (res.ok) {
      const mensaje = respuesta === 'confirma'
        ? (esPlural
            ? `¡Gracias, ${nombre}! Su asistencia ha sido confirmada. 🎉`
            : `¡Gracias, ${nombre}! Tu asistencia ha sido confirmada. 🎉`)
        : (esPlural
            ? `Gracias por avisarnos, ${nombre}. ¡Los tendremos en nuestros corazones!`
            : `Gracias por avisarnos, ${nombre}. ¡Te tendremos en nuestros corazones!`);
      alert(mensaje);
    } else {
      const err = await res.json();
      console.error('Supabase error:', err);
      alert('Hubo un problema al guardar tu confirmación. Por favor intenta de nuevo.');
    }
  } catch (e) {
    console.error('Error de red:', e);
    alert('No se pudo conectar. Verifica tu conexión e intenta de nuevo.');
  }
}