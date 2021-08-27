// let entrada = 'TORRE';

// if (entrada.toLowerCase() === 'rei') {
//     console.log('Rei -> Todos os lados')
// } else if (entrada.toLowerCase() === 'rainha') {
//     console.log('Rainha -> Horizontal')
// } else if (entrada.toLowerCase() === 'bispo') {
//     console.log('Bispo -> Diagonal')
// } else if (entrada.toLowerCase() === 'cavalo') {
//     console.log('Cavalo -> Forma de L')
// } else if (entrada.toLowerCase() === 'torre') {
//     console.log('Torre -> Vertical ou Horizontal')
// } else if (entrada.toLowerCase() === 'peao') {
//     console.log('Peão -> Frente')
// } else {
//     console.log('Erro, essa peça não é uma peça válida')
// }

let entrada = 'BISPO';

switch (entrada.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Todos os lados');
        break;

    case 'rainha':
        console.log('Rainha -> Horizontal');
        break;

    case 'bispo':
        console.log('Bispo -> Diagonal');
        break;

    case 'cavalo' :
        console.log('Cavalo -> Forma de L');
        break;

    case 'torre':
        console.log('Torre -> Vertical ou Horizontal');
        break;

    case 'peao':
        console.log('Peão -> Frente');
        break;
    
    default:
        console.log('Erro, essa peça não é uma peça válida');
}