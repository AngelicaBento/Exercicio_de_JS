import express from 'express'

const app = express()
const port = 3000

app.get('/api/exercicio1', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    res.json({
        message: `resultado: ${num1 + num2}`
    })
})

app.get('/api/exercicio2', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    res.json({
        message: `resultado: ${num1 - num2}`
    })
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})