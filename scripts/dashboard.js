document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) {
    console.log(user);
  }
});
