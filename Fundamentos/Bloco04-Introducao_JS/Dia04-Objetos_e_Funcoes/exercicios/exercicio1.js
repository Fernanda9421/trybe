let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';
//console.log(info)
// for (let key in info) {
//   console.log(key)
// }
// for (let index in info) {
//   console.log(info[index])
// }

let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + infoTwo.personagem);
console.log(info.origem + ' e ' + infoTwo.origem);
console.log(info.nota + ' e ' + infoTwo.nota);
if (info.recorrente === infoTwo.recorrente) {
  console.log('Ambos recorrentes')
}