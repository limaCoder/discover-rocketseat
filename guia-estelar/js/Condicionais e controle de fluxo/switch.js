// switch

function calculate (number1, operator, number2) {
  let result = 0;
  
  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('operador não definido')
      break
  }

  return result
}

console.log(calculate(2, '*', 3))