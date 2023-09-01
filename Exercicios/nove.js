export function media_notas(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3)/3;

    if (media <=5) {
        return 'Você está Reprovado. Sua média é: ' + media;
    } else if (media >= 6) {
        return 'Você está Aprovado. Sua média é: ' + media;
    } else {
        return 'Você está em Recuperação. Sua média é: ' + media;
    }
}