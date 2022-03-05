import React, {ChangeEvent} from 'react';
import style from './Input.module.css';

type InputPropsType = {
    title: string,
    value: string,
    errorInput: number,
    changeInputValue: (value: string) => void,
}

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(event.currentTarget.value)

        /*if (props.title === inputsOutput.max.title) {
            dispatch(maxValueAC(event.currentTarget.value))
            dispatch(incButtonAC(true))
            dispatch(resetButtonAC(true))
            if (Number(inputsOutput.start.value) < 0) {
                if (Number(event.currentTarget.value) <= 0) {
                    dispatch(errorInputMaxAC(1))
                } else {
                    dispatch(errorInputMaxAC(0))
                }
            } else {
                if (Number(event.currentTarget.value) <= 0) {
                    dispatch(displayAC('Enter correct values'))
                    dispatch(errorAC(1))
                    dispatch(errorInputMaxAC(1))
                } else {
                    if (Number(event.currentTarget.value) <= Number(inputsOutput.start.value)) {
                        dispatch(displayAC('Enter correct values'))
                        dispatch(errorAC(1))
                        dispatch(errorInputMaxAC(1))
                        dispatch(errorInputStartAC(1))
                        dispatch(setButtonAC(true))
                    } else {
                        dispatch(displayAC("Enter values & press 'SET'"))
                        dispatch(errorAC(0))
                        dispatch(errorInputStartAC(0))
                        dispatch(errorInputMaxAC(0))
                        dispatch(setButtonAC(false))
                    }
                }
            }
        } else {
            console.log(inputsOutput.max.value, inputsOutput.start.value)
            dispatch(startValueAC(event.currentTarget.value))
            dispatch(incButtonAC(true))
            dispatch(resetButtonAC(true))
            if (Number(inputsOutput.max.value) <= 0) {
                if (Number(event.currentTarget.value) < 0) {
                    dispatch(displayAC('Enter correct values'))
                    dispatch(errorAC(1))
                    dispatch(errorInputMaxAC(1))
                    dispatch(errorInputStartAC(1))
                } else {
                    dispatch(errorInputMaxAC(1))
                    dispatch(errorInputStartAC(0))
                }
            } else {
                if (Number(event.currentTarget.value) < 0) {
                    dispatch(displayAC('Enter correct values'))
                    dispatch(errorAC(1))
                    dispatch(errorInputStartAC(1))
                } else {
                    if (Number(event.currentTarget.value) >= Number(inputsOutput.max.value)) {
                        dispatch(displayAC('Enter correct values'))
                        dispatch(errorAC(1))
                        dispatch(errorInputStartAC(1))
                        dispatch(errorInputMaxAC(1))
                        dispatch(setButtonAC(true))
                    } else {
                        dispatch(displayAC("Enter values & press 'SET'"))
                        dispatch(errorAC(0))
                        dispatch(errorInputStartAC(0))
                        dispatch(errorInputMaxAC(0))
                        dispatch(setButtonAC(false))
                    }
                }
            }
        }*/
    }

    return (
        <div className={style.inputsContainer}>
            <span
                className={props.errorInput === 1 ? style.errorTitle : style.title}>{props.title}</span>

            <input
                className={props.errorInput === 1 ? style.errorInput : style.input}
                type={"number"}
                onChange={onChangeHandler}
                value={props.value}
            />
        </div>
    )
}