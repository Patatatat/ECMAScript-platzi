// arrays destructuring

let fruits = ['Apple', 'Grapes', 'Banana', 'Orange'];
let [a, b, c, d] = fruits;
console.log(b, d, a, c);

// object destructuring

let user = {userName: 'CarlosIV', age: 4};
let {userName, age} = user;
console.log(userName, age);