const express = require("express");
const router = express.Router();
const {recuperarUsuario , atualizarUsuario} = require("../controller/user")

// recupera usuario e tema
router.get("/usuario", async(req,res) =>{

    try{
        const resultado = await recuperarUsuario()
        res.json(resultado[0]).status(200)
    }
    catch(err){
        res.json({Err:err}).status(400)
    }
})

// atualiza nome e tema
router.put("/usuario", async(req,res) =>{

    try{
        const {nome, tema} = req.body

        await atualizarUsuario(nome,tema)
        res.json("Usuario atualizado com sucesso").status(200)
    }
    catch(err){
        res.json({Err:err}).status(400)
    }
})



module.exports = router
