function positivo_negativo(num) {
  if (num > 0) {
    return "O número informado é Positivo";
  } else if (num < 0) {
    return "O número informado é Negativo";
  } else {
    return "O número informado é Zero";
  }
}

module.exports = { positivo_negativo };
