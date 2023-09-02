function notaMediaFinal(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    const mediaponderada = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5)

    return "Sua média é " + media + " e sua média ponderada é: " + mediaponderada + "."


}

module.exports = { notaMediaFinal }