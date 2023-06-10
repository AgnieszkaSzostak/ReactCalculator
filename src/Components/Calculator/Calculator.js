import React, {useReducer} from "react";
import { buttons } from "../../helpers/buttons";
import { reducer } from "./reducer/reducer";
import Button from "../Buttons/Button";
import Screen from "../Screen/Screen";
import ButtonBox from "../Buttons/ButtonBox";
import { actions } from './reducer/actions';
import { checkLastOperator } from "../../helpers/checkLastOperator";
import { convertArray } from "../../helpers/convertArray";
import { orderOfOperations } from "../../helpers/orderOfOperations";
import './Calculator.css'

const Calculator = (props) => {

  const [{evaluation, currentOperand, previousOperand, operation, arrOfPrevOperands, isComplete}, dispatch] = useReducer(reducer, {})
    const runNextCalc = () => {
      if(isComplete){
        dispatch({
          type: actions.CLEAR
        })
      }
    }
    const clearClickHandler = (value) => {
      dispatch({
        type: actions.CLEAR,
      })
    }
    const percentClickHandler = (value) => {
      runNextCalc()
      dispatch({
        type: actions.ADD_OPERATOR,
        payload: value
      })
    }
    const invertClickHandler = (value) => {
      
    }
    const equalsClickHandler = (value) => {
      runNextCalc()
      dispatch({
        type: actions.CALCULATE
      })
      
    }
    const signClickHandler = (value) => {
      runNextCalc()
      dispatch({
        type: actions.ADD_OPERATOR,
        payload: value
      })
      
    }
    
    const digitClickHandler = (value) => {
      runNextCalc()
      dispatch({
        type: actions.ADD_DIGIT,
        payload: value
      })
      
    }
  
    const renderButtons = (buttons) => {
      return buttons.flat().map((value) => 
        <Button 
          key={value} 
          className="buttons__button" 
          onClick={
            value === 'C'
              ? clearClickHandler
              : value === '+/-'
                ? invertClickHandler
                : value === '%'
                  ? percentClickHandler
                  : value === '='
                    ? equalsClickHandler
                    : value === '/' || value === 'X' || value === '+' || value === '-'
                      ? signClickHandler
                      : digitClickHandler
          } 
          value={value}
        />)
    }

    return(
        <div className="calculator">
            <Screen>
              <div className="screen__calculation screen__calculation--order">{
                arrOfPrevOperands && arrOfPrevOperands.length > 0 ? arrOfPrevOperands.join('').replace(/\./g, ',') : null
                }
              </div>
              {/* Calculation - eval func */}
              <div className="screen__calculation screen__calculation--evaluation">{
                evaluation >= 0 || evaluation < 0 
                  ? evaluation.toString().replace(/\./g, ',') 
                  : evaluation
              }
              </div>
              {/* Calculation - no eval func */}
              {/* <div className="screen__calculation screen__calculation--evaluation">{
                  arrOfPrevOperands &&
                  arrOfPrevOperands.length > 0 && 
                  arrOfPrevOperands.some((element) => ['+', '-', 'X', '/'].includes(element)) 
                    ? checkLastOperator(arrOfPrevOperands)
                    : null
                  }</div> */}
              {/* Calculation  - no eval func */}
              {/* <div className="screen__calculation screen__calculation--evaluation">
                {
                    isComplete ? currentOperand : null
                }
              </div> */}
            </Screen>
            <ButtonBox className="buttons">
              {renderButtons(buttons)}
            </ButtonBox>
      </div>
    )
}

export default Calculator