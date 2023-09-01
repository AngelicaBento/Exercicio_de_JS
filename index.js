const express = require('express')
const { peso } = require('./Exercicios/dois.js')
const { valor_receber } = require('./Exercicios/tres.js')
const { somar } = require('./Exercicios/um.js')
const { temperaturaF } = require('./Exercicios/quatro.js')
const { qtde_milhas } = require('./Exercicios/cinco.js')
const { evento_duracao } = require('./Exercicios/seis.js')
const { conversao_Metro } = require('./Exercicios/Sete.js')
const { conversao_Cm } = require('./Exercicios/Sete.js')
const { tabuada } = require('./Exercicios/oito.js')
const { media_notas } = require('./Exercicios/Nove.js')

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

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})