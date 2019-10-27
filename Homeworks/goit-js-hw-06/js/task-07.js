// Получить общую сумму баланса (поле balance) всех пользователей.
const { users } = require('./users.js');

const calculateTotalBalance = users => {
  const sum = users.reduce((acc, value) => acc + value.balance, 0);
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916
