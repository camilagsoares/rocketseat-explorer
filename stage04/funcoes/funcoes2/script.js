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

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maca')
// console.log(copo)




let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject;
}
// console.log(subject)
// console.log(createThink(subject))

// sayMayName();

// function sayMayName() {
//     // console.log("Camila")
// }


//  ---------------------- ARROW FUNCTION ----------------------
// const sayMayName = (name) => {
//     console.log(name)
// }

// sayMayName("camila!");


// ------------------------ CALLBACK FUNCTION -----------------------
// function sayMayName(name) {
//     console.log("Antes de executar a função callback")
//     name()
//     console.log("Depois de executar a função callback")
// }

// sayMayName(() => {
//     console.log("Estou em uma callback")
// })

/* Uma callback é basicamente passar uma função como parâmetro de outra função */

// -----------------------FUNCTION CONSTRUCTOR ---------------------------

//cria um novo objeto
//acessa com o this
function Person(name) { 
    this.name = name
    this.walk = function (){
        return this.name + ' está andando'
    }
}

const camila = new Person("Camila")
console.log(camila.walk())