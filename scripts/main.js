let $numberButtons = document.querySelectorAll("button.number");

function pushNumber(event) {
  alert(event.target.value);
}

$numberButtons.forEach(button => {
    button.addEventListener("click", pushNumber)
});

let $operatorButtons = document.querySelectorAll("button.operator");

function pushOperator(event) {
  alert(event.target.value);
}

$operatorButtons.forEach(button => {
    button.addEventListener("click", pushOperator)
});
