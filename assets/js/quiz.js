//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-quiz-rule");
const questionBox = document.getElementById("question-box");
//const previousQuestion = document.getElementById("previous-question");
const nextQuestion = document.getElementById("next-question");
const instructionBox = document.getElementById("box")
const startQuiz = document.getElementById("start-quiz");



// adding addEventfunction (when the quiz rule button clicked)

startButton.addEventListener("click", function () {
    //questionBox.classList.remove("question-baskets");
    instructionBox.setAttribute("class", "instruction-box-1");
    //$(".main-container").hide();
})   
// targeting timer in the questions
const timeH = document.querySelector('h3');
let timeSecond = 200;

timeH.innerHTML = timeSecond; 

const countDown = setInterval(()=>{
    timeSecond--;
    timeH.innerHTML = `${timeSecond} sec time remaining`; //timeSecond + ' sec time remaining';
    if (timeSecond <0 || timeSecond<1){
        clearInterval(countDown);
    }
},1000)


//  adding addEventfunction ( targeting the start quiz button inside instruction box  )

startQuiz.addEventListener("click", function () {
    instructionBox.classList.remove("instruction-box-1");
    questionBox.setAttribute("class", "question-baskets");
    instructionBox.classList.add("hide");
    timeSecond= 200;
})

// Array of Questions and Answers.

let questions = [{
    number: 1,
    question: "The traditional treatment of surface water consisted of coagulant dosing, followed by floc formation-settling and rapid filtration?",
    answers: ["False", "True"],
    correctAnswer: "False",
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
    answers: ["NaOH","KMNO<sub>4</sub>", "FeCl<sub>3</sub>","Ca(OH)<sub>2</sub>"],
    correctAnswer: "FeCl3",
},
{
    number: 4,
    question: "Jar tests are executed to determine optimal coagulant dose, pH and coagulant aid cose.",
    answers: ["True","False"],
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
    answers: ["True", "False"],
    correctAnswer: "True",
},
{
    number: 7,
    question: "This type of flocculation where agglomeration is accomplished by agitation in the suspension is refered as:",     
    answers: ["Ortho-kinetic flocculation","Peri-kinetic flocculation"],
    correctAnswer: "Ortho-kinetic flocculation",
},
{
    number: 8,
    question: "In floc formation orthokinetics is the predominant mechanism.",
    answers: ["True", "False"],
    correctAnswer: "True",  
    
},
{
    number: 9,
    question: "When the temperature drops from 20<sup>o</sup>C to 10<sup>o</sup>C, the dissipated power of a stirring device should decrease with a factor 1.14 to obtain equal G-values.",
    answers: ["True", "False"],
    correctAnswer: "False",  
     
},
{
    number: 10,
    question: "In the production location of Berenplaat (watercompany Evides), 80 sludge blancket clarifiers(5.7 x 8.3 x 3 m) are used for a combined coagulation/flocculation/sedimentation. About 2/3 of the sludge blanket clarifier is stirred mechanically (40 W per basin). The water production is 22000 m<sup>3</sup>/h. The Gv-value in the flocculation part of the sludge blanket clarifier is equal to 20 s<sup>-1</sup>?",
    answers: ["True", "False"],
    correctAnswer: "True", 
},
{
    number: 11,
    question: "When in a flocculation chamber the flow is perpendicular to the stirring axis less short circuiting occurs than in a chamber where the flow is parallel to the stirring axis?",
    answers: ["True", "False"],
    correctAnswer: "False", 
},
{
    number: 12,
    question: "During floc formation the maximum rotation speed of an impeller with a radius of 1.8 m is 5.3 rotations per minute.?",
    answers: ["True", "False"],
    correctAnswer: "True", 
},
{
    number: 13,
    question: "What is the mechanisms of coagulation when it is refers to incorporation in hydroxide flocs ",
    answers: ["Sweep Coagulation", "Adsorptive Coagulation", "Electrostatic Coagulation", "All of the above"],
    correctAnswer: "Sweep Coagulation",
},
{
    number: 14,
    question: "How will the pH of water change after adding alum? ",
    answers: ["pH will drop","pH will increase","Neutral"],
    correctAnswer: "pH will drop",
},
{
    number: 15,
    question: " What is the recommended detention time ( t ) of water in rapid mixer?",
    answers: ["5 minute","2 minute","3 minute", "less than 1 minute"],
    correctAnswer: "less than 1 minute",
},

]


