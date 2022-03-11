const readlineSync = require('readline-sync');

const distancia = readlineSync.questionInt("Qual a distância, em metros? ");
const tempo = readlineSync.questionInt("Qual o tempo, em segundos? ");

const calculaVelocidade = (distancia, tempo) => {
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidadeMedia}`);
}

calculaVelocidade(distancia, tempo);