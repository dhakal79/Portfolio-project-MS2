//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-quiz-rule");
const questionBox = document.getElementById("question-box");
const instructionBox = document.getElementById("box");
const startQuiz = document.getElementById("start-quiz");
const TIMEOUT_SECONDS = 200;
let correctAnswerCount = 0;
let wrongAnswerCount = 0;

// adding addEventfunction (when the quiz rule button clicked)

startButton.addEventListener("click", function() {
    instructionBox.setAttribute("class", "quiz_rule");
    });

//  adding addEventfunction ( targeting the start quiz button inside instruction box  )
//instructionBox.classList.add("hide");
startQuiz.addEventListener("click", function() {
    instructionBox.classList.remove("quiz_rule");
    questionBox.setAttribute("class", "question-baskets");
    instructionBox.classList.add("hide");
    timeSecond = TIMEOUT_SECONDS;
});

// targeting timer in the questions
const timeH = document.querySelector('h3');
let timeSecond = TIMEOUT_SECONDS;

timeH.innerHTML = timeSecond;

    setInterval(() => {
    timeSecond--;
    timeH.innerHTML = `${timeSecond} sec time remaining`; 
    if (timeSecond <= 0 ) {
        //clearInterval(countDown);
        quizFinalResult();
                        
    }
}, 1000);

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
//const choiceAnswer = document.getElementsByClassName("answer-option");
const nextButton = document.getElementById("next-question");

function getQuestionContent(questions, questionNumber){
    const pTag = document.createElement("p");
    pTag.innerHTML = questions[questionNumber].number + ")" + " " + questions[questionNumber].question;
    return pTag.innerHTML; 
}
function getAnswerContent(questions, questionNumber){
    const lastAns = questions[questionNumber].answers[3] ? `<div class="answer-option" > ${questions[questionNumber].answers[3]}</div>` : "";
    let answerChoice = `<div class="answer-option">${questions[questionNumber].answers[0]} </div>` +
        `<div class="answer-option"> ${questions[questionNumber].answers[1]}</div>` +
        `<div class="answer-option"> ${questions[questionNumber].answers[2]}</div>` +
        lastAns;
        return answerChoice;
}
function prepareQuestion(event) {
    nextButton.setAttribute("disabled", true);
    question.innerHTML = getQuestionContent(questions, event);
    answer.innerHTML = getAnswerContent (questions, event);
    answer.addEventListener("click", function(event){
    chooseAnswer(event);
    });
}

prepareQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;


// next button function to click to go to next question.

nextButton.setAttribute("disabled", true); 
nextButton.addEventListener("click", function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        prepareQuestion(currentQuestion);

    } else {
        questionBox.classList.add("hide");
        quizFinalResult();
    }

});



// Once answer option is selected other options are disable to select again.
function disableAllAnswers(answers){
    let totalAnswersCount = answers.children.length;
    for (let i = 0; i < totalAnswersCount; i++) {
        answers.children[i].classList.add("disable");
    }
}
// select answer option if the answer is correct do x and if the answer is incorrect.
function chooseAnswer(selectedAnswer) {
    if (selectedAnswer.target.className !== 'answer-option'){
       return; 
    }
    
    const rightAnswer = selectedAnswer.target;
    let givenAnswer = rightAnswer.innerText;
    let goodAnswer = questions[currentQuestion].rightAnswer;
    nextButton.removeAttribute("disabled");
    if (givenAnswer === goodAnswer) {
        totalScoreAchieved += 1;
        correctAnswerCount +=1;

        // change color to green and red when answer is correct and incorrect, respectively.
        rightAnswer.classList.add("color1");
        increamentScore(correctAnswerCount);
    } else {
       rightAnswer.classList.add("color2");
       wrongAnswerCount +=1;
        increamentWrongAnswer(wrongAnswerCount);
        
    }
    disableAllAnswers(answer);  
}

// increament score for correct answers

function increamentScore(correctAnswerCount) {
    document.getElementById("right-answer").innerText = correctAnswerCount;

}

// increament score for wrong answers
function increamentWrongAnswer(wrongAnswerCount) {    
    document.getElementById("wrong-answer").innerText = wrongAnswerCount;

}

// Final result box.

const restartQuiz = document.getElementById("try");
function getTimeOutMessage(totalScoreAchieved, totalQuestionCount){
    return `<span class="highlight-message"> 
    Sorry!!! Your time is out! <br> You did not answer all question!! <br> Try again!!<br> Your Score is <br> <span> ${totalScoreAchieved} </span> out of <span> ${totalQuestionCount}</span> !</span>`; 
}
function getSuccessfulMessage(totalScoreAchieved, totalQuestionCount){
    return `<span class="highlight-message -1"> 
    Well done!!! You master the topic!<br> Your Score is <br> <span> ${totalScoreAchieved} </span> out of <span> ${totalQuestionCount}</span> !</span>`; 
}
function getNotbadMessage(totalScoreAchieved, totalQuestionCount){
    return `<span class="highlight-message -2"> 
    Not too bad!<br> Your Score is <br> <span> ${totalScoreAchieved} </span> out of <span> ${totalQuestionCount}</span> !</span>`; 
}
function getFailureMessage(totalScoreAchieved, totalQuestionCount){
    return `<span class="highlight-message -2"> 
    Too bad ! You need to study more<br> Your Score is <br> <span> ${totalScoreAchieved} </span> out of <span> ${totalQuestionCount}</span> !</span>`; 
}

function quizFinalResult() {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "hide");
    restartQuiz.setAttribute("class", "try-quiz-again");
    let finalScore = document.getElementById("score");
    if (timeSecond === 0 && currentQuestion < questions.length - 1){
        finalScore.innerHTML = getTimeOutMessage(totalScoreAchieved, questions.length);
       timeSecond =TIMEOUT_SECONDS;
    }

    else if (totalScoreAchieved > 13) {
        finalScore.innerHTML = getSuccessfulMessage(totalScoreAchieved, questions.length);
            
                       
    } else if (totalScoreAchieved >= 7) {
        finalScore.innerHTML = getNotbadMessage(totalScoreAchieved, questions.length);
            
    } else {
        finalScore.innerHTML = getFailureMessage(totalScoreAchieved, questions.length);
           
    }

}

// try quiz again button that directs to start of quiz page page
const restartButton = document.getElementById("try-again");
restartButton.addEventListener("click", function() {
    restartQuiz.classList.remove("try-quiz");
    restartQuiz.setAttribute("class", "hide");
    questionBox.setAttribute("class", "question-baskets");
    currentQuestion = 0;
    timeSecond = TIMEOUT_SECONDS;
    prepareQuestion(currentQuestion);
    document.getElementById("right-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("wrong-answer").innerText = totalScoreAchieved = 0;
});