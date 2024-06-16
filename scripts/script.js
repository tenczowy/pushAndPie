// MOBILE MENU MODAL WINDOW
const mobileMenuBtn = document.querySelector('.btn-mobile-menu');
const hambuerMenu = document.querySelector('.hamburger-menu');

mobileMenuBtn.addEventListener('click', (ev) => {
  const bodyEl = document.querySelector('body');

  if (bodyEl.style.overflow === 'hidden') {
    bodyEl.style.overflow = 'visible';
  } else {
    bodyEl.style.overflow = 'hidden';
  }
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
