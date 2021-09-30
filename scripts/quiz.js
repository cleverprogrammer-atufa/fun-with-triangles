const quizForm = document.querySelector('.triangle-quiz');
const submitBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

submitBtn.addEventListener('click',checkAnswers);

const answers = [
    "90°",
    "70°, 40°, 70°",
    "60°, 60°, 60°",
    "40°",
    "Right angled triangle",
    "3,4,5",
    "35°",
    "30°",
    "a + b + c",
    "45°"
]

function showOutput(message) {
    outputDiv.firstElementChild.innerText = message;
    outputDiv.classList.add('show');
}

function checkAnswers() {
    let formAnswers = new FormData(quizForm);
    let points = 0;
    let index = 0;
    for(let answer of formAnswers.values()) {
        if(answer === answers[index]) {
            points += 10;
        }
        index +=1;
    }
    if(points === 0) {
        showOutput(`Oops!! you got only ${points} points!`);
    } else if (points <= 40 ) {
        showOutput(`You got ${points} points!`);
    } else if (points <= 80) {
        showOutput(`Nice!! you got ${points} points!`);
    } else {
        showOutput(`Wow!! You got ${points} points!`);
    }
}