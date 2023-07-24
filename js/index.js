function sum(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'You maybe on to something';
    }
    return number1 / number2;
}

function operate(operator, number1, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = sum(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            result = 'Invalid operator';
            break;
    }

    return result;
}
