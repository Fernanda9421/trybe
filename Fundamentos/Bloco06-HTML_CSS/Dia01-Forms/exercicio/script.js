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

const inputs = {
  name: {
    maxLength: 40,
    required: true
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  adress: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true
  },
  state: {
    type: 'select',
    required: true
  },
  type: {
    type: 'radio',
    required: true
  },
  abstract: {
    maxLength: 1000,
    required: true
  },
  position: {
    maxLength: 40,
    required: true
  },
  positionDescription: {
    maxLength: 500,
    required: true
  },
  date: {
    type: 'date',
    required: true
  }
};

const getButton = document.querySelector('#button');
const checkDate = () => {
  const inputDate = document.querySelector('#date').value;
  const separateDate = inputDate.split('/');
  const numberOne = parseInt(separateDate[0]);
  const numberTwo = parseInt(separateDate[1]);
  const numberThree = parseInt(separateDate[2]);

  if (numberOne < 0 || numberOne > 31) {
    alert('Dia de início inválido')
  }
  if (numberTwo < 0 || numberTwo > 12) {
    alert('Mês de início inválido')
  }
  if (numberThree <= 0) {
    alert('Ano de início inválido')
  }
}
getButton.addEventListener('click', checkDate)

function preventDefault (event) {
  event.preventDefault();
}
getButton.addEventListener('click', preventDefault);
