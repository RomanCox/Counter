import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {InputOutputBlock} from "./inputOutputBlock/InputOutputBlock";

export const App = () => {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [errorInputStart, setErrorInputStart] = useState<boolean>(false)
    let [errorInputMax, setErrorInputMax] = useState<boolean>(false)
    let [error, setError] = useState<number>(0)
    let [display, setDisplay] = useState<string>("Enter values & press 'SET'")
    let [buttonSetDisable, setButtonSetDisable] = useState<boolean>(true)
    let [buttonIncDisable, setButtonIncDisable] = useState<boolean>(true)
    let [buttonResetDisable, setButtonResetDisable] = useState<boolean>(true)

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
            setDisplay(newDisplay)
            setError(JSON.parse(errorAsString))
            setStartValue(JSON.parse(startValueAsString))
            setMaxValue(JSON.parse(maxValueAsString))
            setButtonSetDisable(JSON.parse(buttonSetDisableAsString))
            setButtonIncDisable(JSON.parse(buttonIncDisableAsString))
            setButtonResetDisable(JSON.parse(buttonResetDisableAsString))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('Display', display)
        sessionStorage.setItem('Error', JSON.stringify(error))
        sessionStorage.setItem('Start', JSON.stringify(startValue))
        sessionStorage.setItem('Max', JSON.stringify(maxValue))
        sessionStorage.setItem('Set', JSON.stringify(buttonSetDisable))
        sessionStorage.setItem('Inc', JSON.stringify(buttonIncDisable))
        sessionStorage.setItem('Reset', JSON.stringify(buttonResetDisable))
    }, [display, startValue, maxValue])

    const onClickHandlerForSetButton = () => {
        setDisplay(JSON.stringify(startValue))
        setError(2)
        setButtonSetDisable(true)
        setButtonIncDisable(false)
    }

    const onClickHandlerForIncButton = () => {
        setButtonResetDisable(false)
        let displayNumber = Number(display) + 1
        setDisplay(String(displayNumber))
        if (Number(display) + 1 === Number(maxValue)) {
            setError(3)
            setButtonIncDisable(true)
        }
    }

    const onClickHandlerForResetButton = () => {
        setDisplay(JSON.stringify(startValue))
        setError(2)
        setButtonIncDisable(false)
        setButtonResetDisable(true)
    }

    return (
        <div className={style.appContainer}>
            <InputOutputBlock
                title={'LEFT BLOCK'}
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                errorInputStart={errorInputStart}
                errorInputMax={errorInputMax}
                setErrorInputStart={setErrorInputStart}
                setErrorInputMax={setErrorInputMax}
                display={display}
                setDisplay={setDisplay}
                error={error}
                setError={setError}
                buttonSetDisable={buttonSetDisable}
                buttonIncDisable={buttonIncDisable}
                buttonResetDisable={buttonResetDisable}
                setButtonSetDisable={setButtonSetDisable}
                setButtonIncDisable={setButtonIncDisable}
                setButtonResetDisable={setButtonResetDisable}
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
            <InputOutputBlock
                title={'RIGHT BLOCK'}
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                errorInputStart={errorInputStart}
                errorInputMax={errorInputMax}
                setErrorInputStart={setErrorInputStart}
                setErrorInputMax={setErrorInputMax}
                display={display}
                setDisplay={setDisplay}
                error={error}
                setError={setError}
                buttonSetDisable={buttonSetDisable}
                buttonIncDisable={buttonIncDisable}
                buttonResetDisable={buttonResetDisable}
                setButtonSetDisable={setButtonSetDisable}
                setButtonIncDisable={setButtonIncDisable}
                setButtonResetDisable={setButtonResetDisable}
                onClickHandlerForSetButton={onClickHandlerForSetButton}
                onClickHandlerForIncButton={onClickHandlerForIncButton}
                onClickHandlerForResetButton={onClickHandlerForResetButton}
            />
        </div>
    )
}