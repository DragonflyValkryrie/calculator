let displayContainer = document.querySelector(".display-container");
let numberOneDigits = "";
let numberTwoDigits = "";

document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
        const buttonValue = el.textContent;

        if (isDigit(buttonValue)) {
            digitPressed(buttonValue);
        } else if (isOperator(buttonValue)) {
            operatorPressed(buttonValue);
        } else if (isDelete(buttonValue)){
            deletePressed(buttonValue);
        } else 
        clearPressed(buttonValue);

    });
});

function isDelete(value){
    return value === "DELETE";
}

function deletePressed(){
    let currentContent = displayContainer.textContent;
    displayContainer.textContent = currentContent.slice(0, -1);
}

function isClear(value) {
    return value === "CLEAR";
}

function clearPressed() {
    displayContainer.textContent = "";
    numberOneDigits = "";
    numberTwoDigits = "";
}
function isDigit(value) {
    return /^\d+$/.test(value);
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function digitPressed(digit) {
    displayContainer.textContent += digit;
    console.log("Display updated: " + displayContainer.textContent);
}

function operatorPressed(operator) {
    displayContainer.textContent += operator;
    console.log("Operator pressed: " + operator);
}

const add = function(numberOne, numberTwo) {
    return numberOne, numberTwo;
};

const subtract = function(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const multiply = function(numberOne, numberTwo) {
    return numberOne * numberTwo;
};

const divide = function(numberOne, numberTwo) {
    return numberOne / numberTwo;
};

function operate(numberOne, operator, numberTwo) {
    if (operator === "+") {
        add(numberOne, numberTwo);
    } else if (operator === "-") {
        subtract(numberOne, numberTwo);
    } else if (operator === "*") {
        multiply(numberOne, numberTwo);
    } else (operator === "/") 
        divide(numberOne, numberTwo);
    
};
