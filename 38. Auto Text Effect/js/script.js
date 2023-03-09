const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  speed = 300 / speedEl.value;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

writeText();
