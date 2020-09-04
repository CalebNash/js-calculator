let $Buttons = document.querySelectorAll("button.operator, button.equal-sign, button.number, button.clear");



function pushOperator(event) {
  alert(event.target.value);
}

$Buttons.forEach(button => {
    button.addEventListener("click", pushOperator)
});
