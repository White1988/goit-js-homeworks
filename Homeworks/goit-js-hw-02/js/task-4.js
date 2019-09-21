const formatString = function(words) {
  const array = words;
  if (words.length <= 40) {
    return words;
  } else return words.slice(0, 41) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
