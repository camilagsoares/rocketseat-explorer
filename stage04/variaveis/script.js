// var
let clima = "quente"
clima = "frio" //atribuindo um novo valor

//const não pode mudar o valor
// console.log(typeof clima)


//typeof para descobrir o tipo da variável



//--------------------------ESCOPO-----------------------------//
//O var é global e local


// {
//     var x = 0;
// }
// console.log(x)

//Const e let sao locais e só funcionam no escopo onde foi criadas

let y = 1;
{
     y = 0;
    console.log('existe y?', y)

}
console.log('existe y depois do bloco?', y) // nao


