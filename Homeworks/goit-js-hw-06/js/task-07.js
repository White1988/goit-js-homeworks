// Получить общую сумму баланса (поле balance) всех пользователей.
import users from './users.js';

const calculateTotalBalance = users => {
  const sum = users.reduce((acc, value) => acc + value.balance, 0);
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916
