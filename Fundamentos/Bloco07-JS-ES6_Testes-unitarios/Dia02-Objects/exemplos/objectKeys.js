const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (let key in coolestTvShow) {
  console.log(key);
  console.log(coolestTvShow[key]);
}

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const skills = (student) => {
//   const skillsArray = Object.keys(student);
//   for (let key in skillsArray) {
//     console.log(`${skillsArray[key]}, Nível: ${student[skillsArray[key]]}`);
//   }
// }
// skills(student1);
// skills(student2);
