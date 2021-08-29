//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-quiz-rule");
const questionBox = document.getElementById("question-box");
const previousQuestion = document.getElementById("previous-question");
const nextQuestion = document.getElementById("next-question");
const instructionBox = document.getElementById("instruction_box")
const nextApp = document.getElementById("next-app");



// adding addEventfunction (when the start button clicked)

startButton.addEventListener("click", function () {
    questionBox.classList.remove("question-containers");
    instructionBox.setAttribute("class", "instruction-box-1");
    $(".main-container").hide();
})   

//  adding addEventfunction ( targeting the start quiz button inside instruction box  )

nextApp.addEventListener("click", function () {
    instructionBox.classList.remove("instruction-box-1");
    questionBox.setAttribute("class", "question-containers");
    instructionBox.setAttribute("class", "quit-class");
})

// Array of Questions and Answers.

let questions = [{
    number: 1,
    question: "The traditional treatment of surface water consisted of coagulant dosing, followed by floc formation-settling and rapid filtration?",
    answers: ["False", "True", "None"],
    correctAnswer: "false",
},
{
    number: 2,
    question: "Indicate possible locations of coagulation in the treatment train (more answers can be possible)",
    answers: ["Before storage","Before filtration","Before ozonation","Before GAC"],
    correctAnswer: "Before storage",
},
{
    number: 3,
    question: "Which of the following chemicals is used as coagulant?",
    answers: ["NaOH","KMNO4", "FeCl3","Ca(OH)2"],
    correctAnswer: "FeCl3",
},
{
    number: 4,
    question: "Jar tests are executed to determine optimal coagulant dose, pH and coagulant aid cose.",
    answers: ["True","False","None"],
    correctAnswer: "True",
},
{
    number: 5,
    question: "The term Enhanced Coagulation is used when the purpose is to remove",
    answers: ["Turbidity", "Organic matter", "Pathogenic micro-organisms", "Organic micro-pollutants"],
    correctAnswer: "Organic matter",
},
{
    number: 6,
    question: "At lower temperatures coagulation can be enhanced by using higher coagulant doses,increase impeller speed and/or applying coagulant aids.",
    answers: ["True", "False", "None"],
    correctAnswer: "True",
},
{
    number: 7,
    question: "With a velocity of 750 m3/h the water is fed to two units. The coagulant is added in a cascade with a height of 0,2 m. The shear of mixing (Gc) at a temperature of 10 °C is for this  situation 1500 s-1. The coagulation compartment is a bit over dimensioned and    therefore, if the velocity is below 500 m3/h, only one unit is used. What is the shear at a velocity of 500 m3/h and a temperature of 10°C (one unit in use)?",
    
    answers: ["1430","1530","1630","1730"],
    correctAnswer: "1730",
},
{
    number: 8,
    question: "In floc formation orthokinetics is the predominant mechanism.",
    answers: ["True", "False", "None"],
    correctAnswer: "True",  
    
},
{
    number: 9,
    question: "When the temperature drops from 20 0C to 10 0C, the dissipated power of a stirring device should decrease with a factor 1.14 to obtain equal G-values.",
    answers: ["True", "False", "None"],
    correctAnswer: "False",  
     
},
{
    number: 10,
    question: "In the production location of Berenplaat (watercompany Evides), 80 sludge blancket clarifiers(5.7x8.3x3 m) are used for a combined coagulation/flocculation/sedimentation. About 2/3 of the sludge blanket clarifier is stirred mechanically (40 W per basin). The water production is 22000 m3/h. The Gv-value in the flocculation part of the sludge blanket clarifier is equal to 20 s-1.?",
    answers: ["True", "False", "None"],
    correctAnswer: "True", 
},
{
    number: 11,
    question: "When in a flocculation chamber the flow is perpendicular to the stirring axis less short circuiting occurs than in a chamber where the flow is parallel to the stirring axis?",
    answers: ["True", "False", "None"],
    correctAnswer: "False", 
},
{
    number: 12,
    question: "During floc formation the maximum rotation speed of an impeller with a radius of 1.8 m is 5.3 rotations per minute.?",
    answers: ["True", "False", "None"],
    correctAnswer: "True", 
},
{
    number: 13,
    question: "What percentage of the global greenhouse gas emissions does the transportation sector emit?",
    answers: ["20%",
        "14%",
        "50%",
        "70%"
    ],
    correctAnswer: "14%",
},
{
    number: 14,
    question: "When you hear it’s unusually hot today, is that about the climate or weather?",
    answers: ["Climate",
        "weather",
        "None",
        "All of the above"
    ],
    correctAnswer: "weather",
},
{
    number: 15,
    question: " When was the last time in Earth's history that CO2 was as high as it is now?",
    answers: ["This is the highest it's ever been",
        "The last time CO2 was this high was 3 million years ago.",
        "None",
        "All of the above"
    ],
    correctAnswer: "The last time CO2 was this high was 3 million years ago.",
},

]

