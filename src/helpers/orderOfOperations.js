export const orderOfOperations = (array) => {
  const primaryOperators = ['X', '/', '%']
  const secondaryOperators = ['+', '-']

  let i = 0;
  let j = 0;


  while( i < array.length){
    const current = array[i];
    if(primaryOperators.includes(current)){
      //ignore operator if it's the last element of array
      if(i !== array.length - 1 ){
        const operand1 = parseFloat(array[i - 1])
        const operand2 = parseFloat(array[i + 1])
      
        if(!isNaN(operand1) && !isNaN(operand2)){
          let result;
          if(current === 'X'){
            result = operand1 * operand2
          }else if(current ==='/'){
            if(operand2 === 0){
              return [`Cannot divide with zero!`]
            } 
            result = operand1 / operand2
          }else if(current === '%'){
            return operand1 * 0.01 * operand2
          }
          array.splice(i - 1, 3, result.toString());
          
          i = i - 1
        }
      }
    }
    i++
  }
  while(j < array.length){
    const current = array[j];

    if(secondaryOperators.includes(current)){
      if(j !== array.length - 1){
        const operand1 = parseFloat(array[j - 1])
        const operand2 = parseFloat(array[j + 1])

        if(!isNaN(operand1) && !isNaN(operand2)){
          let result;
          if(current === '+'){
            result = operand1 + operand2
          }else if(current === '-'){
            result = operand1 - operand2
          }
          array.splice(j - 1, 3, result.toString());
          j = j - 1
        }
      }
    }
    j++
  }
  return array
}