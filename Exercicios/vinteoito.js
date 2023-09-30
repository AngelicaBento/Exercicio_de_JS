function numerosNegativos(numeros){
    let negativos = 0;

    if(numeros.length > 10 || numeros.length < 10){
        return `Digite dez números: ${numeros.length}`;
    }else{
        for(let i = 0; i < 10; i++){
            if(numeros[i] < 0){
                negativos++;
            }
        }

        return `Entre os números enviados, ${negativos} de 10 são NEGATIVOS`;
    }
}

module.exports = { numerosNegativos }