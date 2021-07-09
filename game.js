// Mutable variables
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const qImg = document.getElementById("qImg");



let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let score = 0;
let availableQuestions = [];
// QUESTIONS
let questions = [{
        question: "How is called the number 17 in Danish?",
        choice1: "syvten",
        choice2: "sjutton",
        choice3: "sytten",
        imgSrc : "images/17b.jpeg",
        answer: 3,
    },

    {
        question: "How is called 8 in Danish ?",
        choice1: "atten",
        choice2: "otte",
        choice3: "åtta",
        imgSrc : "/images/17a.png",
        answer: 2,
    },

    {
        question: "How is called 789 in Danish ?",
        choice1: "syv hundrede og ni-og-tres",
        choice2: "seks hundrede og ni-og-firs",
        choice3: "syv hundrede og ni-og-firs",
        imgSrc : "images/17a.png",
        answer: 3,
    },

    {
        question: "How is called 1992 in Danish ?",
        choice1: "nitten hundrede og to-og-halvfems",
        choice2: "tusen ni hundre og nitti­to",
        choice3: "et­tusen nio­hundra­nittio­två",
        imgSrc : "/images/17a.png",
        answer: 1,
    },

    {
        question: "How is called 12345 in Danish ?",
        choice1: "tolv tusind tre hundrede og tre-og-halvtres",
        choice2: "tolv tusind tre hundrede og fem-og-fyrre",
        choice3: "ni-og-halvfjerds",
        imgSrc : "../images/17a.png",
        answer: 2,
    }
    
];

const TOTAL_POINTS = 100;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("end.html");
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    // qImg.innerHTML = `<img src = ${currentQuestion.imgSrC}>`;
 
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "wrong"

        if(classToApply === "correct") {
            incrementScore(TOTAL_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()

        }, 500);
    })
})

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame()