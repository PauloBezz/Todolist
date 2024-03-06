const { conectar_db } = require("../utils/conectar_db")

function novaCategoria(nome) {

    return new Promise((resolve, reject) => {

        const db = conectar_db()

        const query = "INSERT INTO CATEGORIA (nome) VALUES (?)"

        db.run(query,
            [nome],
            (err) => {
                err ? reject(err) : resolve(200)
            }
        )

    })
}

function recuperarTodasCategoria(){

    return new Promise((resolve , reject) =>{

        const db = conectar_db()
        
        const query = "SELECT * FROM CATEGORIA"

        db.all(query,(err,rows) =>{
            err? reject(err) : resolve(rows)
        })
    })

}

function  recuperarCategoriaPeloNome(nome){

    return new Promise((resolve , reject) =>{
        const db = conectar_db()

        const query = "SELECT * FROM CATEGORIA WHERE nome = ?"

        db.all(query,[nome],(err , rows) =>{
            err? reject(err) : resolve(rows)
        })
    })

}

async function cadastrarCategoriasBases (){

    await novaCategoria("Personal")
    await novaCategoria("Professional")
    await novaCategoria("Academic")
    await novaCategoria("Social")
    await novaCategoria("Completed")
    await novaCategoria("Archived")
    await novaCategoria("Deleted")
    return "ok"
    

}

module.exports = {cadastrarCategoriasBases, recuperarCategoriaPeloNome , recuperarTodasCategoria ,}