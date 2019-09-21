const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message;

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!isLoginUnique(allLogins, login)) {
    message = 'Такой логин уже используется!';
  }
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    message = 'Логин успешно добавлен!';
  }
};

// Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(message);
