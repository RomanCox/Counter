import React, {useEffect} from 'react';
import style from './App.module.css';
import {InputBlock} from "./inputOutputBlock/InputBlock";
import {displayAC, errorAC, maxValueAC, startValueAC} from "./reducers/InputsOutputReducer";
import {incButtonAC, resetButtonAC, setButtonAC} from "./reducers/ButtonsReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store/store";
import {OutputBlock} from "./inputOutputBlock/OutputBlock";

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
export type inputsOutputType = {
    start: inputOutputType,
    max: inputOutputType,
    display: inputOutputType
}

export const App = () => {

    let dispatch = useDispatch();
    let buttons = useSelector<rootReducerType, buttonsType>(state=>state.buttons)
    let inputsOutput = useSelector<rootReducerType, inputsOutputType>(state=>state.InputsOutput)

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
            dispatch(displayAC(newDisplay))
            dispatch(errorAC(JSON.parse(errorAsString)))
            dispatch(startValueAC(JSON.parse(startValueAsString)))
            dispatch(maxValueAC(JSON.parse(maxValueAsString)))
            dispatch(setButtonAC(JSON.parse(buttonSetDisableAsString)))
            dispatch(incButtonAC(JSON.parse(buttonIncDisableAsString)))
            dispatch(resetButtonAC(JSON.parse(buttonResetDisableAsString)))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('Display', inputsOutput.display.value)
        sessionStorage.setItem('Error', JSON.stringify(inputsOutput.display.error))
        sessionStorage.setItem('Start', JSON.stringify(inputsOutput.start.value))
        sessionStorage.setItem('Max', JSON.stringify(inputsOutput.max.value))
        sessionStorage.setItem('Set', JSON.stringify(buttons.set.disable))
        sessionStorage.setItem('Inc', JSON.stringify(buttons.inc.disable))
        sessionStorage.setItem('Reset', JSON.stringify(buttons.reset.disable))
    }, [inputsOutput.display.value, inputsOutput.start.value, inputsOutput.max.value])

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
    }

    return (
        <div className={style.appContainer}>
            <InputBlock
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
            <OutputBlock
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
        </div>
    )
}