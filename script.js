'use strict'

// document.querySelector('.message').textContent = '🎉 Número correto'

const secretNumber = Math.trunc(Math.random() * 20 + 1)
document.querySelector('.number').textContent = secretNumber
let score = 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Número incorreto'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Número correto'
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Muito alto'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '🙃 Você perdeu o jogo!'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Muito baixo'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '🙃 Você perdeu o jogo!'
      document.querySelector('.score').textContent = 0
    }
  }
})
