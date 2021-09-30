const sidesInput = document.querySelectorAll('.primary-input');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click',calcHypotenuse);

function showOutput(message) {
    outputDiv.firstElementChild.innerText = message;
    outputDiv.classList.add('show');
}

function validate(base,height) {
    if(!base || !height) {
        showOutput('Enter both sides.');
    } else if (base == 0  || height == 0) {
        showOutput('Sides cannot be 0');
    } else if (base < 0 || height < 0) {
        showOutput('Sides cannot be negative.')
    } else {
        return true;
    }
}

function calcHypotenuse() {
    let test = validate(sidesInput[0].value,sidesInput[1].value);
    if(test) {
        let base = Number(sidesInput[0].value);
        let height = Number(sidesInput[1].value);
        let hypotenuse = Math.sqrt((base**2)+(height**2));
        if (Number.isInteger(hypotenuse)) {
            showOutput(`The hypotenuse is ${hypotenuse}`);
        } else {
            showOutput(`The hypotenuse is ${hypotenuse.toFixed(2)}`);
        }
    }
}