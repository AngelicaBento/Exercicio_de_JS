function valorTotalIPI(percentagem, cod_peca1, valor_peca1, qntde_peca1, cod_peca2, valor_peca2, qntde_peca2){
  let valorTotal = (valor_peca1 * qntde_peca1 + valor_peca2 * qntde_peca2) * (percentagem/100 + 1);

  return valorTotal;
}

module.exports = { valorTotalIPI } 