import { Router } from "express";
import UsersController from "../controllers/UsersController.js";

const usersRoutes = Router();


// express ajuda a gerenciar as requisições HTTP
// request - requisicao que o backend faz baseado nas regras que eu criar
// response - resposta que envio para o cliente

usersRoutes.get("/message/:id/:user", (request, response) => {
    // outra forma de fazer: const { params } = request;
    const { id , user}  = request.params

    response.send(`Id da mensagem ${id}
    
    Usuario ${user}
    `)
});

usersRoutes.post("/", async (request, response) => {
    
})

export default usersRoutes;

//exportando pra quem quiser usar o arquivo