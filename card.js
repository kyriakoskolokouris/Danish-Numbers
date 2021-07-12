const cards = document.querySelectorAll('.number-card');
const keys = document.querySelectorAll(".key");


function flipCard() {
  this.classList.toggle('flip');
  
}

// function playSound(e) {
//   const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if(!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   console.log("Show me", e);

// };


// cards.forEach(card => card.addEventListener('click', flipCard,));

keys.forEach(key => key.addEventListener('click', function(e){
console.log(e);
}));



// cards.forEach(card => card.addEventListener("click", playSound));


