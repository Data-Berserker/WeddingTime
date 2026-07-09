var SUPABASE_URL = 'https://zbwndyeozrpjrmltsdri.supabase.co/rest/v1';
var SUPABASE_ANON_KEY = 'sb_publishable_61Gn8It1YJxEXel2Z_xLqw_ScRM8tC4';
var NTFY_TOPIC = 'Wedding_JC_Gabriela';

var currentLang = 'es';
var languageChangeCallbacks = [];

var TRANSLATIONS = {
  es: {
    'nav.openMenu': 'Abrir menú',
    'nav.sections': 'Secciones de la invitación',
    'nav.home': 'Inicio',
    'nav.rsvp': 'Confirmar asistencia',
    'nav.itinerary': 'Itinerario',
    'nav.dresscode': 'Código de vestimenta',
    'nav.gifts': 'Mesa de regalos',
    'nav.gallery': 'Galería',
    'nav.guestbook': 'Libro de firmas',
    'nav.lang': 'Idioma',
    'hero.alt': 'Gabriela y Juan Carlos',
    'hero.date': '07 DE NOVIEMBRE DEL 2026',
    'countdown.days': 'Día(s)',
    'countdown.hours': 'Hora(s)',
    'countdown.minutes': 'Minuto(s)',
    'countdown.seconds': 'Segundo(s)',
    'rsvp.inviteDefault': 'Nos complace invitarte a nuestra boda',
    'rsvp.inviteSingle': '{name}, nos complace invitarte a nuestra boda',
    'rsvp.invitePlural': '{name}, nos complace invitarlos a nuestra boda',
    'rsvp.btn': 'Confirma tu asistencia',
    'parents.title': 'Nuestros Padres',
    'parents.brideParents': 'Padres de La Novia',
    'parents.groomParents': 'Padres del Novio',
    'padrinos.title': 'Padrinos',
    'photo.aria': 'Galería de fotos',
    'itinerary.title': 'Itinerario',
    'itinerary.ceremony': 'Ceremonia Religiosa',
    'itinerary.reception': 'Recepción',
    'itinerary.entrance': 'Entrada de los Novios',
    'itinerary.dinner': 'Comida',
    'itinerary.waltz': 'Vals',
    'itinerary.end': 'Fin del Evento',
    'itinerary.viewMap': 'Ver mapa',
    'dresscode.title': 'Código de Vestimenta',
    'dresscode.subtitle': 'Etiqueta Formal',
    'dresscode.women': 'Mujeres',
    'dresscode.womenText': 'Vestido Largo Formal.',
    'dresscode.womenNote': '(No Blanco, Colores Claros o Rojo)',
    'dresscode.men': 'Hombres',
    'dresscode.menText': 'Traje Completo<br>Formal.',
    'dresscode.menNote': '(No blanco, colores<br>claros o estampados)',
    'dresscode.pinterest': 'Ver inspiración en Pinterest',
    'photo.couple': 'Foto de la pareja',
    'adults.title': 'Solo Adultos',
    'adults.text': 'Aunque amamos a sus pequeños, hagan de este día una cita y pasémosla increíble.',
    'gifts.title': 'Mesa de Regalos',
    'gifts.text': 'Su presencia es el mejor regalo que podríamos recibir. Sin embargo, si desean tener un detalle con nosotros, agradeceremos que sea una aportación económica para nuestra luna de miel, será muy apreciada.',
    'gifts.clabe': 'CLABE',
    'gifts.bank': 'Banco',
    'gifts.holder': 'Titular',
    'gallery.title': 'Galería',
    'gallery.prev': 'Foto anterior',
    'gallery.next': 'Foto siguiente',
    'guestbook.title': 'Libro de Firmas',
    'guestbook.nameLabel': 'Tu Nombre*',
    'guestbook.messageLabel': 'Dedícanos unas lindas palabras',
    'guestbook.placeholder': 'Escribe aquí*',
    'guestbook.submit': 'Firmar',
    'guestbook.success': '¡Gracias por dejar tu mensaje! Con mucho cariño, Gabriela y Juan Carlos.',
    'signatures.title': 'Palabras de nuestros invitados',
    'signatures.aria': 'Mensajes de invitados',
    'signatures.empty': 'Aún no hay mensajes en nuestro libro. ¡Sé el primero en dejar tus palabras!',
    'signatures.loadError': 'No pudimos cargar los mensajes por ahora.',
    'signatures.anonymous': 'Anónimo',
    'rsvp.modal.close': 'Cerrar',
    'rsvp.modal.label': 'Confirmación de asistencia',
    'rsvp.modal.guest': 'Invitado',
    'rsvp.modal.comments': 'Comentarios',
    'rsvp.modal.optional': '(opcional)',
    'rsvp.modal.commentsPlaceholder': 'Restricciones alimentarias, mensaje para los novios...',
    'rsvp.modal.confirm': 'Confirmo asistencia',
    'rsvp.modal.confirmPlural': 'Confirmamos asistencia',
    'rsvp.modal.customCount': 'Confirmar cantidad diferente de invitados',
    'rsvp.modal.decline': 'No podré asistir',
    'rsvp.modal.declinePlural': 'No podremos asistir',
    'rsvp.modal.howMany': '¿Cuántos invitados asistirán?',
    'rsvp.modal.confirmCustom': 'Confirmar asistencia',
    'rsvp.modal.back': 'Regresar',
    'rsvp.modal.guestCountAria': 'Cantidad de invitados',
    'rsvp.modal.guestCount.one': '1 invitado',
    'rsvp.modal.guestCount.many': '{n} invitados',
    'rsvp.modal.tickets.one': '1 lugar reservado',
    'rsvp.modal.tickets.many': '{n} lugares reservados',
    'rsvp.alert.noId': 'No se encontró el identificador del invitado. Verifica el link de tu invitación.',
    'rsvp.alert.saveError': 'Hubo un problema al guardar tu confirmación. Por favor intenta de nuevo.',
    'rsvp.alert.networkError': 'No se pudo conectar. Verifica tu conexión e intenta de nuevo.',
    'rsvp.alert.guestbookError': 'No se pudo guardar tu mensaje. Por favor intenta de nuevo.',
    'rsvp.success.guestCount.one': '1 invitado',
    'rsvp.success.guestCount.many': '{n} invitados',
    'rsvp.success.confirmSingle': '¡Gracias, {name}! Tu asistencia ha sido confirmada para {count}.',
    'rsvp.success.confirmPlural': '¡Gracias, {name}! Su asistencia ha sido confirmada para {count}.',
    'rsvp.success.declineSingle': 'Gracias por avisarnos, {name}. ¡Te tendremos en nuestros corazones!',
    'rsvp.success.declinePlural': 'Gracias por avisarnos, {name}. ¡Los tendremos en nuestros corazones!'
  },
  en: {
    'nav.openMenu': 'Open menu',
    'nav.sections': 'Invitation sections',
    'nav.home': 'Home',
    'nav.rsvp': 'RSVP',
    'nav.itinerary': 'Itinerary',
    'nav.dresscode': 'Dress code',
    'nav.gifts': 'Gift registry',
    'nav.gallery': 'Gallery',
    'nav.guestbook': 'Guestbook',
    'nav.lang': 'Language',
    'hero.alt': 'Gabriela and Juan Carlos',
    'hero.date': 'NOVEMBER 7, 2026',
    'countdown.days': 'Day(s)',
    'countdown.hours': 'Hour(s)',
    'countdown.minutes': 'Minute(s)',
    'countdown.seconds': 'Second(s)',
    'rsvp.inviteDefault': 'We are pleased to invite you to our wedding',
    'rsvp.inviteSingle': '{name}, we are pleased to invite you to our wedding',
    'rsvp.invitePlural': '{name}, we are pleased to invite you to our wedding',
    'rsvp.btn': 'Confirm your attendance',
    'parents.title': 'Our Parents',
    'parents.brideParents': "Bride's Parents",
    'parents.groomParents': "Groom's Parents",
    'padrinos.title': 'Godparents',
    'photo.aria': 'Photo gallery',
    'itinerary.title': 'Itinerary',
    'itinerary.ceremony': 'Religious Ceremony',
    'itinerary.reception': 'Reception',
    'itinerary.entrance': "Couple's Entrance",
    'itinerary.dinner': 'Dinner',
    'itinerary.waltz': 'First Dance',
    'itinerary.end': 'End of the Event',
    'itinerary.viewMap': 'View map',
    'dresscode.title': 'Dress Code',
    'dresscode.subtitle': 'Formal Attire',
    'dresscode.women': 'Women',
    'dresscode.womenText': 'Formal long dress.',
    'dresscode.womenNote': '(No white, light colors, or red)',
    'dresscode.men': 'Men',
    'dresscode.menText': 'Full<br>formal suit.',
    'dresscode.menNote': '(No white, light colors,<br>or patterns)',
    'dresscode.pinterest': 'View inspiration on Pinterest',
    'photo.couple': 'Photo of the couple',
    'adults.title': 'Adults Only',
    'adults.text': 'Although we adore your little ones, please make this a date night and let\'s have an incredible time together.',
    'gifts.title': 'Gift Registry',
    'gifts.text': 'Your presence is the greatest gift we could receive. However, if you wish to give us a gift, we would appreciate a monetary contribution toward our honeymoon.',
    'gifts.clabe': 'CLABE',
    'gifts.bank': 'Bank',
    'gifts.holder': 'Account holder',
    'gallery.title': 'Gallery',
    'gallery.prev': 'Previous photo',
    'gallery.next': 'Next photo',
    'guestbook.title': 'Guestbook',
    'guestbook.nameLabel': 'Your Name*',
    'guestbook.messageLabel': 'Share some kind words with us',
    'guestbook.placeholder': 'Write here*',
    'guestbook.submit': 'Sign',
    'guestbook.success': 'Thank you for your message! With love, Gabriela and Juan Carlos.',
    'signatures.title': 'Words from our guests',
    'signatures.aria': 'Guest messages',
    'signatures.empty': 'There are no messages in our guestbook yet. Be the first to leave your words!',
    'signatures.loadError': 'We couldn\'t load the messages right now.',
    'signatures.anonymous': 'Anonymous',
    'rsvp.modal.close': 'Close',
    'rsvp.modal.label': 'Attendance confirmation',
    'rsvp.modal.guest': 'Guest',
    'rsvp.modal.comments': 'Comments',
    'rsvp.modal.optional': '(optional)',
    'rsvp.modal.commentsPlaceholder': 'Dietary restrictions, message for the couple...',
    'rsvp.modal.confirm': 'I will attend',
    'rsvp.modal.confirmPlural': 'We will attend',
    'rsvp.modal.customCount': 'Confirm a different number of guests',
    'rsvp.modal.decline': 'I won\'t be able to attend',
    'rsvp.modal.declinePlural': 'We won\'t be able to attend',
    'rsvp.modal.howMany': 'How many guests will attend?',
    'rsvp.modal.confirmCustom': 'Confirm attendance',
    'rsvp.modal.back': 'Go back',
    'rsvp.modal.guestCountAria': 'Number of guests',
    'rsvp.modal.guestCount.one': '1 guest',
    'rsvp.modal.guestCount.many': '{n} guests',
    'rsvp.modal.tickets.one': '1 seat reserved',
    'rsvp.modal.tickets.many': '{n} seats reserved',
    'rsvp.alert.noId': 'Guest identifier not found. Please check your invitation link.',
    'rsvp.alert.saveError': 'There was a problem saving your confirmation. Please try again.',
    'rsvp.alert.networkError': 'Could not connect. Check your connection and try again.',
    'rsvp.alert.guestbookError': 'Could not save your message. Please try again.',
    'rsvp.success.guestCount.one': '1 guest',
    'rsvp.success.guestCount.many': '{n} guests',
    'rsvp.success.confirmSingle': 'Thank you, {name}! Your attendance has been confirmed for {count}.',
    'rsvp.success.confirmPlural': 'Thank you, {name}! Your attendance has been confirmed for {count}.',
    'rsvp.success.declineSingle': 'Thank you for letting us know, {name}. You will be in our hearts!',
    'rsvp.success.declinePlural': 'Thank you for letting us know, {name}. You will be in our hearts!'
  }
};

