let numeroDigitado = prompt("Qual número estou pensando? Entre 0 e 10")

let tentativas = 1;
let numeroAleatorio = Math.round(Math.random() * 10)
console.log(numeroAleatorio)


while (Number(numeroDigitado) != numeroAleatorio) {
    numeroDigitado = prompt("Errou,digite novamente,")
    tentativas++;
}

let palavra;
if(tentativas > 2){
    palavra = "tentativas"
} else {
    palavra =  "tentativa"
}

alert("Parabéns,você adivinhou o número em " + tentativas + palavra)

