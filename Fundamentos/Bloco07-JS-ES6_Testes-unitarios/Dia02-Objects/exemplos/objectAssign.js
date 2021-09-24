const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
//console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
} */

const person2 = {
  name: 'Roberto',
};
  
const lastName = {
  lastName: 'Silva',
};
  
const clone = Object.assign(person2, lastName);
  
//console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//console.log(person2); // { name: 'Roberto', lastName: 'Silva' }


const person3 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person3,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person3);