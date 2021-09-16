let moment = require('moment');

let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o "É TEEETRAA!" há ' + fromNow);

let day = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(day) // September 16th 2021, 2:36:47 pm

let weekDay = moment().format('dddd');
console.log(weekDay) // Thursday

let calendar = moment().subtract(10, 'days').calendar();
console.log(calendar)