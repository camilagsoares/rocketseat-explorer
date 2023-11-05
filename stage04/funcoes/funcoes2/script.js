//funcao anonima pois nao tem nome ou function expression
const sum = function (number1, number2) { //number1 e number2 sao parametros
    let total = number1 + number2
    return total
}

sum(2, 3) //argumentos
sum(4, 7)

let number1 = 34
let number2 = 25
// sum(number1, number2)
// console.log(`O numero 1 eh ${number1}`)
// console.log(`O numero 2 eh ${number2}`)
// console.log(`A soma é ${sum(number1, number2)}`)

function fazerSuco(fruta1,fruta2) { 
    return fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maca')
console.log(copo)


