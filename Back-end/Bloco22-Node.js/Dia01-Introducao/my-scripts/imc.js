const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat("Digite seu peso, em kg: ");
const altura = readlineSync.questionInt("Digite sua altura, em cm: ");

const calculaImc = (peso, altura) => {
  console.log(`Seu peso: ${peso} kg.
  Sua altura: ${altura} cm`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`Seu IMC: ${imc} kg/m2`);
  classificaImc(imc);
}

const classificaImc = (imc) => {
  if (imc < 18.5) {
    console.log('Classificação: Abaixo do peso (magreza)');
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Classificação: Peso normal');
  } else if (imc >= 25 && imc <= 29.9) {
    console.log('Classificação: Acima do peso (sobrepeso)');
  } else if (imc >=30 && imc <= 34.9) {
    console.log('Classificação: Obesidade grau I');
  } else if (imc >= 35 && imc <= 39.9) {
    console.log('Classificação: Obesidade grau II');
  } else {
    console.log('Classificação: Obesidade graus III e IV');
  }
};

calculaImc(peso, altura);