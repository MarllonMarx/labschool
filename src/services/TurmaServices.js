
const database = require('../database')


module.exports ={

    searchTurmas:() => {
        return new Promise(
            (accepted, rejected) => {
             database.query("SELECT * FROM turma",(error, result) => {
                if (error){
                    rejected(error)
                    return 
                }
                accepted(result)
             })   
            }
        )
    },
        searchTurmaById:(codigo) => {
            return new Promise((accepted, rejected) => {
                database.query(`SELECT * FROM turma WHERE id = ${codigo}`,(error,result) => {
                    if (error){
                        rejected(error)
                        return 
                    }
                    accepted(result)
                }
                )
            })
        },
   
    createTurma:(nome, descricao, quantidadealunos) => {
        return new Promise ((accepted, rejected) => {
            database.query(`INSERT INTO turma(nome , descricao, quantidade_alunos) VALUES ('${nome}','${descricao}',${quantidadealunos})`,
            (error, result) =>{
                if (error){
                    rejected(error)
                    
                }
                accepted(result) 
            })
        })
    },

    updateTurma:(id,nome, descricao, quantidadealunos) => {
        return new Promise ((accepted, rejected) => {
            database.query(`UPDATE turma SET nome = '${nome}', descricao = '${descricao}', quantidade_alunos = ${quantidadealunos} WHERE id = '${id}'`,(error, result) =>{
                if (error){
                    rejected(error)
                    return
                }
                    accepted(result)
            }
            )
        })
    },

    
    deleteTurma:(id) =>{
        return new Promise((accepted, rejected) =>{
            database.query(`DELETE FROM turma WHERE id = ${id}`, (error, result) =>{
                if(error){
                    rejected(error)
                    return
                }
                    accepted(result)
            }
        )
        })
    },

    //Método para adicionar quantidade de alunoa a turma
    AddAlunos: (id) =>{
        return new Promise((accepted, rejected) =>{
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos + 1 WHERE id = ${id}`, 
            (error, result) =>{
                if(error){
                    rejected(error)
                    return
                }
                    accepted(result)
            })
        })

    },

    DelAlunos: (id) =>{
        return new Promise((accepted, rejected) =>{
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos - 1 WHERE id = ${id}`, 
            (error, result) =>{
                if(error){
                    rejected(error)
                    return
                }
                    accepted(result)
            })
        })

    }
    //Método paar remover quantidade de alunos a turma
    





    

}