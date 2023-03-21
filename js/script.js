function main() {
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
  return Math.round(result * 100) / 100;
}

function populateScreen() {
  const screen = document.querySelector('#screen');
  screen.textContent = '';
  const keys = document.querySelectorAll('.key');
  let x = '';
  let y = '';
  let operator = '';
  keys.forEach(key => {
    key.addEventListener('click', (e) => {
      let value = key.textContent;
      if (value === '+' || value === '-' || value === '*' || value === '/' || value === '=') {
        if (value === '=' || operator) {
          x = operate(Number(x), Number(y), operator);
          screen.textContent = x;
          y = '';
          operator = '';
        }
        if (value !== '=') {
          operator = e.target.textContent;
          screen.textContent += operator;
        }
      }
      else if (value === 'AC') {
        screen.textContent = '';
        x = '';
        y = '';
        operator = '';
      }
      else {
        if (!operator) {
          x += e.target.textContent;
          screen.textContent = x;
        }
        else {
          y += e.target.textContent;
          screen.textContent += e.target.textContent;
        }
      }
    });
  });
}

main();
