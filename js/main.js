

import { questions } from "./data.js";
let cartona = ``;

for (let i = 0; i < questions.length; i++) {
    cartona += `<div class="question">
        <button class="question-text" id="question-${i + 1}"  data-index="${i}">
          <h2>${questions[i].question} </h2>
          <img src="./assets/images/icon-plus.svg" alt="open  or closed icon " id="q-${i + 1}-icon">

        </button>
        <div class="question-answer" id="answer-q-${i + 1}">
          <div> 
             <p>${questions[i].answer}</p>
            </div>
         
        </div>
      </div>`
}
document.getElementById("questions-section").innerHTML = cartona;
let allQuestions = document.querySelectorAll(".question-text");
allQuestions.forEach((q) => {
    q.addEventListener("click", function () {
        toggleAnswer(Number(q.getAttribute("data-index")));
    });


});

function toggleAnswer(index) {
    let answerOpenedFlag = document.getElementById(`answer-q-${index + 1}`).classList;
    if (answerOpenedFlag.contains("active")) {
        document.getElementById(`answer-q-${index + 1}`).classList.remove("active");
        console.log(document.getElementById(`answer-q-${index + 1}`).classList);
        document.getElementById(`q-${index + 1}-icon`).setAttribute("src", "./assets/images/icon-plus.svg");
    }
    else {
        document.getElementById(`answer-q-${index + 1}`).classList.add("active");
        console.log(document.getElementById(`answer-q-${index + 1}`).classList);
        document.getElementById(`q-${index + 1}-icon`).setAttribute("src", "./assets/images/icon-minus.svg");
    }
}
