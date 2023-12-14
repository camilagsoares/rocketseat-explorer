import express, { json } from 'express';

const app = express();
const PORT = 3000;

app.use(json())


// express ajuda a gerenciar as requisições HTTP
// request - requisicao que o backend faz baseado nas regras que eu criar
// response - resposta que envio para o cliente

app.get("/message/:id", (request, response) => {
    // outra forma de fazer: const { params } = request;
   
    const id  = Number(request.params.id)

    response.send(`Id da mensagem ${id}`)
});

app.listen(PORT, () => console.log(`Server is running ${PORT}`));