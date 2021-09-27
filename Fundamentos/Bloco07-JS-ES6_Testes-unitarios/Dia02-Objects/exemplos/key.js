const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const objectKeys = (object, key, value) => {
  const person = object;
  let newKey = key;
  person[newKey] = value;
  console.log(person);
}
objectKeys({name: 'Fernanda', age: 27}, 'lastName', 'Andrade');