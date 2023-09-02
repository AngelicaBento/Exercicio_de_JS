const express = require('express')
const { valor_receber } = require('./Exercicios/dois.js')
const { peso } = require('./Exercicios/tres.js')
const { somar } = require('./Exercicios/um.js')
const { temperaturaF } = require('./Exercicios/quatro.js')
const { qtde_milhas } = require('./Exercicios/cinco.js')
const { evento_duracao } = require('./Exercicios/seis.js')
const { conversao_Metro } = require('./Exercicios/Sete.js')
const { conversao_Cm } = require('./Exercicios/Sete.js')
const { tabuada } = require('./Exercicios/oito.js')
const { media_notas } = require('./Exercicios/Nove.js')
const { calculo_imc } = require('./Exercicios/dez.js')
const { calculo_operacao} = require('./Exercicios/onze.js')
const { positivo_negativo } = require('./Exercicios/doze.js')
const { par_impar } = require('./Exercicios/treze.js')
const { num_maior } = require('./Exercicios/quatorze.js')
const { valor_triangulo } = require('./Exercicios/quinze.js')
const { impostoDeRenda } = require('./Exercicios/dezesseis.js')
const { notaMediaFinal } = require('./Exercicios/dezessete.js')
const { custo_veiculo } = require('./Exercicios/dezoito.js')

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exum', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `A soma dos número é: ${result}`
    })
})

app.post('/api/exdois', (req, res) => {
    const result = valor_receber(req.body.valor_hr, req.body.qtde_horas)

    res.status(200).json({
        message: `O trabalhador irá receber no final do mês o valor de: ${result}`
    })
})

app.post('/api/extres', (req, res) => {
    const result = peso(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)

    res.status(200).json({
        message: `A média dos 5 pesos é: ${result}`
    })
})

app.post('/api/exquatro', (req, res) => {
    const result = temperaturaF(req.body.temperatura_C)

    res.status(200).json({
        message: `A temperatura em Fahrenheit é: ${result}`
    })
})

app.post('/api/excinco', (req, res) => {
    const result = qtde_milhas(req.body.valor_milhas)

    res.status(200).json({
        message: `Convertendo as milhas para quilômetros fica:  ${result}`
    })
})

app.post('/api/exseis', (req, res) => {
    const result = evento_duracao(req.body.duracao_segundos)

    res.status(200).json({
        message: `A duração do evento em horas é de:  ${result}`
    })
})

app.post('/api/exsete', (req, res) => {
    const resulMetro = conversao_Metro(req.body.valorKM)
    const resulCm = conversao_Cm(req.body.valorKM)

    res.status(200).json({
        message: `A conversão de quilometros em metros é de ${resulMetro}m e em CM é ${resulCm}cm`
    })
})

app.post('/api/exoito', (req, res) => {
    const result = tabuada(req.body.num);

    res.status(200).json(result)
})

app.post('/api/exnove', (req, res) => {
    const result = media_notas(req.body.nota1, req.body.nota2, req.body.nota3)

    res.status(200).json(result)
})

app.post('/api/exdez', (req, res) => {
    const result = calculo_imc(req.body.sexo, req.body.altura)

    res.status(200).json({message: result})
})

app.post('/api/exonze', (req, res) => {
    const result = calculo_operacao(req.body.num1, req.body.operacao, req.body.num2)

    res.status(200).json({message: result})
})

app.post('/api/exdoze', (req, res) => {
    const result = positivo_negativo(req.body.num)

    res.status(200).json({message: result})
})

app.post('/api/extreze', (req, res) => {
    const result = par_impar(req.body.num)

    res.status(200).json({message: result})
})

app.post('/api/exquatorze', (req, res) => {
    const result = num_maior(req.body.num1, req.body.num2)

    res.status(200).json({message: result})
})

app.post('/api/exquinze', (req, res) => {
    const result = valor_triangulo(req.body.valor1, req.body.valor2, req.body.valor3)

    res.status(200).json({message: result})
})

app.post('/api/exdezesseis', (req, res) => {
    const result = impostoDeRenda(req.body.cpf, req.body.numDependentes, req.body.renda_mensal)

    res.status(200).json({message: result})
})

app.post('/api/exdezessete', (req, res) => {
    const result = notaMediaFinal(req.body.nota1, req.body.nota2, req.body.nota3)

    res.status(200).json({message: result})
})

app.post('/api/exdezoito', (req, res) => {
    const result = custo_veiculo(req.body.custo_fabrica, req.body.custo_consumidor)

    res.status(200).json({message: result})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})