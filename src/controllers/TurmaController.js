const { response } = require("express");
const TurmaSevices = require("../services/TurmaServices");
const TurmaServices = require("../services/TurmaServices");

module.exports = {
    readyTurmas: async (request, response) => {
        let json = { error: "", result: [] }

        let turmas = await TurmaServices.searchTurmas()

        for (let i in turmas) {
            json.result.push({
                id: turmas[i].id,
                nome: turmas[i].nome,
                descricao: turmas[i].descricao,
                quantidade_alunos: turmas[i].quantidade_alunos

            })
        }
        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    },


    createTurma: async (request, response) => {

        let json = { error: "", result: {} }

        let nome = request.body.nome
        let descricao = request.body.descricao
        let quantidadealunos = request.body.quantidadealunos

        if (nome && descricao && quantidadealunos>=0) {

            let turma = await TurmaServices.createTurma(nome, descricao, quantidadealunos)
         
            json.result = {
                id: turma.insertId,
                nome,
                descricao,
                quantidadealunos
            }
        } else {
            json.error = "Incomplete Fields!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.status(201).json(json)

    },

    updateTurma: async (request, response) => {
        let json = { error: "", result: {} }

        let id = request.params.codigo
        let nome = request.body.nome
        let descricao = request.body.descricao
        let quantidadealunos = request.body.quantidadealunos

        if (id) {
            await TurmaServices.updateTurma(id, nome, descricao, quantidadealunos)

            json.result = { id, nome, descricao, quantidadealunos }
        } else {
            json.error = "Error ID!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    },

    deleteTurma: async (request, response) => {

        let json = { error: "", result: "" }

        let id = request.params.codigo

        if (id) {
            await TurmaServices.deleteTurma(id)
            json.result = `turma deleted successfully! ID:${id}`
        } else {
            json.error = "Error ID!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    }






}
