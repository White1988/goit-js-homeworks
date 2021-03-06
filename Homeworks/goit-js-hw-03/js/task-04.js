const countTotalSalary = function(employees) {
  let values = Object.values(employees);
  let totalSum = 0;

  for (let index = 0; index < values.length; index += 1) {
    totalSum += values[index];
  }

  return totalSum;
};

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
