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

  initGallery();
  initGuestbook();
})();

function galleryImagePath(filename) {
  return 'Assets/images/' + filename.replace(/&/g, '%26');
}

function initGallery() {
  var GALLERY_FILES = [
    'GABY&CARLOS.jpg', 'GABY&CARLOS2.jpg', 'GABY&CARLOS4.jpg', 'GABY&CARLOS5.jpg',
    'GABY&CARLOS6.jpg', 'GABY&CARLOS7.jpg', 'GABY&CARLOS8.jpg', 'GABY&CARLOS9.jpg',
    'GABY&CARLOS10.jpg', 'GABY&CARLOS11.jpg', 'GABY&CARLOS13.jpg', 'GABY&CARLOS14.jpg',
    'GABY&CARLOS15.jpg', 'GABY&CARLOS16.jpg', 'GABY&CARLOS17.jpg', 'GABY&CARLOS18.jpg',
    'GABY&CARLOS19.jpg', 'GABY&CARLOS20.jpg', 'GABY&CARLOS21.jpg', 'GABY&CARLOS22.jpg',
    'GABY&CARLOS23.jpg', 'GABY&CARLOS24.jpg', 'GABY&CARLOS25.jpg', 'GABY&CARLOS26.jpg',
    'GABY&CARLOS27.jpg', 'GABY&CARLOS28.jpg', 'GABY&CARLOS29.jpg', 'GABY&CARLOS30.jpg',
    'GABY&CARLOS31.jpg', 'GABY&CARLOS32.jpg', 'GABY&CARLOS33.jpg', 'GABY&CARLOS34.jpg',
    'GABY&CARLOS35.jpg', 'GABY&CARLOS36.jpg', 'GABY&CARLOS37.jpg', 'GABY&CARLOS38.jpg',
    'GABY&CARLOS39.jpg', 'GABY&CARLOS40.jpg', 'GABY&CARLOS41.jpg', 'GABY&CARLOS42.jpg',
    'GABY&CARLOS43.jpg', 'GABY&CARLOS44.jpg', 'GABY&CARLOS45.jpg', 'GABY&CARLOS46.jpg',
    'GABY&CARLOS47.jpg', 'GABY&CARLOS48.jpg', 'GABY&CARLOS49.jpg', 'GABY&CARLOS50.jpg',
    'GABY&CARLOS51.jpg', 'GABY&CARLOS52.jpg', 'GABY&CARLOS53.jpg', 'GABY&CARLOS54.jpg',
    'GABY&CARLOS55.jpg', 'GABY&CARLOS56.jpg', 'GABY&CARLOS57.jpg', 'GABY&CARLOS58.jpg',
    'GABY&CARLOS59.jpg', 'GABY&CARLOS60.jpg', 'GABY&CARLOS61.jpg', 'GABY&CARLOS62.jpg',
    'GABY&CARLOS63.jpg', 'GABY&CARLOS64.jpg', 'GABY&CARLOS65.jpg', 'GABY&CARLOS66.jpg',
    'GABY&CARLOS67.jpg', 'GABY&CARLOS68.jpg', 'GABY&CARLOS69.jpg', 'GABY&CARLOS70.jpg',
    'GABY&CARLOS71.jpg', 'GABY&CARLOS72.jpg', 'GABY&CARLOS73.jpg', 'GABY&CARLOS74.jpg',
    'GABY&CARLOS75.jpg', 'GABY&CARLOS76.jpg', 'GABY&CARLOS77.jpg', 'GABY&CARLOS78.jpg',
    'GABY&CARLOS79.jpg', 'GABY&CARLOS80.jpg', 'GABY&CARLOS82.jpg', 'GABY&CARLOS83.jpg',
    'GABY&CARLOS84.jpg', 'GABY&CARLOS85.jpg', 'GABY&CARLOS86.jpg', 'GABY&CARLOS87.jpg',
    'GABY&CARLOS88.jpg', 'GABY&CARLOS89.jpg', 'GABY&CARLOS90.jpg', 'GABY&CARLOS91.jpg',
    'GABY&CARLOS92.jpg', 'GABY&CARLOS93.jpg', 'GABY&CARLOS94.jpg', 'GABY&CARLOS95.jpg'
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
    img.alt = 'Gabriela y Juan Carlos';
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.draggable = false;

    slide.appendChild(img);
    slide.addEventListener('click', function () {
      if (i !== index) {
        goToSlide(i);
      }
    });

    trackEl.appendChild(slide);
    slides.push(slide);

    img.addEventListener('load', function () {
      goToSlide(index, false);
    });
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
    goToSlide(index, false);
  });

  goToSlide(0, false);
}

function initGuestbook() {
  var form = document.getElementById('guestbook-form');
  var successEl = document.getElementById('guestbook-success');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput = document.getElementById('guestbook-name');
    var messageInput = document.getElementById('guestbook-message');

    if (!nameInput.value.trim() || !messageInput.value.trim()) {
      form.reportValidity();
      return;
    }

    form.hidden = true;
    successEl.hidden = false;
  });
}
