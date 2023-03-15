const container = document.getElementById('container');
const switchBtn = document.getElementById('switch');
const resetBtn = document.getElementById('reset');
const SQUARES = 600;

const getColor = () => {
  let hex = '1234567890ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
};

function board() {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (switchBtn.innerText === 'DRAWING') {
      square.addEventListener('mouseover', () => setColor(square));
      square.addEventListener('mouseout', () => removeColor(square));
    } else {
      square.addEventListener('mouseover', () => {
        setColor(square);
        setTimeout(() => {
          square.style.background = `#FFBF00`;
          square.style.boxShadow = `0 0 2px #FFBF00, 0 0 10px #FFBF00`;
        }, 500);
      });
    }
    container.appendChild(square);
  }
}

board();

const setColor = (element) => {
  const color = getColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = `#1d1d1d`;
  element.style.boxShadow = `0 0 2px #000`;
};

switchBtn.addEventListener('click', () => {
  switchBtn.innerText === 'DRAWING'
    ? (switchBtn.innerText = 'HOVERBOARD')
    : (switchBtn.innerText = 'DRAWING');
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.remove());
  board();
});

resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.remove());
  board();
});
