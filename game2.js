// Mutable variables
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-container"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");



let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let score = 0;
// let availableQuestions = [];
// QUESTIONS
let questions = [ 

    {
        question: "How is called 8 in Danish ?",
        choiceA: "atten",
        choiceB: "otte",
        choiceC: "åtta",
        imgSrc: "/images/17a.png",
        correct: "B",
    },

    {
        question: "How is called the number 17 in Danish?",
        choiceA: "syvten",
        choiceB: "sjutton",
        choiceC: "sytten",
        imgSrc: "images/17b.jpeg",
        correct: "C",
    },

    {
        question: "How is called 789 in Danish ?",
        choiceA: "syv hundrede og ni-og-tres",
        choiceB: "seks hundrede og ni-og-firs",
        choiceC: "syv hundrede og ni-og-firs",
        imgSrc: "images/17a.png",
        correct: "C",
    },

    {
        question: "How is called 1992 in Danish ?",
        choiceA: "nitten hundrede og to-og-halvfems",
        choiceB: "tusen ni hundre og nitti­to",
        choiceC: "et­tusen nio­hundra­nittio­två",
        imgSrc: "/images/17a.png",
        correct: "A",
    },

    {
        question: "How is called 12345 in Danish ?",
        choiceA: "tolv tusind tre hundrede og tre-og-halvtres",
        choiceB: "tolv tusind tre hundrede og fem-og-fyrre",
        choiceC: "ni-og-halvfjerds",
        imgSrc: "../images/17a.png",
        correct: "B",
    }
    
];
const lastQuestion = questions.length - 1;
const TOTAL_POINTS = 100;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    // availableQuestions = [...questions];
    renderQuestion()
}

renderQuestion = () => {
    let q = questions[questionCounter];
    question.innerHTML = `<p>${q.question}</p>`;


    if(lastQuestion === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("end.html");
    }

    questionCounter++

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    
    const questionsIndex = q.length;
    currentQuestion = questions[questionsIndex];
    question.innerHTML = `<p>${q.question}</p>`;

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

    questions.splice(questionsIndex, 1);


    acceptingAnswers = true;
}

function checkAnswer(answer){
    if( answer == questions[questionCounter].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(questionCounter < lastQuestion){
        questionCounter++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    choices.style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    choices.style.backgroundColor = "#f00";
}

// choices.forEach(choice => {
//     choice.addEventListener("click", (e) => {
//         console.log("click");

//         if(!acceptingAnswers) return

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset["number"];

//         let classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "wrong"

//         if(classToApply === "correct") {
//             incrementScore(TOTAL_POINTS);
//         }

//         selectedChoice.parentElement.classList.add(classToApply);

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply);
//             renderQuestion()

//         }, 1500);
//     })
// })

// incrementScore = num => {
//     score +=num;
//     scoreText.innerText = score;
// }

startGame()