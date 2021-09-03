/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/


// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function paragraph1() {
  document.getElementsByTagName('p')[0].innerText = 'Em dois anos, estarei formada na melhor escola de programação, e terei conquistado meu espaço no mercado de trabalho';
}
paragraph1();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mainContent() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}
mainContent();

// Crie uma função que mude a cor do quadrado vermelho para branco.
function centerContent() {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
centerContent();

// Crie uma função que corrija o texto da tag <h1>.
function title() {
  document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScripit';
}
title();