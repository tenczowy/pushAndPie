document.addEventListener('DOMContentLoaded', function () {
  const dashboard = document.querySelector('.dashboard');

  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) {
    // const htmlTemplate = `<h1>Hello ${user.username}</h1>`;
    // dashboard.insertAdjacentHTML('afterbegin', htmlTemplate);
    console.log(user);
  }
});
