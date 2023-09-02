function custo_veiculo(custo_fabrica, custo_consumidor) {
    const custo_distribuidor = custo_fabrica * 0.28
    const impostos = custo_fabrica * 0.45
    const custo_consumidor = custo_fabrica + custo_distribuidor + impostos

    return custo_consumidor 
}

module.exports = { custo_veiculo }