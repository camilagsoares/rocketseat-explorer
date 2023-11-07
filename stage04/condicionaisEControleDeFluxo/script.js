/* Controle e fluxo da aplicação */
// console.log('a')
// console.log('b')

/* If...else */

let temperature = 36.5
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
    console.log("Febre alta")
} else if (mediumTemperature) {
    console.log("Febre moderada")
} else {
    console.log("Saudavel")
}