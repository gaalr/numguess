'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // 1. No proper input:
  if (!guess) {
    document.querySelector('.message').textContent = 'Kérlek számot adj meg!';
    document.querySelector('.message').style.fontSize = '3rem';

    // 2. Proper guess:
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Gratulálok, eltaláltad a számot! 🥳';
    document.querySelector('.message').style.textAlign = 'center';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.fontSize = '3rem';
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('body').style.backgroundColor = '#fd7e14';

    // 3. Implementing high score:
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 4. When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Túl sok!' : 'Túl kevés!';
      score--;
      document.querySelector('.message').style.fontSize = '3rem';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Sajnos vesztettél....';
      document.querySelector('.header').style.backgroundColor = '#adb5bd';
      document.querySelector('.main').style.backgroundColor = '#adb5bd';
    }
  }
});

// 5. Resetting the game:
document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.message').textContent = 'Írd be a számot!';
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.textAlign = 'center';
  document.querySelector('.message').style.textAlign = 'center';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#a5d8ff';
  document.querySelector('.number').style.width = '15rem';
});
