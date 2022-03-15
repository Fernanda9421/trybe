const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./fileName.txt', 'Troca texto novamente');
    console.log('Texto escrito com sucesso');
  } catch (err) {
    console.error(`Erro ao modificar arquivo: ${err.message}`);
  }
}

main();