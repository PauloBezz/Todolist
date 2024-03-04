const sqlite = require("sqlite3")
const {resolve} = require("path")

function conectar_db (){

    const db = new sqlite.Database(resolve(__dirname, "../"  , "database.db"),(err) => {
        if(err){return "Erro ao conectar ao banco de dados"}
    })

    return db
}

module.exports = {conectar_db}