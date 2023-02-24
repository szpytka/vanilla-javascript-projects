const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// init words
let words = data;

// init word
let randomWord;

// init score
let score = 0;

// init time
let time = 10;

// focus text on start
text.focus();

// start counting down
const timeInterval = setInterval(updateTime, 1000);

// init difficulty / set
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// set localstorage difficulty
difficultySelect.value = difficulty;

// generate random word from database
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to dom
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// game over / endscren
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onClick="location.reload()">Reload Game</button>
  `;
  endgameEl.style.display = 'flex';
}

addWordToDOM();

// event listeners

//typing
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = '';
    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 4;
    }
  }
});

// settings btn hide
settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});

// settings select difficulty
settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  console.log(difficulty);
  localStorage.setItem('difficulty', difficulty);
});
