const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
top3 = highScores.slice(0, 3)

highScoresList.innerHTML =
    highScores.map(player => {
        return `<li class="high-score">${player.name} : ${100 * player.score / 10}  % </li>`
    }).join("");

localStorage.clear();