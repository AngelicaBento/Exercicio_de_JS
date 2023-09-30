const express = require('express')
const ControllerExercicio = require('../controllers/pessoa.js')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/nome/:id', controller.PegarUm)
router.post('/api/pessoa/', controller.PegarTodos)

module.exports = router