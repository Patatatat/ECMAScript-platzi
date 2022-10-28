function newUser(name, age, country) {
  var name = name || 'User';
  var age = age || 34;
  var country = country || 'MX';
  console.log(`The name of the user is: ${name}
  The age of the user is: ${age} 
  The country of the user is: ${country} \n`);

}

newUser();
newUser('Juan', 30, 'Antartida');

function newAdmin(name = 'Andres', age = 30, country='MX') {
  console.log(`The name of the admin is: ${name}
  The age of the admin is: ${age} 
  The country of the admin is: ${country} \n`);
}

newAdmin();