import { users } from './script.js';

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelectorAll('.btn-login');
const closeLogin = document.querySelector('.icon-close');

const loginForm = document.querySelector('.login-form');
const loginMail = document.querySelector('.login-mail');
const loginPassword = document.querySelector('.login-password');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

loginBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    wrapper.style.display = 'flex';
  });
});

closeLogin.addEventListener('click', (e) => {
  wrapper.style.display = 'none';
  wrapper.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const insertedEmail = loginMail.value;
  const insertedPassword = loginPassword.value;

  const currUser = users.find(
    (user) =>
      user.email.toLowerCase() === insertedEmail.toLowerCase() &&
      user.password === insertedPassword
  );

  if (currUser) {
    localStorage.setItem('currentUser', JSON.stringify(currUser));
    window.location.href = '/dashboard.html';
  } else {
    alert(`Wrong Credentials!`);
  }
});
