const calcDivision = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));
    resolve(num1/num2);
  });
  return promise;
}

calcDivision(2,2)
  .then((result) => console.log(`Sucesso: ${result}`))
  .catch((error) => console.log(`Erro: ${error.message}`));