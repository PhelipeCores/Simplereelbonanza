

let balance = 10000
const bet = 10
const winningNumbers = [5, 12, 19, 27,]
const prize = 100

const randomNumber = randomNumberGenerator(); // Get random number between 1 and 30






function randomNumberGenerator() {
  return Math.trunc(Math.random() * 30) + 1
}

document.querySelector('.spin').addEventListener('click', function () {
  // Subtract the bet amount from the balance
  balance -= bet

  const randomNumber = randomNumberGenerator()
  document.querySelector('.number').textContent = randomNumber

  if (winningNumbers.includes(randomNumber)) {
    // If the player wins, add the prize amount to the balance
    balance += prize;
    document.querySelector('.win').textContent = `You win ${prize}€ `,
    document.querySelector('number').style.backgroundColor = '#222'
  } else {
    document.querySelector('.win').textContent ='Keep Spinning!'
  }

  // Update the balance on the page
  document.querySelector('.balance').textContent = `Balance: ${balance} € `
})

  document.querySelector('.bet').textContent = `Bet: ${bet} € `


  