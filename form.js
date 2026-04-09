// Contact form submission (Formspree)
// Replace YOUR_FORM_ID with your Formspree endpoint ID from https://formspree.io
const FORMSPREE_ID = 'xpwrzwqo';

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('button[type="submit"]');
    const es = document.body.classList.contains('lang-es');

    // Disable button and show loading
    btn.disabled = true;
    btn.style.opacity = '0.6';
    status.className = 'form-status';
    status.textContent = es ? 'Enviando...' : 'Sending...';

    try {
      const formData = new FormData(form);
      // Include the Spanish select value if in ES mode
      const esSelect = form.querySelector('[data-lang="es"] select');
      const enSelect = form.querySelector('[data-lang="en"] select');
      if (es && esSelect && esSelect.value) {
        formData.set('support', esSelect.value);
      } else if (!es && enSelect && enSelect.value) {
        formData.set('support', enSelect.value);
      }

      const resp = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        status.className = 'form-status success';
        status.textContent = es
          ? 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.'
          : 'Message sent successfully. We will be in touch soon.';
        form.reset();
      } else {
        const data = await resp.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = es
        ? 'Algo salió mal. Intente de nuevo o envíe un correo a info@miranmi.com.'
        : 'Something went wrong. Please try again or email info@miranmi.com.';
    }

    btn.disabled = false;
    btn.style.opacity = '';
  });
}
