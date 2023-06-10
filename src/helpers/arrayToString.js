export const arrayToString = (arr) => {
  const operands = ['*', '/', '+', '-', '%']
  const calcString = arr.join('').replace(/X/g, '*').replace(/%/g, '*0.01*');

  if(operands.includes(calcString[calcString.length - 1])) {
   return calcString.slice(0, -1);
  }else{
    return calcString
  }
}