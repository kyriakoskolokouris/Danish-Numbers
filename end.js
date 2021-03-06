const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 8

// finalScore.innerHTML = ` Your Score is ${mostRecentScore} /10!`

finalScore.innerHTML =`Your Score is ${100 * mostRecentScore  / 10} % ` 


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})
// Event for the form
saveHighScore = e => {
    e.preventDefault()

    const player = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(player);

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(8)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highscores.html')   
}