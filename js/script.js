function main() {
  let x = 0;
  let y = 0;
  let operator = '';
  populateScreen();
  return 0;
}

function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return (![x, y].includes(0)) ? x / y : '-.-';
}

function operate(x, y, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = sum(x, y);
      break;
    case '-':
      result = subtract(x, y);
      break;
    case '*':
      result = multiply(x, y);
      break;
    case '/':
      result = divide(x, y);
      break;
    default:
      return 'Invalid operator';
  }
  return result;
}

function populateScreen() {
  const numKeys = document.querySelectorAll('.key');
  const screen = document.querySelector('#screen');
  screen.textContent = '';
  numKeys.forEach(key => {
    key.addEventListener('click', e => {
      keyValue = e.target.textContent;
      if (keyValue === '=') {
        calculate(screen.textContent);
        return;
      }
      screen.textContent += e.target.textContent;
    })
  });
}

function calculate(string) {
  const digits = string.split('');
  let operator = '';
  let x = '';
  let y = '';
  digits.forEach(digit => {
    if (digit === '+' || digit === '-' || digit === '*' || digit === '/') {
      if (operator) {
        x = operate(Number(x), Number(y), operator);
        operator = (operator !== digit) ? digit : operator;
        y = '';
      }
      else {
        operator = digit;
      }
    }
    else {
      if (operator) {
        y += digit;
      }
      else {
        x += digit;
      }
    }
  });
  console.log(operate(Number(x), Number(y), operator));
}

main();
