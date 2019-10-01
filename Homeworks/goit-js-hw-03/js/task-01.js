const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

let list = Object.keys(user);

for (const iterator of list) {
  console.log(`${iterator} : ${user[iterator]}`);
}
