import React, {useEffect, useState} from 'react'
import style from './App.module.css'
import styleInput from './common/styles/UpperBlockContainer.module.css'
import styleLB from './common/styles/LowerBlockContainer.module.css'
import {DisplayBlock} from './displayBlock/DisplayBlock'
import {Button} from './button/Button'
import {ValueBlock} from "./valueBlock/ValueBlock";

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

    let inputs = {
        Max: {
            id: 1,
            title: 'Max Value:',
            value: maxValue
        },
        Start: {
            id: 2,
            title: 'Start Value:',
            value: startValue
        }
    }

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
            <div className={style.blockContainer}>
                <div className={styleInput.container}>
                    <ValueBlock
                        id={inputs.Max.id}
                        title={inputs.Max.title}
                        value={inputs.Max.value}
                        error={error}
                        errorInput={errorInputMax}
                        startValue={startValue}
                        maxValue={maxValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}
                        setErrorInputStart={setErrorInputStart}
                        setErrorInputMax={setErrorInputMax}
                        setDisplay={setDisplay}
                        setError={setError}
                        setButtonSetDisable={setButtonSetDisable}
                        setButtonIncDisable={setButtonIncDisable}
                        setButtonResetDisable={setButtonResetDisable}
                    />
                    <ValueBlock
                        id={inputs.Start.id}
                        title={inputs.Start.title}
                        value={inputs.Start.value}
                        error={error}
                        errorInput={errorInputStart}
                        startValue={startValue}
                        maxValue={maxValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}
                        setErrorInputStart={setErrorInputStart}
                        setErrorInputMax={setErrorInputMax}
                        setDisplay={setDisplay}
                        setError={setError}
                        setButtonSetDisable={setButtonSetDisable}
                        setButtonIncDisable={setButtonIncDisable}
                        setButtonResetDisable={setButtonResetDisable}
                    />
                </div>
                <div className={styleLB.lowerBlock}>
                    <Button
                        title={'SET'}
                        onClickHandler={onClickHandlerForSetButton}
                        disable={buttonSetDisable}
                    />
                </div>
            </div>
            <div className={style.blockContainer}>
                <DisplayBlock
                    display={display}
                    error={error}
                />
                <div className={styleLB.lowerBlock}>
                    <Button
                        title={'INC'}
                        onClickHandler={onClickHandlerForIncButton}
                        disable={buttonIncDisable}
                    />
                    <Button
                        title={'RESET'}
                        onClickHandler={onClickHandlerForResetButton}
                        disable={buttonResetDisable}
                    />
                </div>
            </div>
        </div>
    )
}
