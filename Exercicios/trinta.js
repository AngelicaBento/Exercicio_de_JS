function numsAleatoriosEspecificos() {
  let numerosGerados = [];

  numerosGerados[0] = Math.floor(Math.random() * 8);
  numerosGerados[1] = Math.floor(Math.random() * 7) + 9;
  numerosGerados[2] = Math.floor(Math.random() * 6) + 17;
  numerosGerados[3] = Math.floor(Math.random() * 6) + 23;
  numerosGerados[4] = Math.floor(Math.random() * 6) + 24;

  return numerosGerados;
}

module.exports = { numsAleatoriosEspecificos };
