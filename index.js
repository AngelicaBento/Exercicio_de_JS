import express from 'express'
import { subtrair } from './Exercicios/dois.js'
import { somar} from './Exercicios/um.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exum', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exdois', (req, res) => {
    const result = subtrair(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})