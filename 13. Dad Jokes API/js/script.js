const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// functions

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const respond = await fetch('https://icanhazdadjoke.com', config);
  const data = await respond.json();
  jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then((respond) => respond.json())
//     .then((data) => {
//       jokeEl.innerHTML = `${data.joke}`;
//     });
// }

// event listener

jokeBtn.addEventListener('click', generateJoke);
