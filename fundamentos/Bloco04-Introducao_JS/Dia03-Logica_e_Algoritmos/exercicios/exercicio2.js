// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const linesNumber = 5;
let lines = '';

for (let index = 0; index < linesNumber; index += 1) {
  console.log(lines += '*');
}

