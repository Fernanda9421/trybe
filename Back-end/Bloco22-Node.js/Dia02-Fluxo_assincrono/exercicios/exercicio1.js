const math = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'))
    }
    const result = (num1 + num2) * num3
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
  return promise;
}

math(3, 5, 2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));