const displayContainer = document.querySelector(".display-container");

// Add click event listeners to all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        // Determine the type of button clicked and perform the corresponding action
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

// Check if the value is equal to "="
function isEqual(value) {
    return value === "=";
}

// Handle the equal button press
function equalPressed() {
    const expression = displayContainer.textContent;
    const operatorIndex = expression.search(/[+\-*/]/);

    // Extract operands and operator from the expression
    const numberOne = expression.slice(0, operatorIndex);
    const operator = expression[operatorIndex];
    const numberTwo = expression.slice(operatorIndex + 1);

    // Perform the calculation if operands and operator are valid
    if (numberOne !== "" && operator && numberTwo !== "") {
        displayContainer.textContent = operate(parseFloat(numberOne), operator, parseFloat(numberTwo));
    }
}

// Check if the value is equal to "DELETE"
function isDelete(value) {
    return value === "DELETE";
}

// Handle the delete button press
function deletePressed() {
    const currentContent = displayContainer.textContent;
    displayContainer.textContent = currentContent.slice(0, -1);
    console.log("Delete pressed");
}

// Check if the value is equal to "CLEAR"
function isClear(value) {
    return value === "CLEAR";
}

// Handle the clear button press
function clearPressed() {
    displayContainer.textContent = "";
    console.log("Clear pressed");
}

// Check if the value is an operator
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

// Handle the digit button press
function digitPressed(digit) {
    displayContainer.textContent += digit;
    console.log("Display updated: " + displayContainer.textContent);
}

// Handle the operator button press
function operatorPressed(operator) {
    const lastChar = displayContainer.textContent.slice(-1);

    // Check for consecutive operators and log an error
    if (isOperator(lastChar)) {
        if (isOperator(operator)) {
            console.error("Error: Two operators in a row");
            return;
        }
    }

    // Calculate and display result if there is already an operator
    const operatorCount = (displayContainer.textContent.match(/[+\-*/]/g) || []).length;
    if (operatorCount >= 1) {
        equalPressed();
    }

    // Add the operator to the display
    displayContainer.textContent += operator;
    console.log("Operator pressed: " + operator);
}

// Perform the calculation based on the operator
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
            throw new Error("Invalid operator");
    }
}

// Basic arithmetic operations
const add = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const multiply = function (numberOne, numberTwo) {
    return numberOne * numberTwo;
};

const divide = function (numberOne, numberTwo) {
    // Check for division by zero
    if (numberTwo === 0) {
        return displayContainer.textContent = "Dividing by zero? Really?";
    }
    return numberOne / numberTwo;
};
