// let total = 0;
// let input = 0;
// const numbers = [];
// let elementNumber = 0;

// while (input !== null) {
//   input = prompt('Please enter a number:');
//   if (isNaN(input)) {
//     alert('You entered not a number, please try again.');
//   } else {
//     numbers[elementNumber] = Number(input);
//     elementNumber += 1;
//   }
// }

// if (numbers !== null) {
//   for (const iterator of numbers) {
//     total += iterator;
//   }
// }

// alert(`Total sum is ${total}`);

let total = 0;
let input = 0;
const numbers = [];

while (input !== null) {
  input = prompt('Please enter a number:');
  if (isNaN(input)) {
    alert('You entered not a number, please try again.');
  } else {
    numbers.push(Number(input));
  }
}

if (numbers !== null) {
  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }
}

alert(`Total sum is ${total}`);
