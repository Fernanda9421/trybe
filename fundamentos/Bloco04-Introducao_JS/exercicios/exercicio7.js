let percentageGrade = 105;

if (percentageGrade < 0 || percentageGrade > 100) {
    console.log('Erro')
} else if (percentageGrade >= 90) {
    console.log('Conceito A');
} else if (percentageGrade >= 80) {
    console.log('Conceito B');
} else if (percentageGrade >= 70) {
    console.log('Conceito C');
} else if (percentageGrade >= 60) {
    console.log('Conceito D');
} else if (percentageGrade >= 50) {
    console.log ('Conceito E');
} else {
    console.log('Conceito F')
}