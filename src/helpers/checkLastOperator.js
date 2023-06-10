import { orderOfOperations } from "./orderOfOperations"    
import { convertArray } from './convertArray';

export const checkLastOperator = (arr) => {
      const array = orderOfOperations(convertArray(arr))
      if(array.length === 1){
        return array
      }else{
        array.pop()
        return array
      }
    }