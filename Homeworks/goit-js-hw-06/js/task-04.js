// Получить массив только неактивных пользователей (поле isActive).
const { users } = require('./users.js');

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Do
