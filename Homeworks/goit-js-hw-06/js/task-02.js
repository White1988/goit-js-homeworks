// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const { users } = require('./users.js');

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект
