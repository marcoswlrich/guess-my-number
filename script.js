'use strict'

// document.querySelector('.message').textContent = '🎉 Número correto'

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    document.querySelector('message').textContent = '⛔ Número incorreto'
  }
})
