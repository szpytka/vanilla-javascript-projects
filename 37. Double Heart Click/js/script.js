const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
const button = document.querySelector('button');

localStorage.setItem;

let timer = localStorage.getItem('times');
times.innerHTML = timer;

loveMe.addEventListener('dblclick', (e) => {
  const heart = `<i class="fas fa-heart"></i>`;
  loveMe.innerHTML = heart;
  timer++;
  localStorage.setItem('times', timer);
  times.innerHTML = timer;
  setTimeout(() => {
    loveMe.innerHTML = '';
  }, 550);
});

button.addEventListener('click', () => {
  localStorage.setItem('times', 0);
  timer = 0;
  times.innerHTML = timer;
});
