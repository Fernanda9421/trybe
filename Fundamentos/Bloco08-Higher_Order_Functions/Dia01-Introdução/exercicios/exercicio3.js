const totalAnswersRigth = (answersRigth, studentAnswers, checkTheAnswers) => {
  let total = 0;
  for (let index = 0; index < answersRigth.length; index += 1) {
    const answersRigthCurrent = answersRigth[index];
    const answerStudentCurrent = studentAnswers[index];
    total += checkTheAnswers(answersRigthCurrent, answerStudentCurrent);
  }
  return `Resultado final: ${total} respostas corretas!`;
}

const checkTheAnswers = (answersRigth, studentAnswers) => {
  if (studentAnswers === 'N.A') return 0;
  if (answersRigth === studentAnswers) return 1;
  return -0.5;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(totalAnswersRigth(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTheAnswers));