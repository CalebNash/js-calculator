let $numberButtons = document.querySelectorAll("button.number");
let $equalButton = document.querySelector("button.equal-sign");
let $operatorButtons = document.querySelectorAll("button.operator, button.clear");
var calculation = [];

function pushNumber(event) {
  alert(event.target.value);
  let value = event.target.value;
  calculation.push(value);
  console.log(calculation);

}

$numberButtons.forEach(button => {
    button.addEventListener("click", pushNumber)
});

function pushOperator(event) {
  alert(event.target.value);
  let value = event.target.value;
  calculation.push(value);
  console.log(calculation);
}

$operatorButtons.forEach(button => {
    button.addEventListener("click", pushOperator)
});

function pushEqual(event) {
  alert(event.target.value);
  let fullNum1 = "";
  let fullNum2 = "";
  let operator = "";

  for(var i = 0; i < calculation.length; i++){
    if(calculation[i] === '+' || calculation[i] === '-' ||calculation[i] === '*' || calculation[i] === '\/'){
      operator = calculation[i];
    }
  else if(operator){
    fullNum2 = fullNum2 + calculation[i];
  }
  else {
    fullNum1 = fullNum1 + calculation[i];
  }
    console.log(operator);
    console.log(fullNum1);
    console.log(fullNum2);
  }
  alert(operator);
//console.log(fullNum1);
}
  $equalButton.addEventListener("click", pushEqual);
