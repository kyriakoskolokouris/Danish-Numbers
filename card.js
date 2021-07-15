
const cards = document.querySelectorAll('.number-card');
const audio = document.querySelectorAll(".audio");




function flipCard() {
  this.classList.toggle('flip');
}


cards.forEach(card => card.addEventListener('click', flipCard,));
