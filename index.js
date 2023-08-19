import express from 'express'
import { valor_receber } from './Exercicios/dois.js'
import { peso } from './Exercicios/tres.js'
import { somar} from './Exercicios/um.js'
import { temperaturaF } from './Exercicios/quatro.js'
import { qtde_milhas } from './Exercicios/cinco.js'
import { evento_duracao } from './Exercicios/seis.js'

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

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})