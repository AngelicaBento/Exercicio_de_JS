function pesoElevador(pesos){
    const pesoMaximo = 180;
    let pesoTotal = 0;

    for(let i = 0; i < pesos.length; i++){
        pesoTotal += pesos[i];
    }

    if(pesoTotal < 180){
        return `PESO MÁXIMO NÃO ATINGIDO (${pesoTotal} / ${pesoMaximo})`;
    }else{
        return `PESO MÁXIMO ATINGIDO (${pesoTotal} / ${pesoMaximo})`;
    }
}

module.exports = { pesoElevador }