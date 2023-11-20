const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++

}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//o evento é o click e  o que vai reagir a esse evento que está escutando é a função handleTryClick
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    xAttempts = 1;

})