// targeting timer in the questions
const timeH = document.querySelector('h3');
let timeSecond = 200;

timeH.innerHTML = timeSecond;

const countDown = setInterval(()=>{
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if (timeSecond <0 || timeSecond<1){
        clearInterval(countDown);
    }
},1000)


// function to getting all the questions and answer options from array .

const questionContent = document.getElementById("question");
var answerContent = document.getElementById("answer");
const selectedAnswer = document.getElementsByClassName("answer-option");

function allQuestion(event) {
    let createTag = document.createElement("p").innerHTML = questions[event].number + ")" + " " + questions[event].question;
    questionContent.innerHTML = createTag;
    let answerOption = `<div class="answer-option">` + `<p>` + questions[event].answers[0] + `</P></div>` +
        `<div class="answer-option">` + `<p>` + questions[event].answers[1] + `</P></div>` +
        `<div class="answer-option"> ` + `<p>` + questions[event].answers[2] + `</P></div>` +
        `<div class="answer-option" >` + `<p>` + questions[event].answers[3] + `</P></div>`;
    answerContent.innerHTML = answerOption;

    for (let i = 0; i < selectedAnswer.length; i++) {
        selectedAnswer[i].setAttribute("onclick", "selectedAnswers(this)");
    }
}

allQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;

// next button function to click to go to next question.

const nextButton = document.getElementById("next-question");

nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        allQuestion(currentQuestion);
    } else {
        console.log("successfully loaded");
        quizFinalResult();
    }

});


// previous button function to click to go to previous question.

const previousButton = document.getElementById("previous-question");

previousButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion--;
        allQuestion(currentQuestion);
    } else {
        console.log("successfully loaded");
        quizFinalResult();
    }

});


// select answer option if the answer is correct do x and if the answer is incorrect do y.

function selectedAnswers(correctAnswer) {
    let givenAnswer = correctAnswer.innerText;
    let goodAnswer = questions[currentQuestion].correctAnswer;
    let allAnswers = answerContent.children.length;
    if (givenAnswer === goodAnswer) {
        totalScoreAchieved += 1;
        // if the user answer is correct green color background  will pop up inside the answer box.
        correctAnswer.classList.add("green");
        incrementScore();
    } else {
        // if the user answer is incorrect red color background  will pop up inside the answer box.
        correctAnswer.classList.add("red");
        incrementWrongAnswer();

        //if the user answer is incorrect ! correct answer will  automatically pop up with green highlight.

        for (let x = 0; x < allAnswers; x++) {
            if (answerContent.children[x].innerText === goodAnswer) {
                answerContent.children[x].classList.add("green");
            }

        }

    }

    // user can click just one answer ! once user clicked,the rest of the answers will unable to click.
    for (let x = 0; x < allAnswers; x++) {
        answerContent.children[x].classList.add("unable-answer");
    }

}

// Gets the current score of correct answers from the DOM and increments it

function incrementScore() {

    let currentScore = parseInt(document.getElementById("correct-answer").innerText);
	document.getElementById("correct-answer").innerText = ++currentScore;

}

// Gets the current score of incorrect answers from the DOM and increments it
function incrementWrongAnswer() {

	let currentScore = parseInt(document.getElementById("incorrect-answer").innerText);
	document.getElementById("incorrect-answer").innerText = ++currentScore;

}

// This section belongs to result box which will show user scores and beneath score one button which will lead user back to Home page.

const restartQuiz = document.getElementById("restart-quiz");
const restartButton = document.getElementById("restart-button");

function quizFinalResult() {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "quit-class");
    restartQuiz.setAttribute("class", "restart_quiz");
    let finalScore = document.getElementById("score-card");
    if (totalScoreAchieved > 12) {
        finalScore.innerHTML =
            `<span>` + `Excellent You are rock ! <br> Please share your knowledge with <br> others to save our planet <br> <span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> !</span>`;
    } else if (totalScoreAchieved >= 8) {
        finalScore.innerHTML =
            `<span>` + `Congratulation you got! <br><span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> <br> Good Luck & Try Again  !</span>`;
    } else if (totalScoreAchieved < 7) {
        finalScore.innerHTML =
            `<span>` + ` Aho ! You Got <br> <span>` + totalScoreAchieved + `</span> Out Of <span>` + questions.length + `</span> <br> Good Luck & Try Again !</span>`;
    } else {
        finalScore.innerHTML =
            `<span>` + ` Aho ! You Got <br> <span>` + totalScoreAchieved + `</span> Out Of <span>` + questions.length + `</span> <br> Good Luck & Try Again  !</span>`;
    }

}
