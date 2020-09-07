let $numberButtons = document.querySelectorAll("button.number");
let $equalButton = document.querySelector("button.equal-sign");
let $operatorButtons = document.querySelectorAll("button.operator, button.clear");
var calculation = [];


function pushNumber(event) {
  //alert(event.target.value);
  let value = event.target.value;
  calculation.push(value);
  console.log(calculation);
}

$numberButtons.forEach(button => {
  button.addEventListener("click", pushNumber)
});

function pushOperator(event) {
  //alert(event.target.value);
  let value = event.target.value;
  calculation.push(value);
  console.log(calculation);

  if (value === 'clear') {
    calculation = [];
  }
}

$operatorButtons.forEach(button => {
  button.addEventListener("click", pushOperator)
});

function pushEqual(event) {
  //alert(event.target.value);
  let fullNum1 = "";
  let fullNum2 = "";
  let operator = "";
  let result;

  for (var i = 0; i < calculation.length; i++) {
    if (calculation[i] === '+' || calculation[i] === '-' || calculation[i] === '*' || calculation[i] === '\/') {
      operator = calculation[i];
    } else if (operator) {
      fullNum2 = fullNum2 + calculation[i];
    } else {
      fullNum1 = fullNum1 + calculation[i];
    }
  }

  if (operator === '+') {
    result = parseInt(fullNum1) + parseInt(fullNum2);
  } else if (operator === '-') {
    result = parseInt(fullNum1) - parseInt(fullNum2);
  } else if (operator === '*') {
    result = parseInt(fullNum1) * parseInt(fullNum2);
  } else if (operator === '\/') {
    result = parseInt(fullNum1) / parseInt(fullNum2);
  }else{
    result = fullNum1;
  }

  alert(result);
  calculation = [];
}
$equalButton.addEventListener("click", pushEqual);
