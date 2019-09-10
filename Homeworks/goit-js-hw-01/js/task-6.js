let total = 0;
let input = 0;
while (input !== null) {
  input = prompt('Please enter a number:');
  if (isNaN(input)) {
    alert('You entered not a number');
  } else {
    total += Number(input);
  }
}
alert(`Total sum is ${total}`);
