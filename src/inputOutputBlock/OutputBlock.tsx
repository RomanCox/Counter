import React from 'react';
import style from './InputOutputBlock.module.css';
import {buttonsType, inputsOutputType} from "../App";
import {useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {Button} from "../button/Button";

type InputOutputBlockPropsType = {
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
}

export const OutputBlock = (props: InputOutputBlockPropsType) => {
    let buttons = useSelector<rootReducerType, buttonsType>(state => state.buttons)
    let inputsOutput = useSelector<rootReducerType, inputsOutputType>(state => state.InputsOutput)
    let displayNumber = Number(inputsOutput.display.value)
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
                    onClickHandler={props.onClickHandlerForIncButton}
                    disable={buttons.inc.disable}
                />
                <Button
                    title={buttons.reset.title}
                    onClickHandler={props.onClickHandlerForResetButton}
                    disable={buttons.reset.disable}
                />
            </div>

        </div>
    )
}