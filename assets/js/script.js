//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-start-quiz");
const questionBox = document.getElementById("question-box");
const quitQuiz = document.getElementById("quit-quiz");
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
    answers: ["Before storage","Before filtration","Before ozonation","Before GAC"
    ],
    correctAnswer: "Before storage",
},
{
    number: 3,
    question: "Which of the following chemicals is used as coagulant?",
    answers: ["NaOH","KMNO4", "FeCl3","Ca(OH)2"
    ],
    correctAnswer: "FeCl3",
},
{
    number: 4,
    question: "Jar tests are executed to determine optimal coagulant dose, pH and coagulant aid cose.",
    answers: ["True","False","None",
    ],
    correctAnswer: "True",
},
{
    number: 5,
    question: "How much have sea levels risen in the past 100 years?",
    answers: ["7 inches", "2 inches", "5 inches", "16 inches"],
    correctAnswer: "7 inches",
},
{
    number: 6,
    question: "How could global warming affect polar regions?",
    answers: ["It will make them warmer",
        "It will make them colder",
        "It won't affect them",
        "None"
    ],
    correctAnswer: "It will make them warmer",
},
{
    number: 7,
    question: "What is solar radiation?",
    answers: ["Energy from the sun",
        "Energy from within the Earth",
        "Energy from the wind",
        "All of the above"
    ],
    correctAnswer: "Energy from within the Earth",
},
{
    number: 8,
    question: "How long does CO2 remain in the atmosphere?",
    answers: ["up to 200 years",
        "up to 5 years",
        "up to 100 years",
        "All of the above"
    ],
    correctAnswer: "up to 200 years",
},
{
    number: 9,
    question: "What do scientists agree is causing climate change?",
    answers: ["Humans",
        "Animals",
        "Sun",
        "All of the above"
    ],
    correctAnswer: "Humans",
},
{
    number: 10,
    question: "What's the easiest ways you can help prevent global warming?",
    answers: ["Stop Eating Meat",
        "Use Less Fossil Fuels",
        "Plant trees",
        "All of the above"
    ],
    correctAnswer: "All of the above",
},
{
    number: 11,
    question: "How much of the world's food produced in a year is thrown away uneaten?",
    answers: ["One quarter",
        "One third",
        "One half",
        "All of the above"
    ],
    correctAnswer: "One third",
},
{
    number: 12,
    question: "What is the  biggest threat towards development is?",
    answers: ["Climate change",
        "Pollution",
        "Population growth",
        "All of the above"
    ],
    correctAnswer: "Climate change",
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

    for (let x = 0; x < selectedAnswer.length; x++) {
        selectedAnswer[x].setAttribute("onclick", "selectedAnswers(this)");
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


