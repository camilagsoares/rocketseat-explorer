/* Controle e fluxo da aplicação */
// console.log('a')
// console.log('b')







/* If...else */

let temperature = 36.5
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

// if (highTemperature) {
//     console.log("Febre alta")
// } else if (mediumTemperature) {
//     console.log("Febre moderada")
// } else {
//     console.log("Saudavel")
// }






/* Switch */

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break //mostra que o bloco acabou
        case '-':
            result = number1 - number2
            break
        default:
            console.log('default')
            break
    }
    return result

}

// console.log(calculate(3,'+',5))







/* throw  - Significa disparar/lançar */

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é obrigatorio"
    }
    console.log("Depois do erro")
}


/* try...catch */

try { 
    sayMyName()
} catch(e) {  //catch captura o erro
    console.log(e)
}

console.log("apos o erro")