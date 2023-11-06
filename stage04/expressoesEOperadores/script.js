/* EXPRESSÕES E OPERADORES
- unário
- binário 
- ternário
*/
let number = 1;
// console.log(number + 1) //operador binário
// console.log(--number) //operador unário
// console.log(true ? 'alo' : 'nada') //operador ternario

/* NEW 
- criar um novo objeto */

const age = new Number(23)
const name = new String("camila")
// console.log(age)
// console.log(name)

let dataHoje = new Date('2020-12-01')
// console.log(dataHoje)


/* OPERADORES UNÁRIOS 
-typeof -> para saber o tipo de dado que é
- delete ->deleta uma propriedade do objeto

*/

let nomeAluna = "Camila"
const person = {
    name: "Camila",
    age: 23
}
delete person.age
// console.log(nomeAluna)
// console.log(typeof nomeAluna)

/* OPERADORES ARITMÉTICOS */

//multiplicacao
// console.log(4 * 4)

//divisao
// console.log(4 / 4)

//soma 
// console.log(4 + 4)

//subtracao
// console.log(4 - 4)

//resto da divisao
console.log(11 % 3)

//incremento
let increment = 0
increment++
console.log(increment)


//exponencial
console.log( 3 ** 3)
