const display = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');

console.log(buttons);

buttons.forEach(button => button.onclick = function(){
    if (button.textContent === "="){
        display.value = eval(display.value); // kalkulimi
    } else if (button.textContent === "C") {
        display.value = "";
    } else {
        display.value += button.textContent; // numri xoperatori numri
    }
})

console.log(buttons);