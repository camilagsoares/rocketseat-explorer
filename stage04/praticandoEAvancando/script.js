// delcaracao

var names

//atribuido o valor
names = "Mayk"


//tipo de dado que a variável possui
// console.log(typeof names)



//Agrupamento de declarações
// let age, isHuman
// age = 18
isHuman = true

// console.log(names,age,isHuman)

// concatenando
// console.log(" O " + names + ' tem ' + age + ' anos')

//interpolando
// console.log(`O ${names} tem ${age} anos`)


/*                       OBJETOS                     */
const person = {
    name: 'Mayk',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

// console.log(person.name) // acessando o name do objeto person


/*                       ARRAY                     */

const animals = ['lion', 'cat', 'monkey', {
    name: 'cat', age: 3
}]
//  console.log(animals[3].name)
//  console.log(animals.length)
//length mostra o tamanho do array

// let weight;
// console.log(typeof weight)

// let name = "Camila";
// let age = 23
// let stars = 23.7
// let isSubscribed = true

//float é um numero quebrado


let student = {
    name: 'Camila',
    age: 23,
    isStudent: true,
    weight: 53
};

const aluno = {
    name: 'Joao',
    age: 21,
    isStudent: true,
    weight: 78
}
// students = [aluno]

let students = [];
students = [student]
students[1] = aluno
console.log(students[0])

// console.log(students[0])

// console.log(students.name)

// console.log(`${students.name} de idade ${students.age} pesa ${students.weight} kg.`)