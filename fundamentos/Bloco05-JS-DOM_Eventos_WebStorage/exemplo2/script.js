function body() {
  let body = document.querySelector('#container');
  body.style.backgroundColor = 'rgb(216, 243, 220)';
}
body();

function header() {
  let header = document.querySelector('#header-container');
  header.style.backgroundColor = 'rgb(82, 183, 136)';
}
header();

function font() {
  let font = document.querySelectorAll('.font');
  for (let index = 0; index < font.length; index += 1) {
    font[index].style.fontFamily = ('Montserrat, sans-serif')
  }
}
font();

function emergency() {
  let background = document.querySelectorAll('.emergency-tasks div');
  for (let index = 0; index < background.length; index += 1) {
    background[index].style.backgroundColor = 'rgb(149, 213, 178)';
  }
}
emergency();

function noEmergency () {
  let noEmergency = document.querySelectorAll('.no-emergency-tasks div');
  for (let index = 0; index < noEmergency.length; index += 1) {
    noEmergency[index].style.backgroundColor = 'rgb(183, 228, 199)';
  }
}
noEmergency();

function subtitle () {
  let subtitle = document.querySelectorAll('.background1');
  for (let index = 0; index < subtitle.length; index += 1) {
    subtitle[index].style.backgroundColor = 'rgb(183, 228, 199)'
    subtitle[index].style.color = 'black';
  }
}
subtitle();

function subtitle2 () {
  let subtitle2 = document.querySelectorAll('.background2');
  for (let index = 0; index < subtitle2.length; index += 1) {
    subtitle2[index].style.backgroundColor = 'rgb(149, 213, 178)';
    subtitle2[index].style.color = 'black';
  }
}
subtitle2();

function footer() {
  let footer = document.querySelector('#footer-container');
  footer.style.color = 'black';
  footer.style.backgroundColor = 'rgb(82, 183, 136)';
}
footer();