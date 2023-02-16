//Screens
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
//Buttons
const btnTry = document.querySelector(".button-try")
const btnReload = document.querySelector(".button-again")
//Game logic
const tentativeMessage = document.querySelector(".tentative-message")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
let arrayMessage = [
  "Quase acertou, tente mais uma vez 🙌",
  "Não foi dessa vez, continue tentando 🥲",
  "Na próxima você acerta 👌",
  "Faltou pouco, tente novamente 😝",
  "Não desista, está quase lá 🏃‍♂️",
  "Faltou um fio de cabelo para acertar 😣",
  "Está quase, mais uma vez 😗",
  "Tente novamente 😉",
  "Mais algumas tentativas você consegue 😊",
  "Quase profissional, continue tentando 👍",
  "Persista mais um pouco, mais uma vez 😲",
]

//Events
btnTry.addEventListener("click", handleTryClick)
btnReload.addEventListener("click", reloadGame)
document.addEventListener("keypress", changeScreenByEnter)

//Functions callbacks
function handleTryClick(event) {
  event.preventDefault(event) //Not Execute Standard event

  const inputGuess = document.querySelector("#guess")

  if (inputGuess.value > 10 || inputGuess.value < 0) {
    //Options Gap Validation

    alert("⚠️  Escolha um número entre 0 e 10  ⚠️")
    --xAttempts
  } else if (Number(inputGuess.value) == randomNumber) {
    toggleScreen() //screen change

    document.querySelector(
      ".screen2 h1"
    ).innerText = `Acertou em ${xAttempts} tentativas 🥳`
  } else {
    let randomArrayMessage = Math.round(Math.random() * 10)

    if (inputGuess.value != ""){

      tentativeMessage.innerText = arrayMessage[randomArrayMessage]
      
      // If input has a value, it increments the number of attempts, otherwise it does not increment
      xAttempts++

    }
  }

  if (inputGuess.value == "") {
    tentativeMessage.innerText = "Insira um valor 🤖"
  }

  inputGuess.value = "" //reset input
}

function reloadGame(event) {
  event.preventDefault(event)

  toggleScreen() //screen change
  xAttempts = 1 // reset number of attempts
  randomNumber = Math.round(Math.random() * 10) //recalculate random number
  tentativeMessage.innerText = "" //Clear attempt messages
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changeScreenByEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    reloadGame(event)
  }
}
