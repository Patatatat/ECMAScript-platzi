//declarando
//class User{};

//instancia de una clase
//const newUser = new newUser();

class User {
  //metodos
  greeting(){
    return "Hello";
  }
};

const patatatat = new User();
console.log(patatatat.greeting());

//constructor

class user{
  //constructor 
  constructor() {
    console.log('New user');
  }
  greeting(){
    return "Hello";
  }
};

const david = new user();

//this

class user{
  constructor(name){
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
};

const ana = new user('Ana');
console.log(ana.greeting())

//setters

class user{
  //constructor
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get YourAge(){
    return this.age;
  }
  set YourAge(n){
    this.age = n;
  }
}

const brad = new user('Brad', 30);
console.log(brad.greeting() && brad.YourAge);
console.log(brad.YourAge = 90);