function t(key, vars) {
  var str = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
    TRANSLATIONS.es[key] ||
    key;

  if (vars) {
    Object.keys(vars).forEach(function (varKey) {
      str = str.replace('{' + varKey + '}', vars[varKey]);
    });
  }

  return str;
}

function getLang() {
  return currentLang;
}

function getNameConnector() {
  return currentLang === 'en' ? ' and ' : ' y ';
}

function onLanguageChange(callback) {
  languageChangeCallbacks.push(callback);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    el.alt = t(el.getAttribute('data-i18n-alt'));
  });
}

function updateLangToggle() {
  var toggle = document.getElementById('lang-toggle');
  if (!toggle) {
    return;
  }

  toggle.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
    var isActive = btn.getAttribute('data-lang') === currentLang;
    btn.classList.toggle('lang-toggle-btn--active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang] || lang === currentLang) {
    return;
  }

  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('wedding-lang', lang);
  applyTranslations();
  updateLangToggle();

  languageChangeCallbacks.forEach(function (callback) {
    callback(lang);
  });
}

function initI18n() {
  var params = new URLSearchParams(window.location.search);
  var savedLang = localStorage.getItem('wedding-lang');
  var initialLang = params.get('lang') || savedLang || 'es';

  if (!TRANSLATIONS[initialLang]) {
    initialLang = 'es';
  }

  currentLang = initialLang;
  document.documentElement.lang = initialLang;
  applyTranslations();
  updateLangToggle();

  var toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-toggle-btn');
      if (btn) {
        setLanguage(btn.getAttribute('data-lang'));
      }
    });
  }
}

