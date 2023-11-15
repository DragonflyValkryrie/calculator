const displayContainer = document.querySelector(".display-container");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (isOperator(buttonValue)) {
            operatorPressed(buttonValue);
        } else if (isEqual(buttonValue)) {
            equalPressed();
        } else if (isDelete(buttonValue)) {
            deletePressed();
        } else if (isClear(buttonValue)) {
            clearPressed();
        } else {
            digitPressed(buttonValue);
        }
    });
});

function isEqual(value) {
    return value === "=";
};

function equalPressed() {
    const expression = displayContainer.textContent;
    const operatorIndex = expression.search(/[+\-*/]/);

    const numberOne = expression.slice(0, operatorIndex);
    const operator = expression[operatorIndex];
    const numberTwo = expression.slice(operatorIndex + 1);

    if (numberOne !== "" && operator && numberTwo !== "") {
        displayContainer.textContent = operate(parseInt(numberOne), operator, parseInt(numberTwo));
    };
};

function isDelete(value) {
    return value === "DELETE";
};

function deletePressed() {
    let currentContent = displayContainer.textContent;
    displayContainer.textContent = currentContent.slice(0, -1);
    console.log("Delete pressed");
};

function isClear(value) {
    return value === "CLEAR";
};

function clearPressed() {
    displayContainer.textContent = "";
    console.log("Clear pressed");
};

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
};

function digitPressed(digit) {
    displayContainer.textContent += digit;
    console.log("Display updated: " + displayContainer.textContent);
};

function operatorPressed(operator) {
    const lastChar = displayContainer.textContent.slice(-1);

    if (isOperator(lastChar)) {
        if (isOperator(operator)) {
            console.error("Error: Two operators in a row");
            return;
        };
    };

    displayContainer.textContent += operator;
    console.log("Operator pressed: " + operator);
};

function operate(numberOne, operator, numberTwo) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
        default:
            console.error("Invalid operator");
            return 0;
    };
};

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
    if (numberTwo == 0){
        return displayContainer.textContent = "Dividing by zero? Really?"
    }
    return numberOne / numberTwo;
};
