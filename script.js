'use strict'

// document.querySelector('.message').textContent = '🎉 Número correto'

const secretNumber = Math.trunc(Math.random() * 20 + 1)

let score = 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  //Quando não há entrada
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Número incorreto'

    //Quando o jogador ganha
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Número correto'
    document.querySelector('.number').textContent = secretNumber
    //Manipulação de CSS
    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    //Quando o jogador perde
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Número alto'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '🙃 Você perdeu o jogo!'
      document.querySelector('.score').textContent = 0
    }

    //Quando o jogador perde
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Número baixo'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '🙃 Você perdeu o jogo!'
      document.querySelector('.score').textContent = 0
    }
  }
})
