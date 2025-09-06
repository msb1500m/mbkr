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
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
