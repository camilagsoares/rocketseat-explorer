/* Prototype */
// console.log(Number('9') + 5)

let string = "12345"
// console.log(Number(string))
// let number = 321
// console.log(String(number))


let word = "Paralelepipedo"
// console.log(word.length) // para ver quantos caracteres tem
let number = 3034
// console.log(String(number).length) // quantos digitos tem um numero

let numero = 503.040393
// console.log(numero.toFixed(2).replace(".",",")) //replace pode trocar o ponto por vírgula

let palavra = "Programar é muito legal"
// console.log(palavra.toUpperCase())
// console.log(palavra.toLowerCase())


let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
// console.log(myArray)

let fraseComTraco = myArray.join("_")
// console.log(fraseComTraco)

let frase = "Eu quero viver"
// console.log(frase.includes("viver"))


// CRIAR ARRAY COM CONSTRUTOR
// let myArrayLetras = ['a','b','c']

// console.log(myArrayLetras)
let myArrayLetras = new Array('a','b','c')
console.log(myArrayLetras)