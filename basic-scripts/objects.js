let user = {};
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }
alert( isEmpty(schedule) );

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130 
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

