const database = require('../database')

module.exports = {
    searchAlunos:() => {
        return new Promise(
            (accepted, rejected) => {
             database.query("SELECT * FROM aluno",(error, result) => {
                if (error){
                    rejected(error)
                    return 
                }
                accepted(result)
             })   
            }
        )
    },

    //Pesquisar ALunos por Cursos

    getAlunosByCurso:(codigo) => {
        return new Promise((accepted, rejected) => {
            database.query(
                `SELECT * FROM aluno WHERE fk_turma = ${codigo}`,(error, result) => {
                    if (error){
                        rejected(error)
                        return
                    }
                    accepted(result) 
                }
            )

        })
    },

    getAlunoById:(id) =>{
        return new Promise((accepted, rejected) => {
            database.query(
                `SELECT * FROM aluno WHERE id = ${id}`,(error, result) => {
                    if (error){
                        rejected(error)
                        return
                    }
                    accepted(result) 
                }
            )
        })
    },

        //Método para cadastrar aluno

        createAluno:(nome, telefone, data, endereco, turma) => {
            return new Promise((accepted , rejected) =>{
                database.query(
                    `INSERT INTO aluno(nome,telefone,dt_nascimento,endereco,fk_turma) VALUES 
                    ('${nome}','${telefone}', '${data}', '${endereco}', ${turma})`, 
                    (error, result) =>{
                        if (error){
                            rejected(error)
                            return
                        }
                        accepted(result)  
                    })
                }
             )
         },
        
         //Método para Atualizar aluno
         updateAluno:(id, nome, telefone, data, endereco) =>{
                return new Promise((accepted, rejected) =>{
                    database.query(
                        `UPDATE aluno SET  nome = '${nome}', telefone ='${telefone}', dt_nascimento = '${data}', endereco ='${endereco}' WHERE id = ${id}`,
                        (error, result) =>{
                            if (error){
                                rejected(error)
                            }
                                accepted(result)
                        }
                    )
                 })
            },

            deleteAluno:(id) =>{
                return new Promise((accepted, rejected) =>{
                    database.query(`DELETE FROM aluno WHERE id = ${id}`, (error, result) =>{
                        if(error){
                            rejected(error)
                        }
                            accepted(result)
                    }
                )
                })
            }


        
}