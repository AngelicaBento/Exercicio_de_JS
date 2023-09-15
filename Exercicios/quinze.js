function valor_triangulo(valorA, valorB, valorC, altura){
    if((valorA + valorB) > valorC && (valorA + valorC) > valorB && (valorB + valorC) > valorA){
        return `A área do triângulo é: ${(valorA * altura) / 2}`;
    }else{
        return `${valorA}, ${valorB} e ${valorC} não formam um triângulo`;
    }
}

module.exports = { valor_triangulo }