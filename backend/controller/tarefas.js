const { conectar_db } = require("../utils/conectar_db")

function novaTarefa(id, titulo, dataPrevistaTermino, dias_semana, descricao, concluido, fk_categoriaNome) {

    return new Promise((resolve, reject) => {

        const db = conectar_db()

        const query = "INSERT INTO TAREFAS (id, titulo, dataPrevistaTermino, dataCriacao , dias_semana, descricao, concluido, fk_categoriaNome) VALUES (?, ? ,?, ?, ?, ?, ?,?)"

        const dataCriacao = new Date().toISOString().slice(0, 19).replace('T', ' ');
        db.run(query,
            [id, titulo, dataPrevistaTermino, dataCriacao , dias_semana, descricao, concluido, fk_categoriaNome],
            (err) => {
                err ? reject(err) : resolve(200)
            }
        )

    })
}

function recuperarTodasTarefa(){

    return new Promise((resolve , reject) =>{

        const db = conectar_db()
        
        const query = "SELECT * FROM TAREFAS"

        db.all(query,(err,rows) =>{
            err? reject(err) : resolve(rows)
        })
    })

}

function recuperarTarefaTitulo(titulo){

    return new Promise((resolve , reject) =>{
        const db = conectar_db()
        const query = "SELECT * FROM TAREFAS WHERE titulo = ?"

        db.all(query,[titulo],(err , rows) =>{
            console.log(rows)
            err? reject(err) : resolve(rows)
        })
    })

}

function recuperarTarefaCategoria(fk_categoriaNome){

    return new Promise((resolve , reject) =>{
        const db = conectar_db()
        const query = "SELECT * FROM TAREFAS WHERE fk_categoriaNome = ?"

        db.all(query,[fk_categoriaNome],(err , rows) =>{
            err? reject(err) : resolve(rows)
        })
    })

}

function deletarTarefa(id){

    return new Promise((resolve , reject) =>{
        const db = conectar_db()
        const query = "DELETE FROM TAREFAS WHERE id = ?"

    })
}

function arquivarTarefa(id){

    return new Promise((resolve, reject) => {
        const db = conectar_db();
        const query = "UPDATE TAREFAS SET fk_categoriaNome = ?, dataArquivacao = ? WHERE id = ?";
    
        // Obtém a data atual e formata no formato desejado
        const dataAtual = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
        db.run(query, ["Archived", dataAtual, id], (err) => {
            err ? reject(err) : resolve(200);
        });
    });
}

function editarTarefa(titulo,dias_semana,descricao,concluido,dataPrevistaTermino ,id){

    return new Promise((resolve , reject) => {
        const db = conectar_db()
    
        const query = "UPDATE TAREFAS SET titulo = ? , dias_semana = ? , descricao = ? , concluido = ?, dataPrevistaTermino = ? where id = ?"
    
        db.run(query,[titulo,dias_semana,descricao,concluido,dataPrevistaTermino, id],(err , rows) =>{
            err? reject(err) : resolve(rows)
        })
    })

}

module.exports = { novaTarefa, recuperarTarefaTitulo, recuperarTodasTarefa, recuperarTarefaCategoria, deletarTarefa, arquivarTarefa ,editarTarefa}