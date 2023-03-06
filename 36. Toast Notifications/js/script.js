const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const colors = ['#ffd700', '#daa520', '#b8860b', '#f4c430'];

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

// create notification
function createNotification() {
  const notif = document.createElement('div');
  notif.className = 'toast';
  notif.innerText = messages[Math.floor(Math.random() * messages.length)];
  notif.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.classList.add('remove');
    setTimeout(() => {
      notif.remove();
    }, 1000);
  }, 3000);
}

button.addEventListener('click', createNotification);
