function mediaPesos(pesos) {
  let media = 0;

  for (let i = 0; i < 5; i++) {
    media += pesos[i];
  }

  return media / 5;
}

module.exports = { mediaPesos };
