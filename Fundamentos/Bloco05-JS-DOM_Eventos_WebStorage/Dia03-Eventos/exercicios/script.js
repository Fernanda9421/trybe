function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  let weekDaysNumber = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayNumber = dezDaysList[index];
    const dayNumberItem = document.createElement('li');
    dayNumberItem.innerHTML = dayNumber;

    dayNumberItem.classList.add('day');

    if (dayNumber === 24 || dayNumber === 25 || dayNumber === 31) {
      dayNumberItem.classList.add('holiday');
    }
    if (dayNumber === 4 || dayNumber === 11 || dayNumber === 18 || dayNumber === 25) {
      dayNumberItem.classList.add('friday');
    }

    weekDaysNumber.appendChild(dayNumberItem);
  }
}
createDays();

function createButtonHoliday(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = string;

  buttonsContainer.appendChild(buttonHoliday);
}
createButtonHoliday('Feriados');

function changeBackgroundHoliday() {
  let buttonHoliday = document.querySelector('#btn-holiday');
  let holidayDays = document.querySelectorAll('.holiday');

  buttonHoliday.addEventListener('click', function () {
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === 'rgb(202, 255, 191)') {
        holidayDays[index].style.backgroundColor = 'unset';
      } else {
        holidayDays[index].style.backgroundColor = 'rgb(202, 255, 191)';
      }
    }
  })
}
changeBackgroundHoliday();


function createButtonFriday(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = string;

  buttonsContainer.appendChild(buttonFriday);
}
createButtonFriday('Sexta-feira');


function changeTextButtonFriday() {
  let buttonFriday = document.querySelector('#btn-friday');
  let fridayDay = document.querySelectorAll('.friday');
  let arrayFridays = [4, 11, 18, 25];

  buttonFriday.addEventListener('click', function () {
    for (let index = 0; index < fridayDay.length; index += 1) {
      if (fridayDay[index].innerText === '#Sextou') {
        fridayDay[index].innerText = arrayFridays[index];
      } else {
        fridayDay[index].innerText = '#Sextou'
      }
    }
  })
}
changeTextButtonFriday();


function zoomDay () {
  let day = document.querySelectorAll('.day');

  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
    });
  }
};
zoomDay();

function mouseLeave () {
  let day = document.querySelectorAll('.day');

  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener('mouseleave', function(event) {
      event.target.style.fontSize = '20px';
    })
  }
}
mouseLeave();

function createTasks (string) {
  let myTasks = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerText = string;
  span.style.display = 'block';

  myTasks.appendChild(span);
}
createTasks('Cozinhar');
createTasks('Projeto');


function colorTasks (color1, color2) {
  let myTasks = document.querySelectorAll('.my-tasks span');
  let divColor = document.createElement('div');
  let divColor2 = document.createElement('div')
  divColor.classList.add('task');
  divColor2.classList.add('task')
  divColor.style.backgroundColor = color1;
  divColor2.style.backgroundColor = color2;
  divColor2.style.marginLeft = '30px'

  myTasks[0].appendChild(divColor);
  myTasks[1].appendChild(divColor2)

}
colorTasks('green', 'red');
