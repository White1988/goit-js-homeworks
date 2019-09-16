const findLongestWord = function(String) {
  const array = String.split(' ');
  let longWord = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > longWord.length) {
      longWord = array[index];
    }
  }
  return longWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
