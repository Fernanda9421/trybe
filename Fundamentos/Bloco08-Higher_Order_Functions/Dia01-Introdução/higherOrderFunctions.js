// Funções que usam outras funções em suas operações, devendo aceitá-las como parâmetros e/ou retorná-las:
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.