(function () {
  'use strict';

  // Misa: 7 de noviembre de 2026, 13:00 hrs (Aguascalientes, hora de México)
  var WEDDING_DATE = new Date('2026-11-07T13:00:00-06:00');

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');

  function pad(value, length) {
    return String(value).padStart(length, '0');
  }

  function updateCountdown() {
    var now = Date.now();
    var diff = WEDDING_DATE.getTime() - now;

    var dias = document.getElementById('cd-dias');
    var horas = document.getElementById('cd-horas');
    var min = document.getElementById('cd-min');
    var seg = document.getElementById('cd-seg');

    if (diff <= 0) {
      dias.textContent = '000';
      horas.textContent = '00';
      min.textContent = '00';
      seg.textContent = '00';
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    dias.textContent = pad(days, 3);
    horas.textContent = pad(hours, 2);
    min.textContent = pad(minutes, 2);
    seg.textContent = pad(seconds, 2);
  }

  function toggleNav() {
    var isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeNav() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function setActiveNavLink() {
    var scrollPos = window.scrollY + navbar.offsetHeight + 40;
    var sections = document.querySelectorAll('main section[id]');
    var currentId = 'inicio';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + currentId);
    });
  }

  window.addEventListener('scroll', setActiveNavLink);

  navToggle.addEventListener('click', toggleNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);
  setActiveNavLink();

  initI18n();
  initGallery();
  initGuestbook();
  initRsvp();
})();

