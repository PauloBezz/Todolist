const express = require("express")
const router = express.Router()

const {criar_tabela_user , criar_tabela_categoria, criar_tabela_tarefa } = require("../controller/criar_tabelas")
const {novoUsuario} = require("../controller/user")
const {cadastrarCategoriasBases} = require("../controller/categoria")


router.post("/primeiro_acesso", async(req,res) =>{

    try{
        const nome = req.body.nome
        const tema = req.body.tema
        
        await criar_tabela_user();
        await novoUsuario(nome,tema);
        await criar_tabela_categoria();
        await cadastrarCategoriasBases();
        await criar_tabela_tarefa()
        .then(() => {
            res.status(200).send("usuario criado com sucesso");
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({Error: err})
    }

})

module.exports = router