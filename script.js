let displayContainer = document.querySelector(".display-container");
let numberOneDigits = "";
let numberTwoDigits = "";
let operator = ""

document.querySelectorAll("button").forEach(el => {
    el.addEventListener("click", () => {
        const buttonValue = el.textContent;

       if (isOperator(buttonValue)) {
            operatorPressed(buttonValue);
        } else if (isEqual(buttonValue)) {
            equalPressed();
        } else if (isDelete(buttonValue)) {
            deletePressed();
        } else if (isClear(buttonValue)) {
            clearPressed();
        } else 
            digitPressed(buttonValue)
    });
});


function isEqual(value){
    return value === "=";
}

function equalPressed(){
    let expression = displayContainer.textContent;

    const operatorIndex = expression.search(/[+\-*/]/);

    let numberOne = expression.slice(0, operatorIndex);
    let operator = expression[operatorIndex];
    let numberTwo = expression.slice(operatorIndex + 1);

    
    displayContainer.textContent = operate(parseInt(numberOne), operator, parseInt(numberTwo));
    
}

function isDelete(value){
    return value === "DELETE";
}

function deletePressed(){
    let currentContent = displayContainer.textContent;
    displayContainer.textContent = currentContent.slice(0, -1);
    console.log("Delete pressed");
}

function isClear(value) {
    return value === "CLEAR";
}

function clearPressed() {
    displayContainer.textContent = "";
    numberOneDigits = "";
    numberTwoDigits = "";
    console.log("Clear pressed");
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function digitPressed(digit) {
    displayContainer.textContent += digit;
    console.log("Display updated: " + displayContainer.textContent);
}

function operatorPressed(operator) {
    let lastChar = displayContainer.textContent.slice(-1);

    if (isOperator(lastChar)) {
        if (isOperator(operator)) {
            return console.log("Error: Two operators in a row");
        }
    }

    displayContainer.textContent += operator;
    console.log("Operator pressed: " + operator);
}

const add = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
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
        return add(numberOne, numberTwo);
    } else if (operator === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "*") {
        return multiply(numberOne, numberTwo);
    } else (operator === "/") 
        return divide(numberOne, numberTwo);
    
};
