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

