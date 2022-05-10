import * as Character from './characters';
import Seasons from './seasons';
import * as Months from './monthsOfYear';

const readlineSync = require('readline-sync');

// Exercise 1
// console.log(Character.showCharacters());

// Exercise 4
let seasons:string[] = [];
const chosenMonth = readlineSync,
  month = Object.keys(Months.default),
  indexMonth = chosenMonth.keyInSelect(month, 'De qual mês você deseja saber? ');

const chosenHemisfere = readlineSync,
  hemisphere = ['Norte', 'Sul'],
  index = chosenHemisfere.keyInSelect(hemisphere, 'De qual hemisfério você deseja saber? ');

const south = () => {
  const autumn = month.slice(2, 6);
  const winter = month.slice(5, 9);
  const spring = month.slice(8);
  const summer = month.slice(0, 3);
  summer.push('December');

  if (hemisphere[index] === 'Sul') {
    if (autumn.includes(month[indexMonth])) return Seasons.Autumn;
    if (winter.includes(month[indexMonth])) return Seasons.Winter;
    if (spring.includes(month[indexMonth])) return Seasons.Spring;
    if (summer.includes(month[indexMonth])) return Seasons.Summer;
  }

  return '';
}

const north = () => {
  const autumn = month.splice(9);
  const winter = month.splice(0, 4);
  winter.push('December');
  const spring = month.splice(3, 7);
  const summer = month.splice(6, 10);

  if (hemisphere[index] === 'Norte') {
    if (autumn.includes(month[indexMonth])) return Seasons.Autumn;
    if (winter.includes(month[indexMonth])) return Seasons.Winter;
    if (spring.includes(month[indexMonth])) return Seasons.Spring;
    if (summer.includes(month[indexMonth])) return Seasons.Summer;
  }

  return '';
}

console.log(`Mês escolhido: ${month[indexMonth]}
Hemisfério escolhido: ${hemisphere[index]}
Estação do ano: ${south()}${north()}`);


