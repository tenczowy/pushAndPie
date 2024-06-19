export const users = [
  {
    id: 1,
    username: 'daniel',
    email: 'daniel@gmail.com',
    password: '1234',
  },
  {
    id: 2,
    username: 'sylwek',
    email: 'sylwek@gmail.com',
    password: '4321',
  },
  {
    id: 3,
    username: 'kasia',
    email: 'kasia@gmail.com',
    password: '1111',
  },
];

// MOBILE MENU MODAL WINDOW
const mobileMenuBtn = document.querySelector('.btn-mobile-menu');
const hambuerMenu = document.querySelector('.hamburger-menu');

const disableScrolling = function () {
  const bodyEl = document.querySelector('body');
  if (bodyEl.style.overflow === 'hidden') {
    bodyEl.style.overflow = 'visible';
  } else {
    bodyEl.style.overflow = 'hidden';
  }
};

mobileMenuBtn.addEventListener('click', (ev) => {
  disableScrolling();
  hambuerMenu.classList.toggle('hidden');
});

// PRICING PLANS
const planListEl = document.querySelector('.plans-list');
const plansEl = document.querySelectorAll('.plan-mobile');

planListEl.addEventListener('click', (e) => {
  e.preventDefault();
  const planTarget = e.target.dataset.plan;
  const planTargetEl = document.getElementById(planTarget);

  plansEl.forEach((plan) => {
    plan.classList.add('hidden');
  });

  planTargetEl.classList.remove('hidden');
});

// SMOOTH SCROLLING
const linksEl = document.querySelectorAll('.nav-link');

linksEl.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const clickedId = e.target.dataset.id;
    const sectionEl = document.querySelector(`#${clickedId}`);
    sectionEl.scrollIntoView({ behavior: 'smooth' });
    hambuerMenu.classList.add('hidden');
    disableScrolling();
  });
});
