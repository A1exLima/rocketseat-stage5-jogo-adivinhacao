let result = prompt("Adivinhe o número que estou pensando? Entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabens! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas.`)