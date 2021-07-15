const cards = document.querySelectorAll('.number-card');
const audio = document.querySelectorAll("audio[data-key]");
const keys = document.querySelectorAll('img[data-key]');


function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));


// function playSound(e) {
//   console.log(e);

 
// }


// keys.forEach(key => key.addEventListener('click', playSound));