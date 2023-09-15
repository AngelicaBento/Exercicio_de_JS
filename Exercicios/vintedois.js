function velocidadeMulta(velPermitida, velPraticada){
    if(velPraticada > velPermitida && velPraticada <= velPermitida + (velPermitida * 0.2)){
        return `Você recebeu MULTA! | Valor: R$ 102,00`;
    }else if(velPraticada > velPermitida + (velPermitida * 0.2)){
        return `Você recebeu MULTA! | Valor: R$ 500,00`;
    }else{
        return `Você não recebeu MULTA! | Valor: R$ 0,00`;
    }
}

module.exports = { velocidadeMulta }