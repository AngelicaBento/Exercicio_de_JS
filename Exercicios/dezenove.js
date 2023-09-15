function jurosCapital(capital, taxa, tempo){
    let juros = capital * taxa * tempo;
    let montante = capital + juros;

    return `Valor do capital: ${capital} | Juros: ${juros} | Montante: ${montante}`;
}

module.exports = { jurosCapital }