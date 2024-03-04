const express = require("express")
const app = express()
const primeiro_acesso = require("./routes/primeiro_acesso")
const usuario_rota = require("./routes/user")
const categoria_rota = require("./routes/categoria")
const tarefa_rota = require("./routes/tarefas")

// Pacotes de middleware

const cors = require("cors")

//Variaveis de env

const server_port = process.env.SERVER_PORT || 5500


//middlewares

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Rotas
app.use("", primeiro_acesso)
app.use("", usuario_rota)
app.use("", categoria_rota)
app.use("", tarefa_rota)

app.listen(server_port, () =>{console.log("Servidor aberto na porta:", server_port)})
