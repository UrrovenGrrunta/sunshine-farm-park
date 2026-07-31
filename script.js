'use strict';

const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navList.classList.toggle('nav__list--open', !isOpen);
  });

  navList.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('nav__list--open');
    }
  });
}

document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', String(!isOpen));
    trigger.querySelector('span').textContent = isOpen ? '+' : '−';
    panel.hidden = isOpen;
  });
});

const routeInformation = {
  short: {
    title: 'Meadow Loop',
    description: 'A short, mostly level circuit with open views, benches and plenty to spot along the hedgerows.',
  },
  family: {
    title: 'Family Trail',
    description: 'A varied family route past the animal fields and woodland edge, with a few gentle slopes along the way.',
  },
  long: {
    title: 'Hill View Walk',
    description: 'Our longest trail climbs gradually to a wide countryside viewpoint before returning through peaceful farmland.',
  },
};

const routeTitle = document.querySelector('[data-route-title]');
const routeDescription = document.querySelector('[data-route-description]');

document.querySelectorAll('[data-route]').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedRoute = routeInformation[button.dataset.route];

    document.querySelectorAll('[data-route]').forEach((routeButton) => {
      routeButton.classList.remove('is-active');
      routeButton.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('is-active');
    button.setAttribute('aria-pressed', 'true');
    routeTitle.textContent = selectedRoute.title;
    routeDescription.textContent = selectedRoute.description;
  });
});

document.querySelectorAll('[data-current-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

