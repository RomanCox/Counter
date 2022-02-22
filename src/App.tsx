import React, {useEffect, useReducer} from 'react';
import style from './App.module.css';
import {InputOutputBlock} from "./inputOutputBlock/InputOutputBlock";
import {displayAC, errorAC, InputsOutputsReducer, maxValueAC, startValueAC} from "./reducers/InputsOutputsReducer";
import {ButtonsReducer, incButtonAC, resetButtonAC, setButtonAC} from "./reducers/ButtonsReducer";

export type buttonTitleType = 'SET' | 'INC' | 'RESET'
export type buttonType = {
    title: buttonTitleType,
    disable: boolean
}
export type buttonsType = {
    set: buttonType,
    inc: buttonType,
    reset: buttonType
}
export type errorType = 0 | 1 | 2 | 3;
export type inputOutputType = {
    title: string,
    value: string,
    error: errorType
}
export type inputsOutputsType = {
    start: inputOutputType,
    max: inputOutputType,
    display: inputOutputType
}

export const App = () => {

    let [buttons, buttonsDispatch] = useReducer(ButtonsReducer, {
        set: {title: 'SET', disable: true},
        inc: {title: 'INC', disable: true},
        reset: {title: 'RESET', disable: true}
    })
    let [inputsOutputs, inputsOutputsDispatch] = useReducer(InputsOutputsReducer, {
        start: {title: 'START VALUE:', value: '0', error: 0},
        max: {title: 'MAX VALUE:', value: '0', error: 0},
        display: {title: 'DISPLAY', value: "Enter values & press 'SET'", error: 0}
    })
    
    useEffect(() => {
        let newDisplay = sessionStorage.getItem('Display')
        let errorAsString = sessionStorage.getItem('Error')
        let startValueAsString = sessionStorage.getItem('Start')
        let maxValueAsString = sessionStorage.getItem('Max')
        let buttonSetDisableAsString = sessionStorage.getItem('Set')
        let buttonIncDisableAsString = sessionStorage.getItem('Inc')
        let buttonResetDisableAsString = sessionStorage.getItem('Reset')
        if (
            newDisplay &&
            errorAsString &&
            startValueAsString &&
            maxValueAsString &&
            buttonSetDisableAsString &&
            buttonIncDisableAsString &&
            buttonResetDisableAsString
        ) {
            inputsOutputsDispatch(displayAC(newDisplay))
            inputsOutputsDispatch(errorAC(JSON.parse(errorAsString)))
            inputsOutputsDispatch(startValueAC(JSON.parse(startValueAsString)))
            inputsOutputsDispatch(maxValueAC(JSON.parse(maxValueAsString)))
            buttonsDispatch(setButtonAC(JSON.parse(buttonSetDisableAsString)))
            buttonsDispatch(incButtonAC(JSON.parse(buttonIncDisableAsString)))
            buttonsDispatch(resetButtonAC(JSON.parse(buttonResetDisableAsString)))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('Display', inputsOutputs.display.value)
        sessionStorage.setItem('Error', JSON.stringify(inputsOutputs.display.error))
        sessionStorage.setItem('Start', JSON.stringify(inputsOutputs.start.value))
        sessionStorage.setItem('Max', JSON.stringify(inputsOutputs.max.value))
        sessionStorage.setItem('Set', JSON.stringify(buttons.set.disable))
        sessionStorage.setItem('Inc', JSON.stringify(buttons.inc.disable))
        sessionStorage.setItem('Reset', JSON.stringify(buttons.reset.disable))
    }, [inputsOutputs.display.value, inputsOutputs.start.value, inputsOutputs.max.value])

    const onClickHandlerForSetButton = () => {
        inputsOutputsDispatch(errorAC(2))
        inputsOutputsDispatch(displayAC(inputsOutputs.start.value))
        buttonsDispatch(setButtonAC(true))
        buttonsDispatch(incButtonAC(false))
    }

    const onClickHandlerForIncButton = () => {
        buttonsDispatch(resetButtonAC(false))
        let displayNumber = Number(inputsOutputs.display.value) + 1
        inputsOutputsDispatch(displayAC(String(displayNumber)))
        if (displayNumber === Number(inputsOutputs.max.value)) {
            inputsOutputsDispatch(errorAC(3))
            buttonsDispatch(incButtonAC(true))
        }
    }

    const onClickHandlerForResetButton = () => {
        inputsOutputsDispatch(displayAC(inputsOutputs.start.value))
        inputsOutputsDispatch(errorAC(2))
        buttonsDispatch(incButtonAC(false))
        buttonsDispatch(resetButtonAC(true))
    }

    return (
        <div className={style.appContainer}>
            <InputOutputBlock
                title={inputsOutputs.start.title + inputsOutputs.max.title}
                inputsOutputs={inputsOutputs}
                inputsOutputsDispatch={inputsOutputsDispatch}
                buttons={buttons}
                buttonsDispatch={buttonsDispatch}
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
            <InputOutputBlock
                title={inputsOutputs.display.title}
                inputsOutputs={inputsOutputs}
                inputsOutputsDispatch={inputsOutputsDispatch}
                buttons={buttons}
                buttonsDispatch={buttonsDispatch}
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
        </div>
    )
}