function main() {
  let x = 8;
  let y = 2;
  let operator = '/';
  console.log(operate(x, y, operator));
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
  return x / y;
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

main();
