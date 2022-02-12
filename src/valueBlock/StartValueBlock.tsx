import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type propsType = {
    error: number,
    errorInput: boolean,
    startValue: number,
    maxValue: number,
    setStartValue: (startValue: number) => void,
    setErrorInput: (errorInput: boolean) => void,
    setErrorInputMax: (errorInputMax: boolean) => void,
    setDisplay: (display: string) => void,
    setError: (error: number) => void,
    setButtonSetDisable: (buttonSetDisable: boolean) => void,
    setButtonIncDisable: (buttonIncDisable: boolean) => void,
    setButtonResetDisable: (buttonResetDisable: boolean) => void,
}

export const StartValueBlock = (props: propsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        props.setStartValue(Number(event.currentTarget.value))
        props.setButtonIncDisable(true)
        props.setButtonResetDisable(true)

        if (Number(event.currentTarget.value) < 0) {
            props.setDisplay('Enter correct values')
            props.setError(1)
            props.setButtonSetDisable(true)
            props.setErrorInput(true)
        } else {
            if (Number(event.currentTarget.value) >= props.maxValue) {
                props.setDisplay('Enter correct values')
                props.setError(1)
                props.setButtonSetDisable(true)
                props.setErrorInput(true)
                props.setErrorInputMax(true)
            } else {
                props.setDisplay("Enter values & press 'SET'")
                props.setError(0)
                props.setButtonSetDisable(false)
                props.setErrorInput(false)
                props.setErrorInputMax(false)
            }
        }
        if (Number(event.currentTarget.value) === 0 && props.maxValue === 0) {
            props.setErrorInputMax(true)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.title}>{'Start Value:'}</div>
            <input
                className={props.errorInput ? style.error : style.input}
                type={"number"}
                onChange={onChangeHandler}
                value={props.startValue}
            />
        </div>
    )
}
