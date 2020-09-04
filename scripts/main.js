let $numberButtons = document.querySelectorAll("button.number");

function pushNumber(event) {
  alert(event.target.value);
}

$numberButtons.forEach(button => {
    button.addEventListener("click", pushNumber)
});
