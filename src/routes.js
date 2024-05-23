const express = require('express');
const route = express.Router()
const alunoController = require("./controllers/AlunoController")
const turmaController = require("./controllers/TurmaController")
const cors = require('cors')

route.options("*", cors())

//endpoints
route.get('/alunos', alunoController.readyAlunos)//READY
route.get('/alunos/:codigo', alunoController.readyAlunosByCurso)//READY
route.post('/aluno', alunoController.createAluno)//CREATE
route.put('/aluno/:codigo', alunoController.updateAluno)//UPDATE
route.delete('/aluno/:codigo', alunoController.deleteAluno)//DELETE

//endpoints Turma
route.get('/turmas', turmaController.readyTurmas)//READY
route.post('/turma', turmaController.createTurma)//CREATE
route.put('/turma/:codigo', turmaController.updateTurma)//UPDATE
route.delete('/turma/:codigo', turmaController.deleteTurma)//DELETE


module.exports = route