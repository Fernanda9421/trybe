const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adicionar turno da noite na lesson2:
function addShift (object, key, value) {
  let newKey = key;
  object[newKey] = value;

//  console.log(object)
}
addShift(lesson2, 'turno', 'noite');

// Listar as keys de um objeto:
const listKeys = (object) => {
  const listKeys = Object.keys(object);
  return listKeys;
}
//console.log(listKeys(lesson1));

// Tamanho de um obejto:
// const objectLength = (object) => {
//   const length = Object.keys(object).length;
//   return length;
// }
const objectLength = (object) => Object.keys(object).length;
//console.log(objectLength(lesson1));

// Listar valores de um objeto:
const listValues = (object) => Object.values(object);
//console.log(listValues(lesson1));

// Agrupar todos os objetos em um:

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// Soma dos estudantes do allLessons, criado no exercício anterior:
const sumStudents = (object) => {
  // const students1 = object.lesson1.numeroEstudantes;
  // const students2 = object.lesson2.numeroEstudantes;
  // const students3 = object.lesson3.numeroEstudantes;

  // const sumStudents = students1 + students2 + students3;
  // return sumStudents;
  let sumStudents = 0;
  for (index in object) {
    sumStudents += object[index].numeroEstudantes;
  }
  return sumStudents
}
//console.log(sumStudents(allLessons));

// Obter o valor da chave de acordo com sua posição no objeto:
const getValueByNumber = (object, index) => {
  const values = Object.values(object)[index];
  return values
}
//console.log(getValueByNumber(lesson1, 0));

// Verificar se o par (chave/valor) existe na função:
const verifyPair = (object, key, value) => {
  return object[key] === value;
}
//console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));

// BÔNUS: Contar quantos estudantes assistiram às aulas de Matemática:
const mathClass = (object) => {
  let students = 0;
  const values = Object.values(object);
  for (index in values) {
    if (values[index].materia === 'Matemática') {
      students += values[index].numeroEstudantes;
    }
  }
  return `${students} estudantes assistiram a áula de Matemática`;
}
//console.log(mathClass(allLessons));

// BÔNUS 2: Retornar um objeto com o relatório do professor:
const createReport = (object, value) => {
  let aulas = [];
  let numeroEstudantes = 0;
  let professor;
  const values = Object.values(object);
  for (index in values) {
    if (values[index].professor === value) {
      professor = values[index].professor;
      aulas.push(values[index].materia);
      numeroEstudantes += values[index].numeroEstudantes;
    }
  }
  let newObject = Object.assign({}, {professor}, {aulas}, {numeroEstudantes});
  return newObject;
}
console.log(createReport(allLessons, 'Maria Clara'));