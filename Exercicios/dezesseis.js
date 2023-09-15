function impostoDeRenda(numDependentes, rendaMensal){
    let salarioMinimo = 1302;
    let aliquota;
    
    // Até 2 Salários Mínimos
    if(rendaMensal <= salarioMinimo * 2){
        aliquota = 0;
    
    // Até 3 Salários Mínimos
    }else if(rendaMensal <= salarioMinimo * 3){ 
        aliquota = 0.05;
        
    // Até 5 Salários Mínimos    
    }else if(rendaMensal <= salarioMinimo * 5){ 
        aliquota = 0.10;
        
    // Até 7 Salários Mínimos    
    }else if(rendaMensal <= salarioMinimo * 7){ 
        aliquota = 0.15;
     
    // Mais de 7 Salários Mínimos    
    }else{ 
        aliquota = 0.20;
    }
    
    return rendaMensal * aliquota - ((numDependentes * 0.05 ) * salarioMinimo);
}

module.exports = { impostoDeRenda }