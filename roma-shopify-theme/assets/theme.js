// Roma Syrups Theme JS
(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      if (iconOpen)  iconOpen.style.display  = isOpen ? 'none'  : 'block';
      if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
    });

    // Close menu on nav link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        if (iconOpen)  iconOpen.style.display  = 'block';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  }

  // Contact form — show success message
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      // Shopify handles the submission; we just show a visual cue if needed.
      // The form action="/contact#contact_form" with method="post" is native Shopify.
    });
  });
})();