function galleryImagePath(filename) {
  return 'Assets/images/2beUsed/' + filename.replace(/&/g, '%26');
}

function initGallery() {
  var GALLERY_FILES = [
    'GABY&CARLOS.jpg',
    'GABY&CARLOS41.jpg',
    'GABY&CARLOS42.jpg',
    'GABY&CARLOS61.jpg',
    'GABY&CARLOS71.jpg',
    'GABY&CARLOS79.jpg',
    'GABY&CARLOS82.jpg',
    'GABY&CARLOS921.jpg',
    'GABY&CARLOS95.jpg'
  ];

  var trackEl = document.getElementById('gallery-track');
  var viewportEl = document.getElementById('gallery-viewport');
  var currentEl = document.getElementById('gallery-current');
  var totalEl = document.getElementById('gallery-total');
  var progressEl = document.getElementById('gallery-progress');
  var progressBar = document.getElementById('gallery-progressbar');
  var prevBtn = document.getElementById('gallery-prev');
  var nextBtn = document.getElementById('gallery-next');

  if (!trackEl || !viewportEl || GALLERY_FILES.length === 0) {
    return;
  }

  var index = 0;
  var slides = [];
  var isAnimating = false;

  totalEl.textContent = GALLERY_FILES.length;

  GALLERY_FILES.forEach(function (file, i) {
    var slide = document.createElement('div');
    slide.className = 'gallery-slide';
    slide.dataset.index = String(i);

    var img = document.createElement('img');
    img.src = galleryImagePath(file);
    img.alt = t('hero.alt');
    img.loading = i === 0 ? 'eager' : 'lazy';
    img.draggable = false;

    slide.appendChild(img);
    slide.addEventListener('click', function () {
      if (i !== index) {
        goToSlide(i);
      }
    });

    trackEl.appendChild(slide);
    slides.push(slide);
    bindSlideImage(img);
  });

  function updateUI() {
    currentEl.textContent = index + 1;
    var pct = ((index + 1) / GALLERY_FILES.length) * 100;
    progressEl.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(pct));
  }

  function updateSlideStates() {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === index);
      slide.classList.toggle('is-adjacent', i === index - 1 || i === index + 1);
    });
  }

  function getSlideOffset(slide) {
    return slide.offsetLeft + slide.offsetWidth / 2 - viewportEl.offsetWidth / 2;
  }

  function refreshGalleryPosition() {
    if (!slides.length) {
      return;
    }

    updateSlideStates();
    updateUI();
    trackEl.style.transition = 'none';
    trackEl.style.transform = 'translateX(-' + getSlideOffset(slides[index]) + 'px)';
  }

  function goToSlide(nextIndex, animate) {
    if (isAnimating) {
      return;
    }

    nextIndex = (nextIndex + GALLERY_FILES.length) % GALLERY_FILES.length;
    if (nextIndex === index && animate !== false) {
      return;
    }

    index = nextIndex;
    updateSlideStates();
    updateUI();

    trackEl.style.transition = animate === false
      ? 'none'
      : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

    trackEl.style.transform = 'translateX(-' + getSlideOffset(slides[index]) + 'px)';

    if (animate !== false) {
      isAnimating = true;
      setTimeout(function () {
        isAnimating = false;
      }, 500);
    }
  }

  function bindSlideImage(img) {
    function handleReady() {
      refreshGalleryPosition();
    }

    img.addEventListener('load', handleReady);
    if (img.complete) {
      handleReady();
    }
  }

  prevBtn.addEventListener('click', function () {
    goToSlide(index - 1);
  });

  nextBtn.addEventListener('click', function () {
    goToSlide(index + 1);
  });

  document.addEventListener('keydown', function (e) {
    var gallerySection = document.getElementById('galeria');
    var rect = gallerySection.getBoundingClientRect();
    var inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inView) {
      return;
    }

    if (e.key === 'ArrowLeft') {
      goToSlide(index - 1);
    }
    if (e.key === 'ArrowRight') {
      goToSlide(index + 1);
    }
  });

  var touchStartX = 0;
  var touchStartY = 0;

  viewportEl.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  viewportEl.addEventListener('touchend', function (e) {
    var diffX = e.changedTouches[0].screenX - touchStartX;
    var diffY = e.changedTouches[0].screenY - touchStartY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      goToSlide(diffX > 0 ? index - 1 : index + 1);
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    refreshGalleryPosition();
  });

  window.addEventListener('load', function () {
    refreshGalleryPosition();
  });

  if (typeof ResizeObserver !== 'undefined') {
    var galleryResizeObserver = new ResizeObserver(function () {
      refreshGalleryPosition();
    });
    galleryResizeObserver.observe(viewportEl);
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      refreshGalleryPosition();
    });
  });

  onLanguageChange(function () {
    slides.forEach(function (slide) {
      var img = slide.querySelector('img');
      if (img) {
        img.alt = t('hero.alt');
      }
    });
  });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function supabaseHeaders() {
  return {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
  };
}

