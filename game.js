const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const atimer = document.getElementById("atimer");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const timeLeftDisplay = document.getElementById("time-left");

// create our questions
let questions = [{
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
        question: "How is called 59 in Danish ?",
        choiceA: "ni-og-halvfems",
        choiceB: "ni-og-halvtreds",
        choiceC: "ni-og-halvfjerds",
        imgSrc: "../images/17a.png",
        correct: "B",
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
        question: "How is called 12 345 in Danish ?",
        choiceA: "tolv tusind tre hundrede og tre-og-halvtres",
        choiceB: "tolv tusind tre hundrede og fem-og-fyrre",
        choiceC: "ni-og-halvfjerds",
        imgSrc: "../images/17a.png",
        correct: "B",
    },

    {
        question: "How is called 2 021 000 in Danish ?",
        choiceA: "to millioner en-og-tyve tusind ",
        choiceB: "tolv tusind tre hundrede og fem-og-fyrre",
        choiceC: "ni-og-halvfjerds",
        imgSrc: "../images/17a.png",
        correct: "B",
    },

 

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTime = 0; // 10s
const timerWidth = 150; // 150px
const timerUnit = timerWidth / count;
timeLeft = 10;
let score = 0;


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = `<p>${q.question}</p>`;
    qImg.innerHTML = `<img src=${q.imgSrc}>`;
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
        atimer.style.backgroundColor = "mediumseagreen";
        atimer.style.width = count +  "rem";
        count--
    }else if (count > 3) {
        atimer.style.backgroundColor = "orange";
        atimer.style.width = count +  "rem";
        count--
    }else if (count >= 1 ){
        atimer.style.backgroundColor = "red";
        atimer.style.width = count +  "rem";
        count--
    } 
     else {
        count = 10;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
            countDown();
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
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
        (scorePerCent >= 40) ? "img/3.png" :
        (scorePerCent >= 20) ? "img/2.png" :
        "img/1.png";

    scoreDiv.innerHTML = `<img src=${img}>`;
    scoreDiv.innerHTML += `<p>${scorePerCent}%</p>`;
}