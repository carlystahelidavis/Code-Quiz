var scoreEl = document.getElementById("score")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-button")
var mainEl = document.getElementById("main")
var score = 60;


// init function
startButton.addEventListener("click", function (event) {
    event.preventDefault;
    setTime();
    startButton.style.visibility = 'hidden';

    //replace this line with calling game function
    mainEL.textContent = "Placeholder for question 1";
})

// game function
// if else with a variable containing correct answer. Wrong answer "else statement" removes time from clock, shakes red, removes answer. Only move on when correct answer is selected


function setTime() {
    var timerInterval = setInterval(function () {
        score--;
        scoreEl.textContent = score;
        if (score === 0) {
            clearInterval(timerInterval);
            mainEL.textContent = "SCORE 0: Try Again"
        } /*else if (lastUserInput === true) {
                var finalScore = score;
                scoreEl.textContent = finalScore;
            }*/
        //else answers last question correctly
    }, 1000);
}


//local storage highscore function
highscoreButton.addEventListener("click", function (event) {
    event.preventDefault;
    startButton.style.visibility = 'hidden';
    mainEL.textContent = "Highscores";
    savescore();
})


var userscores = JSON.parse(localStorage.getItem("Highscores")) || []

// savescore();
var initials = "user input"

function savescore() {
    localStorage.setItem("Highscores", JSON.stringify(userscores))
    userscores.push([initials, score])
}



// quiz questions and answers
// var quizQuestions = [
//     {
//         question: "Placeholder for Question 1?",
//         answers: {
//             a: 'possible answer 1',
//             b: 'possible correct answer 2',
//             c: 'possible answer 3',
//             d: 'possible answer 4'
//         },
//         correctAnswer: 'b'
//     },
//     {
//         question: "Placeholder for Question 2?",
//         answers: {
//             a: 'possible answer 1',
//             b: 'possible answer 2',
//             c: 'possible answer 3',
//             d: 'possible correct answer 4'
//         },
//         correctAnswer: 'd'
//     },
//     {
//         question: "Placeholder for Question 3?",
//         answers: {
//             a: 'possible answer 1',
//             b: 'possible answer 2',
//             c: 'possible correct answer 3',
//             d: 'possible answer 4'
//         },
//         correctAnswer: 'c'
//     },
//     {
//         question: "Placeholder for Question 4?",
//         answers: {
//             a: 'possible correct answer 1',
//             b: 'possible answer 2',
//             c: 'possible answer 3',
//             d: 'possible answer 4'
//         },
//         correctAnswer: 'a'
//     }
// ];

// // //how to create the quiz
// generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);

// // // quiz function and layout 
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
//     function showQuestions(questions, quizContainer)
// }
// // // need a place to store possible answer choices
// // var output = [];
// // var answers;
// // * /
// // // for each question:
// // for (var i = 0; i < questions.length; i++) {

// // }

var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
// Question #1

var correctAnswer = document.getElementById("q1a2")

correctAnswer.addEventListener("click", function () {
    correctAnswer.style.background = "green";
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
})
var wrongAnswer1 = document.getElementById("q1a1")
wrongAnswer1.addEventListener("click", function () {
    wrongAnswer1.style.color = "red";
})
var wrongAnswer2 = document.getElementById("q1a3")
wrongAnswer2.addEventListener("click", function () {
    wrongAnswer2.style.color = "red";
})
var wrongAnswer3 = document.getElementById("q1a4")
wrongAnswer3.addEventListener("click", function () {
    wrongAnswer3.style.color = "red";
})

// Question #2
correctAnswer = document.getElementById("q2a3")
correctAnswer.addEventListener("click", function () {
    correctAnswer.style.background = "green";
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
})
var wrongAnswer4 = document.getElementById("q2a1")
var wrongAnswer5 = document.getElementById("q2a2")
var wrongAnswer6 = document.getElementById("q2a4")


// Question #3
correctAnswer = document.getElementById("q3a3")
correctAnswer.addEventListener("click", function () {
    correctAnswer.style.background = "green";
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
})
var wrongAnswer7 = document.getElementById("q3a1")
var wrongAnswer8 = document.getElementById("q3a2")
var wrongAnswer9 = document.getElementById("q3a4")


// Question #4
correctAnswer = document.getElementById("q4a1")
correctAnswer.addEventListener("click", function () {
    correctAnswer.style.background = "green";
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
})
var wrongAnswer10 = document.getElementById("q4a2")
var wrongAnswer11 = document.getElementById("q4a3")
var wrongAnswer12 = document.getElementById("q4a4")
