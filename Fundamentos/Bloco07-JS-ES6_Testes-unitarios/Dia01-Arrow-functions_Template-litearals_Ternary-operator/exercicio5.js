const button = document.querySelector('#btn-click');
const count = document.querySelector('#count');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  count.innerText = `Contagem de cliques: ${clickCount}`;
});