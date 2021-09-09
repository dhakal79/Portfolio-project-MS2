//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-quiz-rule");
const questionBox = document.getElementById("question-box");
const instructionBox = document.getElementById("box");
const startQuiz = document.getElementById("start-quiz");



// adding addEventfunction (when the quiz rule button clicked)

startButton.addEventListener("click", function() {
    instructionBox.setAttribute("class", "quiz_rule");
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
        quizFinalResult();
    }
}, 1000);


//  adding addEventfunction ( targeting the start quiz button inside instruction box  )

startQuiz.addEventListener("click", function() {
    instructionBox.classList.remove("quiz_rule");
    questionBox.setAttribute("class", "question-baskets");
    instructionBox.classList.add("hide");
    timeSecond = 200;
});

// Array of Questions and Answers.

let questions = [{
        number: 1,
        question: "The main objectives of the coagulation process for drinking water preparation are",
        answers: ["Suspended and colloidal particles", "Dissolved matter", "Both", "None"],
        rightAnswer: "Both",
    },
    {
        number: 2,
        question: "Indicate possible locations of coagulation in the treatment train",
        answers: ["Before storage", "Before filtration", "Before ozonation", "Before GAC"],
        rightAnswer: "Before storage",
    },
    {
        number: 3,
        question: "Which of the following chemicals is used as coagulant?",
        answers: ["KMNO<sub>4</sub>", "FeCl<sub>3</sub>", "Ca(OH)<sub>2</sub>"],
        rightAnswer: "FeCl3",
    },
    {
        number: 4,
        question: "Jar tests are executed to determine",
        answers: ["Optimal coagulant dose", "pH", "Both", "None"],
        rightAnswer: "Both",
    },
    {
        number: 5,
        question: "The term Enhanced Coagulation is used when the purpose is to remove",
        answers: ["Turbidity", "Organic matter", "Pathogenic micro-organisms", "Organic micro-pollutants"],
        rightAnswer: "Organic matter",
    },
    {
        number: 6,
        question: "At lower temperatures coagulation can be enhanced by the following method",
        answers: ["Higher cogulant doses", "Increase impeller speed", "Applying coagulant aids", "All of the above"],
        rightAnswer: "All of the above",
    },
    {
        number: 7,
        question: "The type of flocculation where agglomeration is accomplished by agitation in the suspension is refered as:",
        answers: ["Ortho-kinetic flocculation", "Peri-kinetic flocculation", "Both"],
        rightAnswer: "Ortho-kinetic flocculation",
    },
    {
        number: 8,
        question: "How can we increase the sedimentation rate of the turbidity causing colloidal particles?",
        answers: ["Neutralisation of the surface charge ", "Enlarging of the colloids by agglomeration", "Both", "None"],
        rightAnswer: "Both",

    },
    {
        number: 9,
        question: "The charge of colloidal particles at iso-electric point is",
        answers: ["Positive", "Negative", "No charge"],
        rightAnswer: "No charge",

    },
    {
        number: 10,
        question: "After dosage of coagulant, fast and intensive agitation (“rapid mixing”) is needed to",
        answers: ["Distribute adsorbing species quickly", "Prevent local high coagulant concentrations", "Both", "None"],
        rightAnswer: "Both",
    },
    {
        number: 11,
        question: " The process of removing of the repulsive surface charge by adding coagulants followed by rapid mixing is called",
        answers: ["Flocculation", "Destabilisation", "Separation"],
        rightAnswer: "Destabilisation",
    },
    {
        number: 12,
        question: " Which of the following components in water are largely removed by coagulation process.",
        answers: ["Turbidity", "Phosphate", "Color", "All of the above"],
        rightAnswer: "All of the above",
    },
    {
        number: 13,
        question: "The type of coagulation mechanisms when it is refers to incorporation in hydroxide flocs is ",
        answers: ["Sweep Coagulation", "Adsorptive Coagulation", "Electrostatic Coagulation", "All of the above"],
        rightAnswer: "Sweep Coagulation",
    },
    {
        number: 14,
        question: "How will the pH of water change after adding alum? ",
        answers: ["pH will drop", "pH will increase", "Neutral"],
        rightAnswer: "pH will drop",
    },
    {
        number: 15,
        question: " What is the recommended detention time ( t ) of water in rapid mixer?",
        answers: ["5 minute", "2 minute", "3 minute", "less than 1 minute"],
        rightAnswer: "less than 1 minute",
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

function choiceAnswers(rightAnswer) {
    let givenAnswer = rightAnswer.innerText;
    let goodAnswer = questions[currentQuestion].rightAnswer;
    let allAnswers = answer.children.length;
    nextButton.removeAttribute("disabled");
    if (givenAnswer === goodAnswer) {
        totalScoreAchieved += 1;

        // change color to green and red when answer is correct and incorrect, respectively.
        rightAnswer.classList.add("color1");
        increamentScore();
    } else {
       rightAnswer.classList.add("color2");
        increamentWrongAnswer();
        
    }

    // Once answer option is selected other options are disable to select again.
    for (let i = 0; i < allAnswers; i++) {
        answer.children[i].classList.add("disable");
    }

}

// increament score for correct answers

function increamentScore() {

    let currentScore = parseInt(document.getElementById("right-answer").innerText);
    document.getElementById("right-answer").innerText = ++currentScore;

}

// increament score for wrong answers
function increamentWrongAnswer() {

    let currentScore = parseInt(document.getElementById("wrong-answer").innerText);
    document.getElementById("wrong-answer").innerText = ++currentScore;

}

// Final result box.

const restartQuiz = document.getElementById("try");

function quizFinalResult() {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "hide");
    restartQuiz.setAttribute("class", "try-quiz-again");
    let finalScore = document.getElementById("score");
    if (timeSecond ===0){
        finalScore.innerHTML =
        `<span class="highlight-message">` + `Sorry!!! Your time is out! <br> Please try again!! <br> Your Score is <br> <span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> !</span>`; 
    }

    else if (totalScoreAchieved > 13) {
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
    document.getElementById("right-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("wrong-answer").innerText = totalScoreAchieved = 0;
});