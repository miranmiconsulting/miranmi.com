
// Scroll progress
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  const p = d.scrollTop / (d.scrollHeight - d.clientHeight);
  document.getElementById('scrollLine').style.width = (p * 100) + '%';
}, { passive: true });

// Nav scroll state
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// Mobile menu
function openMenu() { document.getElementById('mOverlay').classList.add('open'); document.getElementById('mMenu').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { document.getElementById('mOverlay').classList.remove('open'); document.getElementById('mMenu').classList.remove('open'); document.body.style.overflow = ''; }

// Language toggle
function toggleLang() {
  document.body.classList.toggle('lang-es');
  updatePlaceholders();
}
function updatePlaceholders() {
  const es = document.body.classList.contains('lang-es');
  const f = document.getElementById('contactForm');
  if (f) {
    const nameEl = f.querySelector('[name="name"]');
    const bizEl = f.querySelector('[name="business"]');
    const emailEl = f.querySelector('[name="email"]');
    const msgEl = f.querySelector('[name="message"]');
    if (nameEl) nameEl.placeholder = es ? 'Su nombre' : 'Your name';
    if (bizEl) bizEl.placeholder = es ? 'Nombre de empresa' : 'Business name';
    if (emailEl) emailEl.placeholder = es ? 'Su correo electrónico' : 'Your email';
    if (msgEl) msgEl.placeholder = es ? 'Cuéntenos sobre su empresa y cómo podemos ayudar.' : 'Tell us about your business and how we can help.';
  }
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
}, { threshold: 0.01 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));

// Card tilt
document.querySelectorAll('.card, .flip-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.classList.add('tilt-active');
    card.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('tilt-active');
    card.style.transform = '';
  });
});

// Mobile tap-to-expand for hover cards
if (window.matchMedia('(hover: none)').matches) {
  document.querySelectorAll('.flip-card, .service-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });
}

// Mouse follow glow (lighter emerald)
(function() {
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
})();

// Info toggle for bullet items
function toggleInfo(btn) {
  const item = btn.closest('.bullet-item');
  item.classList.toggle('info-open');
}

// Init
updatePlaceholders();

// Cookie banner
(function() {
  const banner = document.getElementById('cookieBanner');
  if (banner && !localStorage.getItem('miranmi_cookies')) {
    setTimeout(() => banner.classList.add('show'), 2000);
  }
})();
function acceptCookies() { localStorage.setItem('miranmi_cookies', 'accepted'); document.getElementById('cookieBanner').classList.remove('show'); }
function declineCookies() { localStorage.setItem('miranmi_cookies', 'declined'); document.getElementById('cookieBanner').classList.remove('show'); }

