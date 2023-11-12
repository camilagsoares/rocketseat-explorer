lista = {
    nome: "Camila",
    idade: 23,
    peso: 52,
    altura: 1.63

}

const pacients = [
    {
        name: 'Luiz',
        age: 20,
        weight: 100,
        height: 190
    },
    {
        name: 'Alexandra',
        age: 27,
        weight: 70,
        height: 170
    },
    {
        name: 'Carlos',
        age: 42,
        weight: 90,
        height: 180
    }
];


let listPacients = [];
// for(let index = 0; index < pacients.length;index++){
//     listPacients[index] = pacients[index].name
// }

// const patientsNames = []
// alert(pacients[0].name)


// for(let patient of pacients){
//     listPacients.push(patient.name)
// }


for(patient of pacients){
    listPacients.push(patient.name)
}