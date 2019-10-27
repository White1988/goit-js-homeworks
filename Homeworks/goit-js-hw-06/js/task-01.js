//Получить массив имен всех пользователей (поле name).
const { users } = require('./users.js');

const getUserNames = users => {
  const listOfNames = users.map(users => users.name);
  return listOfNames;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
