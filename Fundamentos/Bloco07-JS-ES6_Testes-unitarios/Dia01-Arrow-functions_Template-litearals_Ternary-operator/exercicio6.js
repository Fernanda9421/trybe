const chageString = (name) => {
  let string = 'Tryber x aqui!';
  let separateString = string.split(' ');

  for (let index = 0; index < separateString.length; index += 1) {
    if (separateString[index] === 'x') {
      separateString[index] = name;
    }
  }
  return separateString.join(' ');
}
console.log(chageString('Fernanda'));