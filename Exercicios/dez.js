function calculo_imc(sexo, altura) {
  if (sexo == "H") {
    return 72.7 * altura - 58;
  } else if (sexo == "M") {
    return 62.1 * altura - 44.7;
  } else {
    return "O sexo informado é inválido";
  }
}

module.exports = { calculo_imc };
