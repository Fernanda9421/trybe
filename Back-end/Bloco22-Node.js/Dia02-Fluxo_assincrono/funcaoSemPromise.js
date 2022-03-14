const calcDivision = (num1, num2) => {
  if (num2 === 0) throw new Error('Não pode ser feito uma divisão por zero');
  return num1 / num2;
}

try {
  const result = calcDivision(2, 0);
  console.log(`Resultado: ${result}`)
} catch (e) {
  console.log(e.message)
}
