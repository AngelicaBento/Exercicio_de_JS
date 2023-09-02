function calculo_operacao(num1, operacao, num2) {
  if (operacao == "+") {
    return num1 + num2;
  } else if (operacao == "-") {
    return num1 - num2;
  } else if (operacao == "*") {
    return num1 * num2;
  } else if (operacao == "/") {
    return num1 / num2;
  } else {
    return "Operação inválida";
  }
}

module.exports = { calculo_operacao };
