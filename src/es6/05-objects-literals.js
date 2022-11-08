//enahced object literals

function newUser(user, age, country) {
  return{
    user,
    age,
    country,
    id: uID 
  }
}

console.log(newUser("Andres", 31, "MX"));