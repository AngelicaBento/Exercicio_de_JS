function num_maior(num1, num2) {
    if (num1 > num2) {
      return `O número ${num1} é maior que o número ${num2}`;
    } else if (num2 > num1) {
      return `O número ${num2} é maior que o número ${num1}`;
    } else {
      return "Os números são iguais";
    }
  }
  
  module.exports = { num_maior };