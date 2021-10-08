// EXEMPLO 1:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name);
console.log(seller);

// EXEMPLO 2: Reatribuir nomes de propriedades:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nameStudent, b: classAssigned, c: subject } = student;

console.log(nameStudent); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// exemplo 3: Passar os valores de um objeto como parâmetros de uma função:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
