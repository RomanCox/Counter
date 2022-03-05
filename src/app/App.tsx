import React from 'react';
import style from './App.module.css';
import {InputBlock} from "../components/inputOutputBlock/InputBlock";
import {OutputBlock} from "../components/inputOutputBlock/OutputBlock";

export type ButtonTitleType = 'SET' | 'INC' | 'RESET'
export type ButtonType = {
    title: ButtonTitleType,
    disable: boolean
}
export type ButtonsType = {
    set: ButtonType,
    inc: ButtonType,
    reset: ButtonType
}
export type ErrorType = 0 | 1 | 2 | 3;
export type InputOutputType = {
    title: string,
    value: string,
    error: ErrorType
}
export type InputsOutputType = {
    start: InputOutputType,
    max: InputOutputType,
    display: InputOutputType
}

export const App = () => {
    /*const isSome = inputsOutput.display.error === 0 ? `${s.displayText}` :
        inputsOutput.display.error === 1 ? `${s.displayTextError}` :
            inputsOutput.display.error === 2 ? `${s.displayNumber}` :
                `${s.displayNumberError}`

    const onClickHandlerForSetButton = () => {
        dispatch(errorAC(2))
        dispatch(displayAC(inputsOutput.start.value))
        dispatch(setButtonAC(true))
        dispatch(incButtonAC(false))
    }

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
    }*/

    return (
        <div className={style.appContainer}>
            <InputBlock />
            <OutputBlock />
            {/*<div className={s.inputOutputBlock}>
                <div className={s.upperBlock}>
                    <Input
                        title={inputsOutput.max.title}
                        value={inputsOutput.max.value}
                        errorInput={inputsOutput.max.error}
                    />
                    <Input
                        title={inputsOutput.start.title}
                        value={inputsOutput.start.value}
                        errorInput={inputsOutput.start.error}
                    />
                </div>
                <div className={s.lowerBlock}>
                    <Button
                        title={buttons.set.title}
                        onClickHandler={onClickHandlerForSetButton}
                        disable={buttons.set.disable}
                    />
                </div>
            </div>

            <div className={s.inputOutputBlock}>
                <div className={s.upperBlock}>
            <span className={isSome}>
                {inputsOutput.display.error < 2 ? inputsOutput.display.value : Number(inputsOutput.display.value)}
            </span>
                </div>
                <div className={s.lowerBlock}>
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
            </div>*/}
        </div>
    )
}