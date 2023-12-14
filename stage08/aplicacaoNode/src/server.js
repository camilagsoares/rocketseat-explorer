import express, { json } from 'express';

const app = express();
const PORT = 3000;

app.use(json())


// express ajuda a gerenciar as requisições HTTP
// request - requisicao que o backend faz baseado nas regras que eu criar
// response - resposta que envio para o cliente

app.get("/message/:id/:user", (request, response) => {
    // outra forma de fazer: const { params } = request;
   
    const { id , user}  = request.params

    response.send(`Id da mensagem ${id}
    
    Usuario ${user}  
    `)
});

//QUERY PARAMS
//http://localhost:3000/users?page=5&limit=10
app.get("/users", (request,response) => {
    const { page,limit } = request.query;

    response.send(`Página ${page}. Limite ${limit}`)
})

app.listen(PORT, () => console.log(`Server is running ${PORT}`));