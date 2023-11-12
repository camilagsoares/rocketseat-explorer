let respostaUsuario;
let items = [];
// let index = 0;

while (respostaUsuario != 3) {

    respostaUsuario = Number(prompt(`Olá usuário,digite a opção desejada:

    1. Cadastrar um item na Lista 
    2. Mostrar itens cadastrados 
    3. Sair do programa
    
    `));


    // if (respostaUsuario == 1) {
    //     let item = prompt("Digite o nome do item");
    //     items.push(item)
    //     // items[index] = prompt("Digite o nome do item")
    //     // index++;
    // }

    // else if (respostaUsuario == 2) {
    //     //verifica se existe,ele retorna a quantidade de elementos
    //     if (items.length == 0) {
    //         alert("Não existem itens cadastrados")
    //     }
    //     else {
    //         alert("itens cadastrados" + items)
    //     }
    // }
    // else {
    //     alert("Goodbye")
    // }


    switch (respostaUsuario) {

        case 1:
            let item = prompt("Digite o nome do item");
            items.push(item)
            break;
        case 2:
            if (items.length == 0) {
                alert("Não existem itens cadastrados")
            }
            else {
                alert("itens cadastrados" + items)
            }
            break;
        case 3:
            alert("Goodbye")
            break;
        default:
            alert("Opção inválida")
    }

    console.log(items)
}

