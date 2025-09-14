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


document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
      // Optionally, toggle aria‑expanded for accessibility
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
    });

    // Also optionally close the menu when a link is clicked (on mobile)
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        // only close if menu is open
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});




// script.js

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


if (navToggle && navLinks) {
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    // accessibility hint
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Optional: close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// language toggle remains unchanged...
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const currentLang = langToggle.textContent.trim();
    const newLang = currentLang === "FR" ? "EN" : "FR";
    langToggle.textContent = newLang;

    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${newLang.toLowerCase()}`);
    });
  });
}


