const sidesInput = document.querySelectorAll('.primary-input');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click',calcArea);

function showOutput(message) {
    outputDiv.firstElementChild.innerText = message;
    outputDiv.classList.add('show');
}

function validate(sideOne,sideTwo,sideThree) {
    // console.log(sideOne,sideTwo,sideThree);
    if(!sideOne || !sideTwo || !sideThree) {
        showOutput('Enter all the sides.');
    } else if (sideOne == 0  || sideTwo == 0 || sideThree == 0) {
        showOutput('Sides cannot be 0');
    } else if (sideOne < 0 || sideTwo < 0 || sideThree < 0) {
        showOutput('Sides cannot be negative.')
    } else {
        return true;
    }
}

function calcArea() {
    let test = validate(sidesInput[0].value,sidesInput[1].value,sidesInput[2].value);
    if(test) {
        let sideOne = Number(sidesInput[0].value);
        let sideTwo = Number(sidesInput[1].value);
        let sideThree = Number(sidesInput[2].value);
        if (
            sideOne + sideTwo > sideThree &&
            sideTwo + sideTwo > sideOne &&
            sideOne + sideThree > sideTwo
          ) {
            let semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
            let area =  Math.sqrt(
                semiPerimeter *
                  (semiPerimeter - sideOne) *
                  (semiPerimeter - sideTwo) *
                  (semiPerimeter - sideThree)
              );
              if(Number.isInteger(area)) {
                showOutput(`Area of a triangle using heron's formula is ${area} units`);
              } else {
                  showOutput(`Area of a triangle using heron's formula is ${area.toFixed(4)} units`)
              } 
          } else {
              showOutput('Enter sides such that the sum of two sides is greater than the other side.')
          }
    }
}