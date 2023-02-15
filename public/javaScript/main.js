//Screens
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
//Buttons
const btnTry = document.querySelector(".button-try")
const btnReload = document.querySelector(".button-again")
//Game logic
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Events
btnTry.addEventListener("click", handleTryClick)
btnReload.addEventListener("click", reloadGame)
document.addEventListener("keypress", changeScreenByEnter)

//Functions callbacks
function handleTryClick(event) {
  event.preventDefault(event) //Not Execute Standard event

  const inputGuess = document.querySelector("#guess")

  if (inputGuess.value > 10 || inputGuess.value < 0) {

    alert("⚠️  Escolha um número entre 0 e 10  ⚠️")
  }

    if (Number(inputGuess.value) == randomNumber) {
      toggleScreen() //screen change

      document.querySelector(
        ".screen2 h1"
      ).innerText = `Acertou em ${xAttempts} tentativas`
    }
  xAttempts++
  inputGuess.value = "" //reset input
}

function reloadGame(event) {
  event.preventDefault(event)

  toggleScreen() //screen change
  xAttempts = 1 // reset number of attempts
  randomNumber = Math.round(Math.random() * 10) //recalculate random number
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changeScreenByEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen()
  }
}
