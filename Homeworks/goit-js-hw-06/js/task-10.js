// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const { users } = require('./users.js');

const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort().filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  }, []);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lore
