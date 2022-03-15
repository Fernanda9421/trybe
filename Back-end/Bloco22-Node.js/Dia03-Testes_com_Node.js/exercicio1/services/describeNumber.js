const describeNumber = (number) => {
  if (number > 0) {
    return "positivo";
  } else if (number < 0) {
    return "negativo";
  } else if (number === 0) {
    return "nulo";
  }
  return "o valor deve ser um número";
}

module.exports = describeNumber;