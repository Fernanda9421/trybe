const angulo1 = 90;
const angulo2 = 18;
const angulo3 = 25;

let soma = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (soma === 180) {
        console.log('true');
    } else {
        console.log('false');
    }
} else {
    console.log('Ângulo Inválido')
}