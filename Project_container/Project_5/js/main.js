const display = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.onclick = function() {
    const value = button.textContent;

    if (value === "=") {
        try {
            display.value = safeEval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (value === "C") {
        display.value = "";
    } else {
        if (display.value === "Error"){
            display.value = ""
        }
        if (isValidInput(display.value, value)) {
            display.value += value;
        }
    }
});

// Funksion për të ekzekutuar llogaritjet në mënyrë të sigurt
function safeEval(expression) {
    return Function(`"use strict"; return (${expression})`)();
}

// Funksion për të ndaluar përdoruesin të shtypë operatorë të shumëfishtë
function isValidInput(current, next) {
    const operators = ["+", "-", "*", "/"];
    if (operators.includes(next) && operators.includes(current.slice(-1))) {
        return false;
    }
    return true;
}