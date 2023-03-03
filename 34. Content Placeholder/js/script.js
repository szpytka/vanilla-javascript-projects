const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML = `<img
          src="https://source.unsplash.com/random/400x400"
          alt="random image"
        />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          similique.`;
  profileImg.innerHTML = `<img
              src="https://randomuser.me/api/portraits/men/24.jpg"
              alt="random profile image"
            />`;
  name.innerHTML = `John Doe`;
  date.innerHTML = `Oct 08, 2022`;

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

setTimeout(() => {
  getData();
}, 1500);
