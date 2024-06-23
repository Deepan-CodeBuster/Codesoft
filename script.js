let input = document.getElementById('input');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
    input.value += value;
}

function clearDisplay() {
    input.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculateResult() {
    let expression = input.value;
    let operators = ['+', '-', '*', '/'];
    
    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])) {
            operator = operators[i];
            let operands = expression.split(operator);
            operand1 = parseFloat(operands[0]);
            operand2 = parseFloat(operands[1]);
            break;
        }
    }

    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Error';
    }

    input.value = result;
}
