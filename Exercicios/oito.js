 function tabuada(num) {
    const numeros = [];
    
    for(let i = 1; i <= 10; i++){
        numeros.push(`${num} x ${i} = ${num * i}`);
    }

    return numeros;
}

module.exports = { tabuada }