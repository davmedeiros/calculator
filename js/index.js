function sum(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
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

function addBehavior() {
    const numericKeys = document.querySelectorAll('#keypad button.number');
    const operatorKeys = document.querySelectorAll('#keypad button.operator')
    const equalsKey = document.querySelector('#equals');
    const screen = document.querySelector('#screen p');
    let displayValue = '';
    let bufferValue = '';
    let selectedOperator = '';

    numericKeys.forEach(key => {
        key.addEventListener('click', (e) => {
            displayValue += e.target.value;
            screen.textContent = displayValue;
            if (e.target.id === 'point') {
                e.target.disabled = true;
            }
        })
    });

    operatorKeys.forEach(key => {
        key.addEventListener('click', (e) => {
            bufferValue = displayValue;
            displayValue = '';
            screen.textContent = displayValue;
            e.target.classList.add('selected');
            selectedOperator = e.target.value;
        })
    });

    equalsKey.addEventListener('click', () => {
        screen.textContent = operate(selectedOperator, bufferValue, displayValue);
        displayValue = '';
        bufferValue = '';
    })

}

addBehavior();
