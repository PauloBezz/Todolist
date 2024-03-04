const { conectar_db } = require("../utils/conectar_db")

function novoUsuario(nome, tema) {

  return new Promise((resolve, reject) => {
    const db = conectar_db();

    const query = "INSERT INTO USUARIO (nome, tema) VALUES (?, ?)"

    db.run(
      query,
      [nome, tema],
      (err) => {
        err ? reject(err) : resolve(200)
      }
    );
  });

}

function recuperarUsuario() {

  const db = conectar_db();


  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM USUARIO;"

    db.all(query, (err, rows) => {
      err ? reject(err) : resolve(rows)
    })

  })

}

function atualizarUsuario(nome,tema){

  const db = conectar_db()

  return new Promise((resolve, reject) =>{

    if(tema != "claro" && tema !="escuro"){
      reject("O tema precisa ser claro ou escuro")
    }

    const query = "UPDATE USUARIO SET nome = ?, tema = ? WHERE id = ?"
    
    db.run(query,[nome,tema,1] , (err) => {
      console.log(err)
      err? reject(err): resolve(200)
    })

  })

}

module.exports = { novoUsuario, recuperarUsuario, atualizarUsuario }
