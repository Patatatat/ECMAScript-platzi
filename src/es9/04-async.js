async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value)); // 1
other.next().then(response => console.log(response.value)); // 2
other.next().then(response => console.log(response.value)); // 3
other.next().then(response => console.log(response.value)); // undefined
console.log('Hello');

async function arrayOfNames(array) {
  for await (let value of array){
    console.log(value);
  }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');