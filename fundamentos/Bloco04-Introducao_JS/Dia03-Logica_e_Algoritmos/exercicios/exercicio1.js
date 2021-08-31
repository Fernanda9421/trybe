// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

const linesNumber = 5;


for (let index = 0; index < linesNumber; index += 1) {
  let lines = '';

  for (let asteriskNumber = 0; asteriskNumber < linesNumber; asteriskNumber += 1) {
    lines += '*'
  }
  console.log(lines)
}
