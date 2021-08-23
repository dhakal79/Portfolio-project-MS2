//  targeting  main variables and id´s of home page and quiz box
const startButton = document.getElementById("btn-start-quiz");
const instructionBox = document.getElementById("instruction_box")


// adding addEventfunction (when the start button clicked)

startButton.addEventListener("click", function () {
    instructionBox.setAttribute("class", "instruction-box-1");
    $(".main-container").hide();
})   


