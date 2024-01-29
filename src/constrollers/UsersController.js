class UsersController {
 /**
  * index - GET para listar vários registros
  * show - GET para exibir registro específico
  * create - POST para criar um registro
  * uptade - PUT para atualizar um registro
  * delete - DELETE para remover um registro
  * 
  * "Boa pratica" limitar a quantidade de variáveis dentro deste arquivo, máximo 5, mínimo 1. 
  */

 create ( request, response ) {
    
    const {name, email, password} = request.body;

    response.json({name, email, password});}
}

module.exports = UsersController;