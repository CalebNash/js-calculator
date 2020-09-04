let $Buttons = document.querySelectorAll("button.operator, button.equal-sign, button.number, button.clear");
var calculation = [];

function pushButton(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  
}

$Buttons.forEach(button => {
    button.addEventListener("click", pushButton)
});
