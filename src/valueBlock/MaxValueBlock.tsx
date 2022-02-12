import React, {ChangeEvent, useEffect} from 'react';
import inputStyle from './Input.module.css'

type propsType = {
    error: number,
    errorInput: boolean,
    startValue: number,
    maxValue: number,
    setMaxValue: (maxValue: number) => void,
    setDisplay: (display: string) => void,
    setErrorInputStart: (errorInputStart: boolean) => void,
    setErrorInput: (errorInput: boolean) => void,
    setError: (error: number) => void,
    setButtonSetDisable: (buttonSetDisable: boolean) => void,
    setButtonIncDisable: (buttonIncDisable: boolean) => void,
    setButtonResetDisable: (buttonResetDisable: boolean) => void,
}

export const MaxValueBlock = (props: propsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        props.setMaxValue(Number(event.currentTarget.value))
        props.setButtonIncDisable(true)
        props.setButtonResetDisable(true)

        if (Number(event.currentTarget.value) < 0) {
            props.setDisplay('Enter correct values')
            props.setError(1)
            props.setButtonSetDisable(true)
            props.setErrorInput(true)
        } else {
            if (Number(event.currentTarget.value) === 0) {
                props.setDisplay('Enter correct values')
                props.setError(1)
                props.setButtonSetDisable(true)
                props.setErrorInput(true)
                if (props.startValue >= 0) {
                    props.setErrorInputStart(false)
                } else {
                    props.setErrorInputStart(true)
                }
            } else {
                if (Number(event.currentTarget.value) <= props.startValue) {
                    props.setDisplay('Enter correct values')
                    props.setError(1)
                    props.setButtonSetDisable(true)
                    props.setErrorInput(true)
                    props.setErrorInputStart(true)
                } else {
                    props.setButtonSetDisable(false)
                    props.setErrorInput(false)
                    if (props.startValue >= 0) {
                        props.setDisplay("Enter values & press 'SET'")
                        props.setError(0)
                        props.setErrorInputStart(false)
                    } else {
                        props.setDisplay('Enter correct values')
                        props.setError(1)
                        props.setErrorInputStart(true)
                    }
                }
            }
        }
    }

    return (
        <div className={inputStyle.container}>
            <div className={inputStyle.title}>{'Max Value:'}</div>
            <input
                className={props.errorInput ? inputStyle.error : inputStyle.input}
                type={"number"}
                onChange={onChangeHandler}
                value={props.maxValue}
            />
        </div>
    )
}
