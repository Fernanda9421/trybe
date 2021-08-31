// Agora inverta o lado do triângulo


const linesNumber = 5;
let lines = '';
let symbol = '*'
let position = linesNumber;

for (let index = 0; index < linesNumber; index += 1) {
  for (let column = 0; column <= linesNumber; column +=1) {
    if (column < position) {
      lines = lines + ' ';
    } else {
      lines = lines + symbol;
    }
  }
  console.log(lines);
  lines = '';
  position -= 1;
}