const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Please enter code:');

if (message === null) {
  console.log(`Отменено пользователем!`);
} else if (ADMIN_PASSWORD === message) {
  console.log(`Добро пожаловать!`);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
