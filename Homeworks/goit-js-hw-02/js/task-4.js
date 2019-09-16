const formatString = function(String) {
  const array = String;
  if (String.length <= 40) {
    return String;
  } else return String.slice(0, 41) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
