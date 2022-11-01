// arrays destructuring

let fruits = ['Apple', 'Grapes', 'Banana', 'Orange'];
let [a, b, c, d] = fruits;
console.log(b, d, a, c);

// object destructuring

let user = {userName: 'CarlosIV', age: 4};
let {userName, age} = user;
console.log(userName, age);

//spread Operator

let person = {name:'oscar', age: 28};
let country = 'MX';
let data = {id:1, ...person, country};
console.log(data);

//rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);


function solution(
  json1 = {name: "Mr. Michi", food: "Pescado"}, json2 = {age: 12, color: "Blanco"}) {
  return {
    ...json1, ...json2,
  };
}

solution();