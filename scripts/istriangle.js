const angleInputs = document.querySelectorAll('.primary-input');
const outputDiv = document.getElementById('output');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click',checkAngles);

function showOutput(message) {
    outputDiv.firstElementChild.innerText = message;
    outputDiv.classList.add('show')

}

function calcSum() {
    let sum = 0;
    for(let angle of angleInputs) {
        sum += Number(angle.value);
    }
    return sum;
}

function validate() {
    let flag = 0;
        if(!angleInputs[0].value || !angleInputs[1].value || !angleInputs[2].value ) {
            flag = 0;
            showOutput('Enter all the angles.');
        } else if(angleInputs[0].value <= 0 || angleInputs[1].value <= 0 || angleInputs[2].value <= 0) {
            flag = 0;
            showOutput('Angles must be greater than 0.');
        } else if(angleInputs[0].value > 180 || angleInputs[1].value > 180 || angleInputs[2].value >180) {
            showOutput('Angles must be less than 180°')
        }
        else {
            flag = 1;
        }
    if(flag === 0) {
        return  false;
    } else {
        return true;
    }

}

function checkAngles() {
    let test = validate();
    if(test) {
        let sum = calcSum();
        if(sum === 180) {
            showOutput('These sides could form a triangle.')
        } else {
            showOutput('These sides cannot form a triangle.');
        }
    }
}