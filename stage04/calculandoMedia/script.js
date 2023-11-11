
// const nomeAluno = prompt("Oi,qual o seu nome?");
// const nota1 = Number(prompt("Digite suas notas"));
// const nota2 = Number(prompt("Digite suas notas"));
// const nota3 = Number(prompt("Digite suas notas"));

function avaliaNotas() {

    const mediaNotas = (nota1 + nota2 + nota3) / 3;

    if (mediaNotas >= 7) {
        alert("Parabéns! Sua nota foi" + mediaNotas)
    } else if (mediaNotas < 7) {
        alert("Poxa,sua nota não foi boa. A nota foi:" + mediaNotas)
    }

}

// avaliaNotas();