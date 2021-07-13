const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// const gold = highScores[0];
// const silver = highScores[1];
// const bronze = highScores[2];

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} : ${score.score} / 10 </li>`
}).join("");

// gold.style.content = "#f9ad0e;"

function medals (score) {
  highScores[0].innerHTML = 
}

let gold = 0;
let silver = 0;
let bronze = 0;

console.log(gold);

highScores.forEach(highscore => {
  if (highscore.score > gold){
    gold = highscore;
  } if (highscore === gold){
    return;
   } if (highscore > silver){
     silver = highscore;
   } if (highscore === gold || silver){
     return;
   } if (highscore > bronze){
     bronze = highscore;
   }

//    console.log("1", gold, "2", silver, "3", bronze);
// })

// highScores.forEach(score => {
//   if (score === gold){
//    return;
//   } if (score > silver){
//     silver = score;
//   }
// })



// const facebookBtn = document.querySelector(".facebook-btn");
// const twitterBtn = document.querySelector(".twitter-btn");
// const pinterestBtn = document.querySelector(".pinterest-btn");
// const linkedinBtn = document.querySelector(".linkedin-btn");
// const whatsappBtn = document.querySelector(".whatsapp-btn");

// function init() {
//   const pinterestImg = document.querySelector(".pinterest-img");

//   let postUrl = encodeURI(document.location.href);
//   let postTitle = encodeURI("Hi everyone, please check this out: ");
//   let postImg = encodeURI(pinterestImg.src);

  

//   facebookBtn.setAttribute(
//     "href",
//     `https://www.facebook.com/sharer.php?u=${postUrl}`
//   );

//   twitterBtn.setAttribute(
//     "href",
//     `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
//   );

//   pinterestBtn.setAttribute(
//     "href",
//     `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
//   );

//   linkedinBtn.setAttribute(
//     "href",
//     `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
//   );

//   whatsappBtn.setAttribute(
//     "href",
//     `https://wa.me/?text=${postTitle} ${postUrl}`
//   );
// }

// init();

// /* 
// Social Share Links:
// WhatsApp:
// https://wa.me/?text=[post-title] [post-url]
// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]
// Twitter:
// https://twitter.com/share?url=[post-url]&text=[post-title]
// Pinterest:
// https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
// LinkedIn:
// https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]