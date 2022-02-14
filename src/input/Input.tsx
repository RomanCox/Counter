import React, {ChangeEvent} from 'react'
import style from './Input.module.css'

type InputPropsType = {
    title: string,
    value: number,
    error: number,
    errorInput: boolean,
    startValue: number,
    maxValue: number,
    setStartValue: (startValue: number) => void,
    setMaxValue: (maxValue: number) => void,
    setErrorInputStart: (errorInputStart: boolean) => void,
    setErrorInputMax: (errorInputMax: boolean) => void,
    setDisplay: (display: string) => void,
    setError: (error: number) => void,
    setButtonSetDisable: (buttonSetDisable: boolean) => void,
    setButtonIncDisable: (buttonIncDisable: boolean) => void,
    setButtonResetDisable: (buttonResetDisable: boolean) => void,
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (props.title === 'MAX VALUE:') {
            props.setMaxValue(Number(event.currentTarget.value))
            props.setButtonIncDisable(true)
            props.setButtonResetDisable(true)

            if (Number(event.currentTarget.value) < 0) {
                props.setDisplay('Enter correct values')
                props.setError(1)
                props.setButtonSetDisable(true)
                props.setErrorInputMax(true)
            } else {
                if (Number(event.currentTarget.value) === 0) {
                    props.setDisplay('Enter correct values')
                    props.setError(1)
                    props.setButtonSetDisable(true)
                    props.setErrorInputMax(true)
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
                        props.setErrorInputMax(true)
                        props.setErrorInputStart(true)
                    } else {
                        props.setButtonSetDisable(false)
                        props.setErrorInputMax(false)
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
        } else {
            props.setStartValue(Number(event.currentTarget.value))
            props.setButtonIncDisable(true)
            props.setButtonResetDisable(true)

            if (Number(event.currentTarget.value) < 0) {
                props.setDisplay('Enter correct values')
                props.setError(1)
                props.setButtonSetDisable(true)
                props.setErrorInputStart(true)
            } else {
                if (Number(event.currentTarget.value) >= props.maxValue) {
                    props.setDisplay('Enter correct values')
                    props.setError(1)
                    props.setButtonSetDisable(true)
                    props.setErrorInputStart(true)
                    props.setErrorInputMax(true)
                } else {
                    props.setDisplay("Enter values & press 'SET'")
                    props.setError(0)
                    props.setButtonSetDisable(false)
                    props.setErrorInputStart(false)
                    props.setErrorInputMax(false)
                }
            }
            if (Number(event.currentTarget.value) === 0 && props.maxValue === 0) {
                props.setErrorInputMax(true)
            }
        }
    }

    return (
        <div className={style.inputsContainer}>
            <span
                className={props.errorInput ? style.errorTitle : style.title}>{props.title}</span>
            <input
                className={props.errorInput ? style.errorInput : style.input}
                type={"number"}
                onChange={onChangeHandler}
                value={props.value}
            />
        </div>
    )
}