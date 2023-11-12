let respostaUsuario;
let items = [];
let index = 0;

while (respostaUsuario != 3) {

    respostaUsuario = Number(prompt(`Olá usuário,digite a opção desejada:

    1. Cadastrar um item na Lista 
    2. Mostrar itens cadastrados 
    3. Sair do programa
    
    `));


    if (respostaUsuario == 1) {
        items[index] = prompt("Digite o nome do item")
        index++;
    }

    else if (respostaUsuario == 2) {
        //verifica se existe,ele retorna a quantidade de elementos
        if (items.length == 0) {
            alert("Não existem itens cadastrados")
        }
        else {
            alert("itens cadastrados" + items)
        }
    }
    else {
        alert("Goodbye")
    }


    console.log(items)
}

