function custoCarro(custoFabrica){
    let percentagemDistribuidor = 0.28;
    let impostos = 0.45;

    return custoFabrica + (custoFabrica * percentagemDistribuidor) + (custoFabrica * impostos);
}

module.exports = { custoCarro }