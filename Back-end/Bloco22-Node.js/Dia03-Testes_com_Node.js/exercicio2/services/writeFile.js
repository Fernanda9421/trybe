const fs = require('fs').promises;

const writeFile = (fileName, content) => {
  fs.writeFile(`${__dirname}/${fileName}`, content);
  return 'ok';
}

module.exports = writeFile;
