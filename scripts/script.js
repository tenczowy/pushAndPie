import { loginCheck } from './login.js';

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

// LOGIN MODAL WINDOW
const loginBtnEl = document.querySelectorAll('.btn-login');
const signupBtnEl = document.querySelectorAll('.btn-sign-up');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginBackBtn = document.querySelector('.login-back-btn');

loginBtnEl.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    disableScrolling();
  });
});

signupBtnEl.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    disableScrolling();
  });
});

loginBackBtn.addEventListener('click', (e) => {
  disableScrolling();
  e.preventDefault();
  loginForm.classList.add('hidden');
  signupForm.classList.add('hidden');
});

// LOGIN
