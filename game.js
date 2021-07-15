const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const countdownTimer = document.getElementById("countdowntimer");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const timeLeftDisplay = document.getElementById("time-left");

// create our questions
let questions = [{
        question: "How is called 5 in Danish ?",
        choiceA: "femten",
        choiceB: "fem",
        choiceC: "femm",
        correct: "B",
    },

    {
        question: "How is called 8 in Danish ?",
        choiceA: "atten",
        choiceB: "otte",
        choiceC: "åtta",
        correct: "B",
    },

    {
        question: "How is called the number 13 in Danish?",
        choiceA: "tretten",
        choiceB: "treten",
        choiceC: "træten",
        correct: "A",
    },

    {
        question: "How is called the number 17 in Danish?",
        choiceA: "syvten",
        choiceB: "sjutton",
        choiceC: "sytten",
        correct: "C",
    },

    {
        question: "How is called the number 40 in Danish?",
        choiceA: "fire",
        choiceB: "firs",
        choiceC: "fyrre",
        correct: "C",
    },

    {
        question: "How is called 59 in Danish ?",
        choiceA: "ni-og-halvfems",
        choiceB: "ni-og-halvtreds",
        choiceC: "ni-og-halvfjerds",
        correct: "B",
    },


    {
        question: "How is called 789 in Danish ?",
        choiceA: "syv hundrede og ni-og-tres",
        choiceB: "seks hundrede og ni-og-firs",
        choiceC: "syv hundrede og ni-og-firs",
        correct: "C",
    },

    {
        question: "How is called 1992 in Danish ?",
        choiceA: "nitten hundrede og to-og-halvfems",
        choiceB: "tusen ni hundre og nitti­to",
        choiceC: "et­tusen nio­hundra­nittio­två",
        correct: "A",
    },

    {
        question: "How is called 12 345 in Danish ?",
        choiceA: "tolv tusind tre hundrede og tre-og-halvtreds",
        choiceB: "tolv tusind tre hundrede og fem-og-fyrre",
        choiceC: "ni-og-halvfjerds",
        correct: "B",
    },

    {
        question: "How is called 2 021 000 in Danish ?",
        choiceA: "to millioner en-og-tyve tusind ",
        choiceB: "tolv tusind tre hundrede og fem-og-fyrre",
        choiceC: "ni-og-halvfjerds",
        correct: "A",
    },



];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTime = 0; // 10s
timeLeft = 10;
let score = 0;


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = `<p>${q.question} <div id="Denmark"></div> </p>`;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

window.addEventListener("load", startQuiz);

// start quiz
function startQuiz() {
    renderQuestion();
    renderProgress();
    renderCounter();
    countDown();


    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s


}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {

    if (count > 6) {
        countdownTimer.style.backgroundColor = "mediumseagreen";
        countdownTimer.style.width = count + "rem";
        count--
    } else if (count > 3) {
        countdownTimer.style.backgroundColor = "orange";
        countdownTimer.style.width = count + "rem";
        count--
    } else if (count >= 1) {
        countdownTimer.style.backgroundColor = "red";
        countdownTimer.style.width = count + "rem";
        count--
    } else {
        countdownTimer.style.width = count;
        count = 10;

        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and store the score in the localStorage

            clearInterval(TIMER);
            localStorage.setItem("mostRecentScore", score)
            return window.location.assign("end.html");

        }
    }
}


function countDown() {
    setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft;
        counter.innerHTML = count;
        timeLeft -= 1;
    }, 1000)
}


// checkAnswer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }

    count = 10;


    if (runningQuestion < lastQuestion) {

        runningQuestion++;
        renderQuestion();

    } else {
        // end the quiz and show the score

        clearInterval(TIMER);
        // scoreRender();
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("end.html");
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#25b449";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#e71b1b";
}

