const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

function getRandomLower() {
  // 97 - 122 lowercase char code
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  // 65 - 90 uppercase char code
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // 48-57 number char code
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%&?';
  const idx = Math.floor(Math.random() * symbols.length);
  return symbols[idx];
}

// shuffle string
function shuffle(string) {
  let a = string.split('');
  let n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
}

const random = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return '';
  }

  if (length > 20) {
    return 'MAX LENGTH -> 20';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += random[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return shuffle(finalPassword);
}

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const upper = uppercaseEl.checked;
  const lower = lowercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(lower, upper, number, symbol, length);
});

clipboardEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
});
