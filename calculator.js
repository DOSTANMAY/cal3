"use strict";

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateTrigFunction(func) {
    var inputValue = parseFloat(document.getElementById('display').value);
    if (isNaN(inputValue)) {
        alert("Invalid input for trigonometric function");
    } else {
        // Convert degrees to radians
        var radians = (inputValue * Math.PI) / 180;

        // Calculate trigonometric function
        switch (func) {
            case 'sin':
                document.getElementById('display').value = Math.sin(radians);
                break;
            case 'cos':
                document.getElementById('display').value = Math.cos(radians);
                break;
            case 'tan':
                document.getElementById('display').value = Math.tan(radians);
                break;
            default:
                break;
        }
    }
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("Invalid input");
    }
}
