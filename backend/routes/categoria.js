const express = require("express")
const router = express.Router()

const {recuperarTodasCategoria , recuperarCategoriaPeloNome} = require("../controller/categoria")

// Pega todas as categorias
router.get("/categoria/todas", async(req,res) =>{

    try{
        const resultado =  await recuperarTodasCategoria()
        res.send(resultado).status(200)
    }
    catch(err){
        res.send(err).status(500)
    }
})

// Pega as categorias pela query
router.get("/categoria", async (req, res) => {
    try {
        const nome = req.query.nomeCategoria; 
        const resultado = await recuperarCategoriaPeloNome(nome);
        res.status(200).send(resultado); 
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router
