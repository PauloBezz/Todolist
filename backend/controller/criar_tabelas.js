//Importa as bibliotecas FileSystem e Path para procurar os arquivos do projeto
const fs = require("fs")
const {resolve} = require("path")

//Importa as query's das tabelas
const user_query = fs.readFileSync(resolve(__dirname , "../"  , "tabelaSQL" , "usuario_query.sql"),'utf-8')
const categoria_query = fs.readFileSync(resolve(__dirname , "../" , "tabelaSQL" , "categoria_query.sql") , 'utf-8')
const tarefa_query = fs.readFileSync(resolve(__dirname , "../" , "tabelaSQL"  , "tarefa_query.sql") , 'utf-8')

//Conecta ao banco
const { conectar_db } = require("../utils/conectar_db")


function criar_tabela_user (){

    return new Promise((resolve, reject) => {
        const db = conectar_db()

        db.run(user_query, (err) => {
            err? reject(err) : resolve(200)
        });
    });

}

function criar_tabela_categoria(){

    return new Promise((resolve, reject) =>{
        const db = conectar_db()

        db.run(categoria_query, (err) => {
            err? reject(err) : resolve(200)
        }) 

    })


}

function criar_tabela_tarefa(){

    return new Promise((resolve, reject) =>{
        const db = conectar_db()

        db.run(tarefa_query, (err) => {
            err? reject(err) : resolve(200)
        }) 

    })


}

module.exports = {criar_tabela_tarefa, criar_tabela_user, criar_tabela_categoria}