function loadGuestbookMessages() {
  var listEl = document.getElementById('signatures-list');
  var emptyEl = document.getElementById('signatures-empty');

  if (!listEl) {
    return;
  }

  var params = new URLSearchParams({
    select: '*',
    order: 'created_at.asc'
  });

  fetch(SUPABASE_URL + '/Messages?' + params.toString(), {
    method: 'GET',
    headers: Object.assign({
      'Accept': 'application/json'
    }, supabaseHeaders())
  })
    .then(function (res) {
      if (!res.ok) {
        return res.text().then(function (body) {
          console.error('Supabase GET error:', res.status, body);
          throw new Error('load_failed');
        });
      }
      return res.json();
    })
    .then(function (messages) {
      listEl.innerHTML = '';

      if (!messages.length) {
        if (emptyEl) {
          emptyEl.textContent = t('signatures.empty');
          emptyEl.hidden = false;
        }
        return;
      }

      if (emptyEl) {
        emptyEl.hidden = true;
      }

      messages.forEach(function (entry) {
        var figure = document.createElement('figure');
        figure.className = 'signature-entry';
        figure.setAttribute('role', 'listitem');

        figure.innerHTML =
          '<blockquote class="signature-quote">' +
            '<span class="signature-mark" aria-hidden="true">“</span>' +
            escapeHtml(entry.message || '') +
          '</blockquote>' +
          '<figcaption class="signature-author">' + escapeHtml(entry.from || t('signatures.anonymous')) + '</figcaption>';

        listEl.appendChild(figure);
      });
    })
    .catch(function (e) {
      console.error('Error al cargar mensajes:', e);
      if (emptyEl) {
        emptyEl.textContent = t('signatures.loadError');
        emptyEl.hidden = false;
      }
    });
}

