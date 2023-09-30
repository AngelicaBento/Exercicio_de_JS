function numerosDiversos(){
    let numerosGerados = [];

    for(let i = 0; i < 15; i++){
        numerosGerados[i] = Math.floor(Math.random() * 100);
    }

    return numerosGerados;
}

module.exports = { numerosDiversos }