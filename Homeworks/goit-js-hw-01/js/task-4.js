let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let message = prompt('How many droids you want to buy?');

if (message === null) {
  console.log(`Отменено пользователем!`);
} else {
  totalPrice = pricePerDroid * parseInt(message);
  if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`);
  } else {
    console.log(
      `Вы купили ${message} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  }
}
