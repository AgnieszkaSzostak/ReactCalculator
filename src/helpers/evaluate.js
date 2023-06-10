export const evaluate = (state) => {
  const {currentOperand, previousOperand, operation,} = state;

  const prev = parseFloat(previousOperand)
  const curr = parseFloat(currentOperand)
  let computation = ''
  if(isNaN(prev) || isNaN(curr)){
    return computation
  }else{
    switch(operation){
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case 'X':
        computation = prev * curr
        break
      case '/':
        if(curr === 0){
          computation = 'Cannot divide with 0'
        }else{
          computation = prev / curr
        }
        break
     
      case '%':
        computation = prev * 0.01 * curr
        break
      default:  return
    }
    return computation.toString()
  }
} 