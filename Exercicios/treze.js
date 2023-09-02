function par_impar(num) {
  if (num % 2 == 0) {
    return "O número informado é Par";
  } else {
    return "O número informado é Ímpar";
  }
}

module.exports = { par_impar };
