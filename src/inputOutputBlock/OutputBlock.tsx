import React from 'react';
import style from './InputOutputBlock.module.css';
import {ButtonsType, InputsOutputType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {Button} from "../button/Button";
import {incButtonAC, resetButtonAC} from "../reducers/ButtonsReducer";
import {displayAC, errorAC} from "../reducers/InputsOutputReducer";

export const OutputBlock = () => {
    let dispatch = useDispatch();
    let buttons = useSelector<rootReducerType, ButtonsType>(state => state.buttons)
    let inputsOutput = useSelector<rootReducerType, InputsOutputType>(state => state.inputsOutput)
    let displayNumber = Number(inputsOutput.display.value)

    const onClickHandlerForIncButton = () => {
        dispatch(resetButtonAC(false))
        let displayNumber = Number(inputsOutput.display.value) + 1
        dispatch(displayAC(String(displayNumber)))
        if (displayNumber === Number(inputsOutput.max.value)) {
            dispatch(errorAC(3))
            dispatch(incButtonAC(true))
        }
    }

    const onClickHandlerForResetButton = () => {
        dispatch(displayAC(inputsOutput.start.value))
        dispatch(errorAC(2))
        dispatch(incButtonAC(false))
        dispatch(resetButtonAC(true))
    }

    return (
        <div className={style.inputOutputBlock}>
            <div className={style.upperBlock}>
            <span className={inputsOutput.display.error === 0 ? `${style.displayText}` :
                inputsOutput.display.error === 1 ? `${style.displayTextError}` :
                    inputsOutput.display.error === 2 ? `${style.displayNumber}` :
                        `${style.displayNumberError}`
            }>
                {inputsOutput.display.error < 2 ? inputsOutput.display.value : displayNumber}
            </span>
            </div>
            <div className={style.lowerBlock}>
                <Button
                    title={buttons.inc.title}
                    onClickHandler={onClickHandlerForIncButton}
                    disable={buttons.inc.disable}
                />
                <Button
                    title={buttons.reset.title}
                    onClickHandler={onClickHandlerForResetButton}
                    disable={buttons.reset.disable}
                />
            </div>
        </div>
    )
}
