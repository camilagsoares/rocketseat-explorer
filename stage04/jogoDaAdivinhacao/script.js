let numeroDigitado = prompt("Qual número estou pensando? Entre 0 e 10")

let tentativas = 1;
let numeroAleatorio = Math.round(Math.random() * 10)
console.log(numeroAleatorio)


while (Number(numeroDigitado) != numeroAleatorio) {
    numeroDigitado = prompt("Errou,digite novamente,")
    tentativas++;
}

alert("Parabéns,você adivinhou o número em " + tentativas + " tentativas!")


let result = prompt("Adivinhe um número de 0 a 10");
const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(result) != randomNumber) {
    result = prompt("Erro,tente novamente");
    xAttempts++;
}

alert("Parabens,voce acertou em" + xAttempts + "tentativas")

