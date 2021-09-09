//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-quiz-rule");
const questionBox = document.getElementById("question-box");
const instructionBox = document.getElementById("box");
const startQuiz = document.getElementById("start-quiz");



// adding addEventfunction (when the quiz rule button clicked)

startButton.addEventListener("click", function() {
    instructionBox.setAttribute("class", "instruction-box-1");
    });

// targeting timer in the questions
const timeH = document.querySelector('h3');
let timeSecond = 200;

timeH.innerHTML = timeSecond;

const countDown = setInterval(() => {
    timeSecond--;
    timeH.innerHTML = `${timeSecond} sec time remaining`; //timeSecond + ' sec time remaining';
    if (timeSecond < 0 || timeSecond < 1) {
        clearInterval(countDown);
    }
}, 1000);


//  adding addEventfunction ( targeting the start quiz button inside instruction box  )

startQuiz.addEventListener("click", function() {
    instructionBox.classList.remove("instruction-box-1");
    questionBox.setAttribute("class", "question-baskets");
    instructionBox.classList.add("hide");
    timeSecond = 200;
});

// Array of Questions and Answers.

let questions = [{
        number: 1,
        question: "The main objectives of the coagulation process for drinking water preparation are",
        answers: ["Suspended and colloidal particles", "Dissolved matter", "Both", "None"],
        correctAnswer: "Both",
    },
    {
        number: 2,
        question: "Indicate possible locations of coagulation in the treatment train",
        answers: ["Before storage", "Before filtration", "Before ozonation", "Before GAC"],
        correctAnswer: "Before storage",
    },
    {
        number: 3,
        question: "Which of the following chemicals is used as coagulant?",
        answers: ["KMNO<sub>4</sub>", "FeCl<sub>3</sub>", "Ca(OH)<sub>2</sub>"],
        correctAnswer: "FeCl3",
    },
    {
        number: 4,
        question: "Jar tests are executed to determine",
        answers: ["Optimal coagulant dose", "pH", "Both", "None"],
        correctAnswer: "Both",
    },
    {
        number: 5,
        question: "The term Enhanced Coagulation is used when the purpose is to remove",
        answers: ["Turbidity", "Organic matter", "Pathogenic micro-organisms", "Organic micro-pollutants"],
        correctAnswer: "Organic matter",
    },
    {
        number: 6,
        question: "At lower temperatures coagulation can be enhanced by the following method",
        answers: ["Higher cogulant doses", "Increase impeller speed", "Applying coagulant aids", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        number: 7,
        question: "The type of flocculation where agglomeration is accomplished by agitation in the suspension is refered as:",
        answers: ["Ortho-kinetic flocculation", "Peri-kinetic flocculation", "Both"],
        correctAnswer: "Ortho-kinetic flocculation",
    },
    {
        number: 8,
        question: "How can we increase the sedimentation rate of the turbidity causing colloidal particles?",
        answers: ["Neutralisation of the surface charge ", "Enlarging of the colloids by agglomeration", "Both", "None"],
        correctAnswer: "Both",

    },
    {
        number: 9,
        question: "The charge of colloidal particles at iso-electric point is",
        answers: ["Positive", "Negative", "No charge"],
        correctAnswer: "No charge",

    },
    {
        number: 10,
        question: "After dosage of coagulant, fast and intensive agitation (“rapid mixing”) is needed to",
        answers: ["Distribute adsorbing species quickly", "Prevent local high coagulant concentrations", "Both", "None"],
        correctAnswer: "Both",
    },
    {
        number: 11,
        question: " The process of removing of the repulsive surface charge by adding coagulants followed by rapid mixing is called",
        answers: ["Flocculation", "Destabilisation", "Separation"],
        correctAnswer: "Destabilisation",
    },
    {
        number: 12,
        question: " Which of the following components in water are largely removed by coagulation process.",
        answers: ["Turbidity", "Phosphate", "Color", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        number: 13,
        question: "The type of coagulation mechanisms when it is refers to incorporation in hydroxide flocs is ",
        answers: ["Sweep Coagulation", "Adsorptive Coagulation", "Electrostatic Coagulation", "All of the above"],
        correctAnswer: "Sweep Coagulation",
    },
    {
        number: 14,
        question: "How will the pH of water change after adding alum? ",
        answers: ["pH will drop", "pH will increase", "Neutral"],
        correctAnswer: "pH will drop",
    },
    {
        number: 15,
        question: " What is the recommended detention time ( t ) of water in rapid mixer?",
        answers: ["5 minute", "2 minute", "3 minute", "less than 1 minute"],
        correctAnswer: "less than 1 minute",
    },

];


// function to getting all the questions and answer options from array .

const question = document.getElementById("question");
var answer = document.getElementById("answer");
const choiceAnswer = document.getElementsByClassName("answer-option");
const nextButton = document.getElementById("next-question");

function allQuestion(event) {
    nextButton.setAttribute("disabled", true);
    let createTag = document.createElement("p").innerHTML = questions[event].number + ")" + " " + questions[event].question;
    question.innerHTML = createTag;
    const lastAns = questions[event].answers[3] ? `<div class="answer-option" >` + `<p>` + questions[event].answers[3] + `</P></div>` : "";
    let answerChoice = `<div class="answer-option">` + `<p>` + questions[event].answers[0] + `</P></div>` +
        `<div class="answer-option">` + `<p>` + questions[event].answers[1] + `</P></div>` +
        `<div class="answer-option"> ` + `<p>` + questions[event].answers[2] + `</P></div>` +
        lastAns;
    answer.innerHTML = answerChoice;

    for (let i = 0; i < choiceAnswer.length; i++) {
        choiceAnswer[i].setAttribute("onclick", "choiceAnswers(this)");
    }
}

allQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;


// next button function to click to go to next question.

nextButton.setAttribute("disabled", true); //making Next button disable
nextButton.addEventListener("click", function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        allQuestion(currentQuestion);

    } else {
        console.log("successfully loaded");
        questionBox.classList.add("hide");
        quizFinalResult();
    }

});

