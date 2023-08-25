export function media_notas(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3)/3;

    if (media <=5) {
        return 'Reprovado. Média: ' + media;
    } else if (media >= 7) {
        return 'Aprovado. Média: ' + media;
    } else {
        return 'Recuperação. Média: ' + media;
    }
}