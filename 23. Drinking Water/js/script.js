const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// highlight cups by clicking logic

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  // updating big cup
  updateBigCup();
}

// update big cup
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  console.log(totalCups);
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${((fullCups / totalCups) * 100).toFixed('1')}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    remained.style.height = `50px`;
    liters.innerText = `${3 - (250 * fullCups) / 1000}L`;
  }
}
