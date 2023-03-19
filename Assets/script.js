var scoreEl = document.getElementById("score")
var mainEl = document.getElementById("main")
var startButton = document.getElementById("start-button")
var highscoreButton = document.getElementById("highscore-button")
//var quizQuestions = document.getElementById("questions")
var score = 60;


// init function
startButton.addEventListener("click", function (event) {
    event.preventDefault;
    setTime();
    startButton.style.visibility = 'hidden';

    //replace this line with calling game function
    mainEl.textContent = "Question 1";
    //quizQuestions.textContent = "Placeholder for question 1?"
})


// game function
// if else with a variable containing correct answer. Wrong answer "else statement" removes time from clock, shakes red, removes answer. Only move on when correct answer is selected


function setTime() {
    var timerInterval = setInterval(function () {
        score--;
        scoreEl.textContent = score;
        if (score === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = "SCORE 0: Try Again"
        } else if (lastUserInput === true) {
            var finalScore = score;
            scoreEl.textContent = finalScore;
        }
        //else answers last question correctly
    }, 1000);
}


//local storage highscore function
highscoreButton.addEventListener("click", function (event) {
    event.preventDefault;
    startButton.style.visibility = 'hidden';
    mainEl.textContent = "Highscores";
    savescore();
})


var userscores = JSON.parse(localStorage.getItem("Highscores")) || []

// savescore();
var initials = "user input"

function savescore() {
    localStorage.setItem("Highscores", JSON.stringify(userscores))
    userscores.push([initials, score])
}



/* quiz questions and answers
//var quizQuestions = [
{
    question: "Placeholder for Question 1?",
        answers: {
        a: 'possible answer 1',
            b: 'possible correct answer 2',
                c: 'possible answer 3',
                    d: 'possible answer 4'
    },
    correctAnswer: 'b'
},
{
    question: "Placeholder for Question 2?",
        answers: {
        a: 'possible answer 1',
            b: 'possible answer 2',
                c: 'possible answer 3',
                    d: 'possible correct answer 4'
    },
    correctAnswer: 'd'
},
{
    question: "Placeholder for Question 3?",
        answers: {
        a: 'possible answer 1',
            b: 'possible answer 2',
                c: 'possible correct answer 3',
                    d: 'possible answer 4'
    },
    correctAnswer: 'c'
},
{
    question: "Placeholder for Question 4?",
        answers: {
        a: 'possible correct answer 1',
            b: 'possible answer 2',
                c: 'possible answer 3',
                    d: 'possible answer 4'
    },
    correctAnswer: 'a'
}
];

var quizContainer =
    document.getElementById('quiz');
var resultsContainer =
    document.getElementById('results');
var submitButton =
    document.getElementById('submit');

//how to create the quiz
generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);

// quiz function and layout 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer)
}
// need a place to store possible answer choices
var output = [];
var answers;
*/
// for each question:
for (var i = 0; i < questions.length; i++) {

}
