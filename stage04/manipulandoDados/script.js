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
// console.log(myArrayLetras)


//CONTAR ELEMENTOS DE UM ARRAY
// console.log(["a","b","c"])

//Transformar string(os caracteres) em elementos de um array
let wordEmArray = "manipulacao"
// console.log(wordEmArray)
// console.log(Array.from(wordEmArray))

//MANIPULANDO ARRAY
let techs = ["html", "css", "js"]
/* Adicionar um item no fim */ techs.push("Node.js")
/* Adicionar um item no começo */ techs.unshift("Sass")
/* Remover do final*/ techs.pop()
/* Remover do começo */ techs.shift()
// /* Pegar somente */ console.log(techs.slice(1,3)) 
//o slice nao ta modificando o array e sim retornando oq to pedindo
//primeiro argumento é a posição de inicio que quero retirar,segundo argumento é qual a posicao final

/* Adicionar um item no começo */ techs.unshift("Sass")
/*Encontrar a posição de um elemento */
console.log(techs.indexOf('css'))


// console.log(techs)