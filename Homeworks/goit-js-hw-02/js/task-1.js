const array_1 = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function(array) {
  const list = [];
  for (let index = 0; index < array.length; index += 1) {
    list.push(`${index + 1} : ${array[index]}`);
  }
  return list;
};

console.log(logItems(array_1));
