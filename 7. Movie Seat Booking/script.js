const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const isPicked = document.getElementById('movie-picked');
const isNotPicked = document.getElementById('movie-not-picked');
const btn = document.querySelector('button');
let ticketPrice = parseInt(movieSelect.value);
populateUI();

// Save Selected Movie Index and Price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update Total and Count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // Copy Selected seats into an array
  // Map Through Array
  // Return a new array indexes
  // Local Storage Save
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerHTML = selectedSeatsCount;
  total.innerHTML = selectedSeatsCount * ticketPrice;
}

// Get Data From LocalStorage and Populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
      isPicked.classList.remove('hide');
      isNotPicked.classList.add('hide');
      btn.classList.remove('visibility-hide');
    });
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    ticketPrice = selectedMoviePrice;
    updateSelectedCount();
  }
}

// Movie Select Event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  if (ticketPrice == 0) {
    isPicked.classList.add('hide');
    isNotPicked.classList.remove('hide');
    btn.classList.add('visibility-hide');
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    selectedSeats.forEach((seat) => {
      seat.classList.remove('selected');
    });
  } else {
    isPicked.classList.remove('hide');
    isNotPicked.classList.add('hide');
    btn.classList.remove('visibility-hide');
  }
  // Initial count and total set
  updateSelectedCount();
});

// Seat Click Event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') &&
    ticketPrice !== 0
  ) {
    if (ticketPrice != 0) {
      e.target.classList.toggle('selected');
      updateSelectedCount();
    }
  }
});