// select answer option if the answer is correct do x and if the answer is incorrect do y.

function choiceAnswers(correctAnswer) {
    let givenAnswer = correctAnswer.innerText;
    let goodAnswer = questions[currentQuestion].correctAnswer;
    let allAnswers = answer.children.length;
    nextButton.removeAttribute("disabled");
    if (givenAnswer === goodAnswer) {
        totalScoreAchieved += 1;

        // change color to green and red when answer is correct and incorrect, respectively.
        correctAnswer.classList.add("color1");
        incrementScore();
    } else {
        correctAnswer.classList.add("color2");
        incrementWrongAnswer();
        
    }

    // Once answer option is selected other options are disable to select again.
    for (let i = 0; i < allAnswers; i++) {
        answer.children[i].classList.add("disable");
    }

}

// increament score for correct answers

function incrementScore() {

    let currentScore = parseInt(document.getElementById("correct-answer").innerText);
    document.getElementById("correct-answer").innerText = ++currentScore;

}

// increament score for wrong answers
function incrementWrongAnswer() {

    let currentScore = parseInt(document.getElementById("incorrect-answer").innerText);
    document.getElementById("incorrect-answer").innerText = ++currentScore;

}

// Final result box.

const restartQuiz = document.getElementById("try");

function quizFinalResult() {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "hide");
    restartQuiz.setAttribute("class", "try-quiz-again");
    let finalScore = document.getElementById("score");
    if (totalScoreAchieved > 13) {
        finalScore.innerHTML =
            `<span class="highlight-message">` + `Well done!!! You master the topic! <br> Your Score is <br> <span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> !</span>`;
    } else if (totalScoreAchieved >= 7) {
        finalScore.innerHTML =
            `<span class="highlight-message-1">` + `Not too bad! <br><span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> <br> Good luck for better result next time !</span>`;

    } else {
        finalScore.innerHTML =
            `<span class="highlight-message-2">` + ` Too bad ! You need to study more <br> Your Score is <br> <span>` + totalScoreAchieved + `</span> Out Of <span>` + questions.length + `</span> <br> Take time to study in depth and try again!  !</span>`;
    }

}

// try quiz again button that directs to start of quiz page page
const restartButton = document.getElementById("try-again");
restartButton.addEventListener("click", function() {
    restartQuiz.classList.remove("try-quiz");
    restartQuiz.setAttribute("class", "hide");
    questionBox.setAttribute("class", "question-baskets");
    currentQuestion = 0;
    timeSecond = 200;
    allQuestion(currentQuestion);
    document.getElementById("correct-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("incorrect-answer").innerText = totalScoreAchieved = 0;
});