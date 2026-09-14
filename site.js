const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.setAttribute('aria-hidden', String(!open));
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
}

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('.photo img, .landing-card img, .portrait-hero-image img, .about-image img').forEach(image => {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = 'https://anchorawayphoto.com/images/moguls-banner.jpg';
  });
});

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const message = String(data.get('message') || '').trim();
    const page = form.dataset.page || 'Website';
    const subject = encodeURIComponent(`Photography Inquiry: ${project}`);
    const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${project}\nPage: ${page}\n\nAssignment details:\n${message}`);
    window.location.href = `mailto:AnchorAwayPhoto@gmail.com?subject=${subject}&body=${bodyText}`;
  });
});

const galleryItems = Array.from(document.querySelectorAll('.photo'));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
let activeIndex = 0;

function showLightbox(index) {
  if (!lightbox || !galleryItems.length) return;
  activeIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeIndex];
  const image = item.querySelector('img');
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption || '';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  body.classList.add('lightbox-open');
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  body.classList.remove('lightbox-open');
  lightboxImage.src = '';
  galleryItems[activeIndex]?.focus();
}

if (lightbox) {
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => showLightbox(index));
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showLightbox(index);
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => showLightbox(activeIndex - 1));
  document.getElementById('lightboxNext').addEventListener('click', () => showLightbox(activeIndex + 1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (body.classList.contains('lightbox-open')) closeLightbox();
    if (body.classList.contains('menu-open')) setMenu(false);
  }
  if (body.classList.contains('lightbox-open')) {
    if (event.key === 'ArrowLeft') showLightbox(activeIndex - 1);
    if (event.key === 'ArrowRight') showLightbox(activeIndex + 1);
  }
});
