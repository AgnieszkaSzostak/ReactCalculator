export const verifyLastIndex = (arr, value) => {
  if(arr.length > 0){
    if(Number(arr[arr.length - 1]) >= 0){
      return [...arr, value]
    }else{
      arr.pop()
      return [...arr, value]
    }
  } 
}