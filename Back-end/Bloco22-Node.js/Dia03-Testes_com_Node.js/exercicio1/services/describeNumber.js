const describeNumber = (number) => {
  if (number > 0) {
    return "positivo"
  } else if (number < 0) {
    return "negativo"
  } else {
    return "nulo"
  }
}

module.exports = describeNumber;