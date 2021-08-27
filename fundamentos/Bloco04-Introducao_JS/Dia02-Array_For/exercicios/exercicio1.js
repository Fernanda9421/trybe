//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [4, 17, 6, 8, 12];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() 

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i];
// }
// //console.log(sum);

// // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let average = sum / numbers.length;
// //console.log(average);

// // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

// if (average > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let order = numbers.sort((a, b) => a - b) 
// let valueHighest = order[order.length-1]
// console.log(valueHighest);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = 0;
for (let i = 0; i < numbers.length; i += 1) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers = oddNumbers + 1;
    } else {
        oddNumbers = "nenhum valor ímpar encontrado"
    }
}
console.log(oddNumbers)
