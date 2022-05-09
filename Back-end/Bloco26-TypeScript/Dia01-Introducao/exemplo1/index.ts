import * as Exercise from './exercises';

console.log(Exercise.greeter('Fernanda'));
console.log(Exercise.personAge('Fernanda', 27));
console.log(`A soma do array é ${Exercise.sumArray([1, 7, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)} cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)} cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}`);
console.log(`Quadrado de lado 25cm: ${Exercise.square(25)}`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);

console.log(`A área do losango é: ${Exercise.diamond(32, 18)} cm²`);
console.log(`A área do losango é: ${Exercise.diamond(200, 50)} cm²`);
console.log(`A área do losango é: ${Exercise.diamond(75, 25)} cm²`);

console.log(`A área do trapézio é: ${Exercise.trapeze(100, 70, 50)} cm³`);
console.log(`A área do trapézio é: ${Exercise.trapeze(75, 50, 35)} cm³`);
console.log(`A área do trapézio é: ${Exercise.trapeze(150, 120, 80)} cm³`);

console.log(`A área do círculo é: ${Exercise.circle(25)} cm²`);
console.log(`A área do círculo é: ${Exercise.circle(100)} cm²`);
console.log(`A área do círculo é: ${Exercise.circle(12.5)} cm²`);
