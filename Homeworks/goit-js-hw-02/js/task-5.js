const checkForSpam = function(String) {
  if (
    String.toLowerCase().includes('spam') ||
    String.toLowerCase().includes('sale')
  ) {
    return true;
  } else return false;
  //   return String.toLowerCase().includes('spam', 'sale');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
