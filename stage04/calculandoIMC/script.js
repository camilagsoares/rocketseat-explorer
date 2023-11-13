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

function printPatientIMC(patient) {
    return `Paciente ${patient.name} possui o IMC de ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}
    `
}

printPatientIMC(pacients[0])

for (let patient of pacients) {
    let IMCmessage =  printPatientIMC(patient)
    alert(IMCmessage)

}

// for(let index = 0; index < pacients.length;index++){
//     listPacients[index] = pacients[index].name
// }

// const patientsNames = []
// alert(pacients[0].name)


// for(let patient of pacients){
//     listPacients.push(patient.name)
// }


// function calculaImc() {
//     const calculo = weight / (height * height);
//     switch (pacients) {
//         case 'Luiz':
//             calculo = pacients[0].weight / (pacients[0].height * pacients[0].height);
//             break;
//         case 'Alexandra':
//             calculo = pacients[1].weight / (pacients[1].height * pacients[1].height);

//             break;
//         case 'Carlos':
//             calculo = pacients[2].weight  / (pacients[2].height  * pacients[2].height);

//             break;
//     }

//     alert('Paciente' + pacients[index].nome + "é o IMC desse paciente")
// }

// calculaImc();

