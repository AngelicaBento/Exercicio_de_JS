function mediaAltura(qntdePessoas, alturas) {
  let media = 0;

  for (let i = 0; i < qntdePessoas; i++) {
    media += alturas[i];
  }

  return media / qntdePessoas;
}

module.exports = { mediaAltura };
