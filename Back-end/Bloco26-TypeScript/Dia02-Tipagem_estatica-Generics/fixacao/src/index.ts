import * as Fixacao from './fixacao';
import * as Class from './class';

console.log(Fixacao.sum({ num1: 10, num2: 25 }));
console.log(Fixacao.showAddress({ street: 'Cidade de Brasília', number: 4, city: 'Sintra' }));
console.log(Fixacao.docId(12312312541));
console.log(Fixacao.docId('12312312541'));

console.log(`${Class.Dog1._name} tem ${Class.Dog1._age} ano(s), e é da raça ${Class.Dog1._breed}`);
