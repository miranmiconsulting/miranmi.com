// Form submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    try {
      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (resp.ok) {
        status.className = 'form-status success';
        const es = document.body.classList.contains('lang-es');
        status.textContent = es ? 'Mensaje enviado. Nos comunicaremos pronto.' : 'Message sent. We will be in touch soon.';
        form.reset();
      } else { throw new Error(); }
    } catch {
      status.className = 'form-status error';
      status.textContent = 'Something went wrong. Please try again or email info@miranmi.com.';
    }
    btn.disabled = false;
  });
}