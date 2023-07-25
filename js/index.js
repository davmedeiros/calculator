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

function userInterfaceController() {
    const numericKeys = document.querySelectorAll('#keypad button.number');
    const operatorKeys = document.querySelectorAll('#keypad button.operator')
    const equalsKey = document.querySelector('#equals');
    const clearAllKey = document.querySelector('#clear-all');
    const floatingPointKey = document.querySelector('#point');
    const screen = document.querySelector('#screen p');
    let displayValue = '';
    let bufferValue = '';
    let selectedOperator = '';

    function isAnyOperatorSelected() {
        let hasSelected = false;

        operatorKeys.forEach(key => {
            if (key.classList.contains('selected')) {
                hasSelected = true;
            }
        });

        return hasSelected;
    }

    function clearSelectedOperators() {
        operatorKeys.forEach(key => {
            if (key.classList.contains('selected')) {
                key.classList.remove('selected');
            }
        });
    }

    function reset() {
        displayValue = '';
        bufferValue = '';
        floatingPointKey.disabled = false;
        clearSelectedOperators();
    }

    function showResult() {
        displayValue = operate(selectedOperator, bufferValue, displayValue);
        screen.textContent = displayValue;
    }

    numericKeys.forEach(key => {
        key.addEventListener('click', (e) => {
            if (isAnyOperatorSelected() && displayValue) {
                bufferValue = displayValue;
                displayValue = '';
            }
            displayValue += e.target.value;
            screen.textContent = displayValue;
            if (e.target.id === 'point') {
                floatingPointKey.disabled = true;
            }
        })
    });

    operatorKeys.forEach(key => {
        key.addEventListener('click', (e) => {

            if (isAnyOperatorSelected() && bufferValue) {
                clearSelectedOperators();
                showResult();
                bufferValue = '';
            } else {
                bufferValue = displayValue;
                displayValue = '';
                screen.textContent = displayValue;
            }

            selectedOperator = e.target.value;
            e.target.classList.add('selected');
            floatingPointKey.disabled = false;
        })
    });

    equalsKey.addEventListener('click', () => {
        // TODO: The current implementation leaves the app in a funky state.
        // Some form of soft reset while keeping some values needs to be done here.
        showResult();
    });

    clearAllKey.addEventListener('click', () => {
        reset();
        screen.textContent = displayValue;
    });
}

userInterfaceController();
