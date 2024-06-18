const loginFormEl = document.querySelector('.login-form');
const usernameEl = document.getElementById('username-login').value;

loginFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const curUser = loginCheck(usernameEl);
  console.log(curUser);
});

// const loginCheck = function (username, password) {};

// loginCheck('daniel', 'daniel');

export const loginCheck = function (username, password) {
  try {
    const response = fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => response.json
    );
    console.log(response);

    const currentUser = users.find((user) => user.username === username);

    return currentUser;
  } catch (err) {
    throw err;
  }
};
