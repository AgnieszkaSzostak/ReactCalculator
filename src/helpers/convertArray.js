export const convertArray = (array) =>{

  let result = [];
  let currentNumber = '';
  
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    const isDigit = !isNaN(parseInt(current));
  
    if (isDigit) {
      currentNumber += current;
    } else {
      if (currentNumber !== '') {
        result.push(currentNumber);
        currentNumber = '';
      }
      result.push(current);
    }
  }
  
  if (currentNumber !== '') {
    result.push(currentNumber);
  }

  return result
}


