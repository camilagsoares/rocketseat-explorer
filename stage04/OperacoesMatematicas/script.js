//Operacoes



function operacoesMatematicas(number1, operador, number2) {
    number1 = Number(prompt("Digite um número"));
    number2 = Number(prompt("Digite um número"));
    operador = prompt("digite um operador")

    switch (operador) {
        case "soma":
            operador = "+"
            break
        case "subtracao":
            operador = "+"
            break
    }

}
console.log(operacoesMatematicas(1, "", 2))