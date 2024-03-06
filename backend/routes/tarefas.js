const express = require("express");
const router = express.Router();

const {
  novaTarefa,
  recuperarTarefaTitulo,
  recuperarTodasTarefa,
  recuperarTarefaCategoria,
  deletarTarefa,
  arquivarTarefa,
  editarTarefa,
} = require("../controller/tarefas");

// Inseri uma nova tarefa

router.post("/tarefa", async (req, res) => {
  try {
    const { titulo, dias_semana, descricao, concluido, fk_categoriaNome } =
      req.body;
    const dataPrevistaTermino = new Date(req.body.dataPrevistaTermino);

    await novaTarefa(
      null,
      titulo,
      dataPrevistaTermino,
      dias_semana,
      descricao,
      concluido,
      fk_categoriaNome
    );

    res.status(200).send({ StatusCode: 200, msg: "Tarefa cadastrada com sucesso" });
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

// Resgata todas as terafas

router.get("/tarefa", async (req, res) => {
  try {
    const resultado = await recuperarTodasTarefa();
    res.send(resultado).status(200);

  } catch (err) {
    res.send(err).status(500);
  }
});

// Resgata uma tarefa pelo nome

router.get("/tarefa", async (req, res) => {
  try {
    const resultado = await recuperarTarefaTitulo(req.query.titulo);
    res.send(resultado).status(200);

  } catch (err) {
    res.send(err).status(500);
  }
});

// recuperarTarefaCategoria

router.get("/tarefa/categoria", async (req, res) => {
  try {

    const resultado = await recuperarTarefaCategoria(req.query.categoria);
    res.send(resultado).status(200);

  } catch (err) {
    res.send(err).status(500);
  }
});

router.put("/tarefa/arquivar", async (req, res) => {
  try {
    const resultado = await arquivarTarefa(req.query.id);
    res.send({ "Status Code:": resultado }).status(200);
  } catch (err) {
    console.log(err)
    res.send(err).status(500);
  }
});

router.put("/tarefas/editar", async (req, res) => {
  try {
    const { titulo, dias_semana, descricao, concluido, id } = req.body;

    const resultado = await editarTarefa(
      titulo,
      dias_semana,
      descricao,
      concluido,
      dataPrevistaTermino,
      id
    );

    res.send(resultado).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = router;
