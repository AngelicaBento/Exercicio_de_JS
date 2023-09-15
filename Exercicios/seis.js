function evento_duracao(duracao_segundos){
    let horas = 0;
    let minutos = 0;
    let segundos = duracao_segundos;
    
    // Verifica os segundos formam uma ou mais horas
    if(duracao_segundos >= 3600){ 
        horas = duracao_segundos / 3600;
        minutos = (duracao_segundos % 3600)/60;
        segundos = (duracao_segundos % 3600) % 60;
 
    // Verifica os segundos formam um ou mais minutos
    }else if(duracao_segundos >= 60){ 
        minutos = duracao_segundos / 60;
        segundos = duracao_segundos % 60;
    }
 
    return `${parseInt(horas)} HORAS, ${parseInt(minutos)} MINUTOS e ${parseInt(segundos)} SEGUNDOS.`;
 }
 
 module.exports = { evento_duracao }