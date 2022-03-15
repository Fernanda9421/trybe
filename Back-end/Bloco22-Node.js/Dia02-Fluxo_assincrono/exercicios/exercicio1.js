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

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const callDoMath = async () => {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

  try {
    const result = await math(...randomNumbers)
    console.log(result);
  } catch (error) {
    console.error(error.message)
  }
}

callDoMath();
