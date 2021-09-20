const states = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
  DF: 'Distrito Federal'
};

const statesOfBrazil = () => {
  const getSelect = document.querySelector('#state');  
  for (const key in states) {
    let options = document.createElement('option');
    options.innerText = states[key]
    options.value = key;
    options.classList.add('state');
    getSelect.appendChild(options);
  }
}
statesOfBrazil();

const button = document.querySelector('#button');
const verifyDate = () => {
  const inputDate = document.querySelector('#date').value;
  const separateDate = inputDate.split('/');
  const day = separateDate[0];
  const month = separateDate[1];
  const year = separateDate[2];

  if (day < 0 || day > 31) {
    alert ('Dia inválido');
  }
  if (month < 0 || month > 12) {
    alert ('Mês inválido');
  }
  if (year < 0) {
    alert ('Ano inválido');
  }
}
button.addEventListener('click', verifyDate);

const preventDefault = (event) => {
  event.preventDefault();
}
button.addEventListener('click', preventDefault);