function initGuestbook() {
  var form = document.getElementById('guestbook-form');
  var successEl = document.getElementById('guestbook-success');
  var submitBtn = form ? form.querySelector('.guestbook-submit') : null;

  loadGuestbookMessages();

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput = document.getElementById('guestbook-name');
    var messageInput = document.getElementById('guestbook-message');
    var name = nameInput.value.trim();
    var message = messageInput.value.trim();

    if (!name || !message) {
      form.reportValidity();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
    }

    fetch(SUPABASE_URL + '/Messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        from: name,
        message: message
      })
    })
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (err) {
            console.error('Supabase error:', err);
            throw new Error('save_failed');
          });
        }

        var preview = message.length > 120 ? message.slice(0, 117) + '...' : message;

        return fetch('https://ntfy.sh/' + NTFY_TOPIC, {
          method: 'POST',
          headers: {
            'Title': 'Nuevo mensaje en el libro de firmas',
            'Priority': 'default',
            'Tags': 'memo,pencil'
          },
          body: name + ' dejó un mensaje: "' + preview + '"'
        }).catch(function (e) {
          console.error('ntfy error:', e);
        });
      })
      .then(function () {
        form.hidden = true;
        successEl.hidden = false;
        loadGuestbookMessages();
      })
      .catch(function (e) {
        console.error('Error de red:', e);
        window.alert(t('rsvp.alert.guestbookError'));
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
        }
      });
  });

  onLanguageChange(function () {
    loadGuestbookMessages();
  });
}

