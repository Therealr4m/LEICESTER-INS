'use strict';

// Main navigation and accessible dropdown menus.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.links');
const dropdowns = [...document.querySelectorAll('.nav-dropdown')];

function closeNavigation() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

function closeDropdowns(except = null) {
  dropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.querySelector('button').setAttribute('aria-expanded', 'false');
    dropdown.querySelector('.nav-dropdown-menu').classList.remove('is-open');
  });
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('button');
  const menu = dropdown.querySelector('.nav-dropdown-menu');

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') !== 'true';
    closeDropdowns(dropdown);
    button.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('is-open', isOpen);
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) closeDropdowns();
  if (!event.target.closest('.header')) closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const activeDropdown = document.activeElement.closest('.nav-dropdown');
  closeDropdowns();
  closeNavigation();
  if (activeDropdown) activeDropdown.querySelector('button').focus();
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeDropdowns();
    closeNavigation();
  });
});

// Reset mobile menu state when switching to the desktop layout.
window.matchMedia('(min-width: 721px)').addEventListener('change', (event) => {
  if (event.matches) {
    closeNavigation();
    closeDropdowns();
  }
});

// Photo gallery: native dialog supports Escape and restores keyboard focus.
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const image = lightbox.querySelector('img');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

// Contact form preview. No network submission, database or browser storage.
const enquiryForm = document.querySelector('#enquiry');
if (enquiryForm) {
  const services = {
    'full-loft-insulation': 'Full loft insulation fitting',
    'loft-insulation': 'Full loft insulation fitting',
    'loft-insulation-top-ups': 'Loft insulation top-ups',
    'loft-insulation-removal': 'Loft insulation Removal',
    'rigid-pir-insulation': 'Rigid Pir insulation',
    'loft-draught-proofing': 'Loft draught proofing',
  };
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (services[requestedService]) enquiryForm.elements.service.value = services[requestedService];

  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const result = document.querySelector('#form-result');
    result.textContent = [
      'Enquiry preview — not sent',
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Postcode: ${data.get('postcode')}`,
      `Service: ${data.get('service')}`,
      `Message: ${data.get('message')}`,
      '',
      'This is a private review version. The live enquiry destination has not been connected.',
    ].join('\n');
    result.hidden = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    result.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  });
}
