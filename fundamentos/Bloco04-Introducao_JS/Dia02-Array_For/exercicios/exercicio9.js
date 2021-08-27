// // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let arr = [];
for (let i = 1; i <= 25; i += 1) {
    arr.push(i)
}

let division = [];
for (let i = 0; i < arr.length; i += 1) {
    division.push(arr[i] / 2)
}
console.log(division);