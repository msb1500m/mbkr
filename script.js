document.addEventListener('DOMContentLoaded', function () {
  // LANGUAGE TOGGLE
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'en';

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    translatePage(currentLang);
    langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
  });

  function translatePage(lang) {
    const translatableElements = document.querySelectorAll('[data-en]');
    translatableElements.forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });
  }



  // FORM HANDLING
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  const messages = {
    en: {
      success: "✅ Message sent successfully!",
      error: "❌ Something went wrong. Please try again.",
      network: "❌ Network error. Please try again later."
    },
    fr: {
      success: "✅ Message envoyé avec succès !",
      error: "❌ Une erreur s'est produite. Veuillez réessayer.",
      network: "❌ Erreur réseau. Veuillez réessayer plus tard."
    }
  };
  

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.textContent = messages[currentLang].success;     
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = messages[currentLang].error;
          status.style.color = "red";
        }
      } catch (error) {
        status.textContent = messages[currentLang].network;
        status.style.color = "red";
      }
    });
  }
});
