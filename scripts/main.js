let $numberButtons = document.querySelectorAll("button.number");
let $equalButton = document.querySelector("button.equal-sign");
let $operatorButtons = document.querySelectorAll("button.operator, button.clear");
var calculation = [];

function pushNumber(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);

}

$numberButtons.forEach(button => {
    button.addEventListener("click", pushNumber)
});

function pushOperator(event) {
  alert(event.target.value);
}

$operatorButtons.forEach(button => {
    button.addEventListener("click", pushOperator)
});

function pushEqual(event) {
  alert(event.target.value);
}
  $equalButton.addEventListener("click", pushEqual);
