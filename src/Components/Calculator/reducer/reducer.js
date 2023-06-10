import { actions } from "./actions";
import { evaluate } from "../../../helpers/evaluate";
import { verifyLastIndex } from '../../../helpers/verifyIndex';
import { arrayToString} from "../../../helpers/arrayToString";
export const reducer = (state, action) => {
  const {currentOperand, previousOperand, operation, isComplete, arrOfPrevOperands = []} = state;
  const {type, payload} = action

  switch(type){
    case actions.ADD_DIGIT:
      if(currentOperand && currentOperand.length > 9){
        return state
      }
      if(isComplete && Number(payload) >= 0){
        return {
          ...state,
          isComplete: false,
          currentOperand: payload,
          previousOperand: null,
          arrOfPrevOperands: [],
          evaluation: null 
        }
      }
      if(payload === "0" && currentOperand === "0"){
        return state
      }

      if(payload === "." && currentOperand && currentOperand.includes('.')){
        return state
      }

    return {
      ...state,
      currentOperand:`${currentOperand || ''}${payload}`,
      arrOfPrevOperands: arrOfPrevOperands.length > 0 ? [...arrOfPrevOperands, payload] : [payload]
      
    }
    case actions.ADD_OPERATOR:
      if(currentOperand == null && previousOperand == null){
        return state
      }
      if(payload === '%'){
        return {
          ...state,
          operation: payload,
          arrOfPrevOperands: verifyLastIndex(arrOfPrevOperands, payload),
          previousOperand: currentOperand
        }
      }
      if(currentOperand == null){
        return {
          ...state,
          operation: payload,
          arrOfPrevOperands: verifyLastIndex(arrOfPrevOperands, payload),
        }
      }
      if(previousOperand == null){
        return {
          ...state, 
          operation: payload,
          previousOperand: currentOperand,
          currentOperand: null,
          arrOfPrevOperands: arrOfPrevOperands.length > 0 ? [...arrOfPrevOperands, payload] : [payload]
        }
      }

      return {
        ...state,
        operation: verifyLastIndex(arrOfPrevOperands, payload),
        previousOperand: evaluate(state),
        currentOperand: null,
        arrOfPrevOperands: arrOfPrevOperands.length > 0 ? [...arrOfPrevOperands, payload] : [payload]
        
      }
      case actions.CALCULATE:
          return {
            ...state,
            previousOperand: null,
            operation: null,
            currentOperand: evaluate(state),
            isComplete: true,
            evaluation: eval(arrayToString(arrOfPrevOperands)) === Infinity ? `Cannot divide with zero!` : eval(arrayToString(arrOfPrevOperands)) ,
      }
    case actions.CLEAR:
      return {}
    default: return state
  }
}