function initRsvp() {
  var params = new URLSearchParams(window.location.search);
  var guestId = params.get('id') ? decodeURIComponent(params.get('id')) : null;
  var invitado1 = params.get('invitado1') ? decodeURIComponent(params.get('invitado1')) : null;
  var invitado2 = params.get('invitado2') ? decodeURIComponent(params.get('invitado2')) : null;
  var ticketsParam = params.get('tickets') ? parseInt(params.get('tickets'), 10) : null;
  var maxTickets = ticketsParam && ticketsParam > 0 ? ticketsParam : 1;

  var nombreMostrado = null;

  function rebuildDisplayName() {
    if (!invitado1) {
      nombreMostrado = null;
      return;
    }

    nombreMostrado = invitado2
      ? invitado1 + getNameConnector() + invitado2
      : invitado1;
  }

  rebuildDisplayName();
  var esPlural = !!invitado2;

  var modal = document.getElementById('rsvp-modal');
  var rsvpBtn = document.getElementById('rsvp-btn');
  var rsvpInvite = document.getElementById('rsvp-invite');
  var closeBtn = document.getElementById('rsvp-modal-close');
  var confirmBtn = document.getElementById('modal-confirm-btn');
  var customCountBtn = document.getElementById('modal-custom-count-btn');
  var declineBtn = document.getElementById('modal-decline-btn');
  var confirmCustomBtn = document.getElementById('modal-confirm-custom-btn');
  var backBtn = document.getElementById('modal-back-btn');
  var stepMain = document.getElementById('rsvp-step-main');
  var stepCount = document.getElementById('rsvp-step-count');
  var guestNameEl = document.getElementById('modal-guest-name');
  var ticketsRow = document.getElementById('modal-tickets-row');
  var ticketsVal = document.getElementById('modal-tickets-value');
  var commentsEl = document.getElementById('modal-comments');
  var countSlider = document.getElementById('modal-count-slider');
  var countDisplay = document.getElementById('modal-count-display');
  var countTicks = document.getElementById('modal-count-ticks');

  if (!modal || !rsvpBtn) {
    return;
  }

  function updateInviteText() {
    if (!rsvpInvite) {
      return;
    }

    if (nombreMostrado) {
      rsvpInvite.textContent = t(esPlural ? 'rsvp.invitePlural' : 'rsvp.inviteSingle', {
        name: nombreMostrado
      });
    } else {
      rsvpInvite.textContent = t('rsvp.inviteDefault');
    }
  }

  function formatGuestCount(count) {
    return count === 1
      ? t('rsvp.modal.guestCount.one')
      : t('rsvp.modal.guestCount.many', { n: count });
  }

  function formatTicketsText(count) {
    return count === 1
      ? t('rsvp.modal.tickets.one')
      : t('rsvp.modal.tickets.many', { n: count });
  }

  function formatSuccessGuestCount(count) {
    return count === 1
      ? t('rsvp.success.guestCount.one')
      : t('rsvp.success.guestCount.many', { n: count });
  }

  function updateModalLabels() {
    if (confirmBtn) {
      confirmBtn.textContent = t(esPlural ? 'rsvp.modal.confirmPlural' : 'rsvp.modal.confirm');
    }

    if (confirmCustomBtn) {
      confirmCustomBtn.textContent = t(esPlural ? 'rsvp.modal.confirmPlural' : 'rsvp.modal.confirm');
    }

    if (declineBtn) {
      declineBtn.textContent = t(esPlural ? 'rsvp.modal.declinePlural' : 'rsvp.modal.decline');
    }

    if (countSlider) {
      countSlider.setAttribute('aria-label', t('rsvp.modal.guestCountAria'));
    }

    if (countDisplay && countSlider) {
      updateCountDisplay(parseInt(countSlider.value, 10));
    }
  }

  updateInviteText();
  updateModalLabels();

  function updateCountDisplay(count) {
    if (!countDisplay) {
      return;
    }

    countDisplay.textContent = formatGuestCount(count);

    if (!countTicks) {
      return;
    }

    var tickEls = countTicks.querySelectorAll('.rsvp-count-tick');
    tickEls.forEach(function (tick) {
      var value = parseInt(tick.getAttribute('data-value'), 10);
      tick.classList.toggle('rsvp-count-tick--active', value === count);
    });
  }

  function buildCountTicks() {
    if (!countTicks || !countSlider) {
      return;
    }

    countTicks.innerHTML = '';
    countSlider.max = String(maxTickets);
    countSlider.min = '1';
    countSlider.value = '1';

    for (var i = 1; i <= maxTickets; i++) {
      var tick = document.createElement('span');
      tick.className = 'rsvp-count-tick' + (i === 1 ? ' rsvp-count-tick--active' : '');
      tick.setAttribute('data-value', String(i));
      tick.textContent = String(i);
      countTicks.appendChild(tick);
    }

    updateCountDisplay(1);
  }

  function showMainStep() {
    if (stepMain) {
      stepMain.hidden = false;
      stepMain.classList.add('rsvp-modal-step--active');
    }
    if (stepCount) {
      stepCount.hidden = true;
      stepCount.classList.remove('rsvp-modal-step--active');
    }
  }

  function showCountStep() {
    if (!stepMain || !stepCount) {
      return;
    }

    buildCountTicks();
    stepMain.hidden = true;
    stepMain.classList.remove('rsvp-modal-step--active');
    stepCount.hidden = false;
    stepCount.classList.add('rsvp-modal-step--active');

    if (confirmCustomBtn) {
      confirmCustomBtn.textContent = t(esPlural ? 'rsvp.modal.confirmPlural' : 'rsvp.modal.confirm');
    }
  }

  function openRsvpModal() {
    guestNameEl.textContent = nombreMostrado || t('rsvp.modal.guest');
    showMainStep();

    if (ticketsParam && ticketsParam > 0 && ticketsRow && ticketsVal) {
      ticketsVal.textContent = formatTicketsText(maxTickets);
      ticketsRow.hidden = false;
    } else if (ticketsRow) {
      ticketsRow.hidden = true;
    }

    updateModalLabels();

    if (customCountBtn) {
      customCountBtn.hidden = maxTickets <= 1;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    commentsEl.value = '';
    commentsEl.focus();
  }

  function closeRsvpModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    showMainStep();
  }

  function showMessage(message) {
    window.alert(message);
  }

  function setButtonsDisabled(disabled) {
    [confirmBtn, customCountBtn, declineBtn, confirmCustomBtn, backBtn].forEach(function (btn) {
      if (btn) {
        btn.disabled = disabled;
      }
    });
  }

  function submitRsvp(respuesta, pasesConfirmados) {
    if (!guestId) {
      showMessage(t('rsvp.alert.noId'));
      return;
    }

    var comentarios = commentsEl.value.trim();
    var nombre = nombreMostrado || t('rsvp.modal.guest');
    var asiste = respuesta === 'confirma';
    var pases = asiste ? (pasesConfirmados || maxTickets) : 0;
    var payload = {
      confirmo: true,
      asistira: asiste,
      pases_confirmados: pases,
      comentarios: comentarios || null,
      confirmado_el: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString().replace('Z', '-06:00')
    };

    setButtonsDisabled(true);

    fetch(SUPABASE_URL + '/invitados?id=eq.' + guestId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        var ntfyBody = asiste
          ? nombre + ' confirmó asistencia. Pases: ' + pases + '.' + (comentarios ? ' Comentario: "' + comentarios + '"' : '')
          : nombre + ' no podrá asistir.' + (comentarios ? ' Comentario: "' + comentarios + '"' : '');

        return fetch('https://ntfy.sh/' + NTFY_TOPIC, {
          method: 'POST',
          headers: {
            'Title': asiste ? 'Confirmación de asistencia' : 'No podrá asistir',
            'Priority': asiste ? 'default' : 'low',
            'Tags': asiste ? 'white_check_mark,couple' : 'x,couple'
          },
          body: ntfyBody.trim()
        }).then(function () {
          return res;
        });
      })
      .then(function (res) {
        closeRsvpModal();

        if (res.ok) {
          if (asiste) {
            var pasesMsg = formatSuccessGuestCount(pases);
            showMessage(t(esPlural ? 'rsvp.success.confirmPlural' : 'rsvp.success.confirmSingle', {
              name: nombre,
              count: pasesMsg
            }));
          } else {
            showMessage(t(esPlural ? 'rsvp.success.declinePlural' : 'rsvp.success.declineSingle', {
              name: nombre
            }));
          }
        } else {
          return res.json().then(function (err) {
            console.error('Supabase error:', err);
            showMessage(t('rsvp.alert.saveError'));
          });
        }
      })
      .catch(function (e) {
        console.error('Error de red:', e);
        showMessage(t('rsvp.alert.networkError'));
      })
      .finally(function () {
        setButtonsDisabled(false);
      });
  }

  rsvpBtn.addEventListener('click', openRsvpModal);
  closeBtn.addEventListener('click', closeRsvpModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeRsvpModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) {
      if (stepCount && !stepCount.hidden) {
        showMainStep();
      } else {
        closeRsvpModal();
      }
    }
  });

  if (countSlider) {
    countSlider.addEventListener('input', function () {
      updateCountDisplay(parseInt(countSlider.value, 10));
    });
  }

  confirmBtn.addEventListener('click', function () {
    submitRsvp('confirma', maxTickets);
  });

  if (customCountBtn) {
    customCountBtn.addEventListener('click', showCountStep);
  }

  if (backBtn) {
    backBtn.addEventListener('click', showMainStep);
  }

  if (confirmCustomBtn && countSlider) {
    confirmCustomBtn.addEventListener('click', function () {
      submitRsvp('confirma', parseInt(countSlider.value, 10));
    });
  }

  declineBtn.addEventListener('click', function () {
    submitRsvp('ausencia', 0);
  });

  onLanguageChange(function () {
    rebuildDisplayName();
    updateInviteText();
    updateModalLabels();

    if (!modal.hidden && ticketsParam && ticketsParam > 0 && ticketsVal) {
      ticketsVal.textContent = formatTicketsText(maxTickets);
    }

    if (!modal.hidden && guestNameEl) {
      guestNameEl.textContent = nombreMostrado || t('rsvp.modal.guest');
    }
  });
}