// function to getting all the questions and answer options from array .

const questionContent = document.getElementById("question");
var answerContent = document.getElementById("answer");
const selectedAnswer = document.getElementsByClassName("answer-option");
const nextButton = document.getElementById("next-question");

function allQuestion(event) {  
    nextButton.setAttribute("disabled", true);  
    let createTag = document.createElement("p").innerHTML = questions[event].number + ")" + " " + questions[event].question;
    questionContent.innerHTML = createTag;
    const lastAns = questions[event].answers[3] ? `<div class="answer-option" >` + `<p>` + questions[event].answers[3] + `</P></div>` : ""
    let answerOption = `<div class="answer-option">` + `<p>` + questions[event].answers[0] + `</P></div>` +
        `<div class="answer-option">` + `<p>` + questions[event].answers[1] + `</P></div>` +
        `<div class="answer-option"> ` + `<p>` + questions[event].answers[2] + `</P></div>` +
        lastAns;
    answerContent.innerHTML = answerOption;
    

    for (let i = 0; i < selectedAnswer.length; i++) {
        selectedAnswer[i].setAttribute("onclick", "selectedAnswers(this)");
    }
}

allQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;


// next button function to click to go to next question.

nextButton.setAttribute("disabled", true);   //making Next button disable
nextButton.addEventListener("click", function () {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        allQuestion(currentQuestion);
                
    } else {
        console.log("successfully loaded");
            questionBox.classList.add("hide");
        quizFinalResult();
    }

});

// previous button function to click to go to previous question.

//const previousButton = document.getElementById("previous-question");

//previousButton.addEventListener("click", function () {
   //if (currentQuestion < questions.length - 1) {
        //currentQuestion--;
        //allQuestion(currentQuestion);
    //} else {
        //console.log("successfully loaded");
        //quizFinalResult();
    //}

//});


// select answer option if the answer is correct do x and if the answer is incorrect do y.

function selectedAnswers(correctAnswer) {
    let givenAnswer = correctAnswer.innerText;
    let goodAnswer = questions[currentQuestion].correctAnswer;
    let allAnswers = answerContent.children.length;
    nextButton.removeAttribute("disabled")
    if (givenAnswer === goodAnswer) {
        totalScoreAchieved += 1;

        // change color to green and red when answer is correct and incorrect, respectively.
        correctAnswer.classList.add("green");
        incrementScore();
    } else {
        correctAnswer.classList.add("red");
        incrementWrongAnswer();

        //if the user answer is incorrect ! correct answer will  automatically pop up with green highlight.

        // for (let x = 0; x < allAnswers; x++) {
           // if (answerContent.children[x].innerText === goodAnswer) {
            //    answerContent.children[x].classList.add("green");
            //}

       // }

    }

    // unable answer once one answer is clicked by user.
    for (let i = 0; i < allAnswers; i++) {
        answerContent.children[i].classList.add("unable-answer");
    }

}

// increament score for correct answers

function incrementScore() {

    let currentScore = parseInt(document.getElementById("correct-answer").innerText);
	document.getElementById("correct-answer").innerText = ++currentScore;

}

// increament score for correct answers
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
restartButton.addEventListener("click", function () {
    restartQuiz.classList.remove("try-quiz");
    restartQuiz.setAttribute("class", "hide");
    questionBox.setAttribute("class", "question-baskets");
    currentQuestion = 0;
    timeSecond = 200;
    allQuestion(currentQuestion);
    document.getElementById("correct-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("incorrect-answer").innerText = totalScoreAchieved = 0;
})