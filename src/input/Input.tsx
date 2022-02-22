import React, {ChangeEvent} from 'react';
import style from './Input.module.css';
import {inputsOutputsType} from "../App";
import {incButtonAC, resetButtonAC, setButtonAC} from "../reducers/ButtonsReducer";
import {
    displayAC,
    errorAC,
    errorInputMaxAC,
    errorInputStartAC,
    maxValueAC,
    startValueAC
} from "../reducers/InputsOutputsReducer";


type InputPropsType = {
    title: string,
    value: string,
    errorInput: number,
    inputsOutputs: inputsOutputsType,
    inputsOutputsDispatch: (value: any) => void,
    buttonsDispatch: (value: any) => void,
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (props.title === 'MAX VALUE:') {
            props.inputsOutputsDispatch(maxValueAC(event.currentTarget.value))
            props.buttonsDispatch(incButtonAC(true))
            props.buttonsDispatch(resetButtonAC(true))

            if (Number(event.currentTarget.value) < 0) {
                props.inputsOutputsDispatch(displayAC('Enter correct values'))
                props.inputsOutputsDispatch(errorAC(1))
                props.inputsOutputsDispatch(errorInputMaxAC(1))
                props.buttonsDispatch(setButtonAC(true))

            } else {
                if (Number(event.currentTarget.value) === 0) {
                    props.inputsOutputsDispatch(displayAC('Enter correct values'))
                    props.inputsOutputsDispatch(errorAC(1))
                    props.inputsOutputsDispatch(errorInputMaxAC(1))
                    props.buttonsDispatch(setButtonAC(true))
                    if (Number(props.inputsOutputs.start.value) >= 0) {
                        props.inputsOutputsDispatch(errorInputStartAC(0))
                    } else {
                        props.inputsOutputsDispatch(errorInputStartAC(1))
                    }
                } else {
                    if (Number(event.currentTarget.value) <= Number(props.inputsOutputs.start.value)) {
                        props.inputsOutputsDispatch(displayAC('Enter correct values'))
                        props.inputsOutputsDispatch(errorAC(1))
                        props.inputsOutputsDispatch(errorInputStartAC(1))
                        props.inputsOutputsDispatch(errorInputMaxAC(1))
                        props.buttonsDispatch(setButtonAC(true))
                    } else {
                        props.buttonsDispatch(setButtonAC(false))
                        props.inputsOutputsDispatch(errorInputMaxAC(0))
                        if (Number(props.inputsOutputs.start.value) >= 0) {
                            props.inputsOutputsDispatch(displayAC("Enter values & press 'SET'"))
                            props.inputsOutputsDispatch(errorAC(0))
                            props.inputsOutputsDispatch(errorInputStartAC(0))
                        } else {
                            props.inputsOutputsDispatch(displayAC('Enter correct values'))
                            props.inputsOutputsDispatch(errorAC(1))
                            props.inputsOutputsDispatch(errorInputStartAC(1))
                        }
                    }
                }
            }
        } else {
            props.inputsOutputsDispatch(startValueAC(event.currentTarget.value))
            props.buttonsDispatch(incButtonAC(true))
            props.buttonsDispatch(resetButtonAC(true))

            if (Number(event.currentTarget.value) < 0) {
                props.inputsOutputsDispatch(displayAC('Enter correct values'))
                props.inputsOutputsDispatch(errorAC(1))
                props.inputsOutputsDispatch(errorInputStartAC(1))
                props.buttonsDispatch(setButtonAC(true))
            } else {
                if (Number(event.currentTarget.value) >= Number(props.inputsOutputs.max.value)) {
                    props.inputsOutputsDispatch(displayAC('Enter correct values'))
                    props.inputsOutputsDispatch(errorAC(1))
                    props.inputsOutputsDispatch(errorInputStartAC(1))
                    props.inputsOutputsDispatch(errorInputMaxAC(1))
                    props.buttonsDispatch(setButtonAC(true))
                } else {
                    props.inputsOutputsDispatch(displayAC("Enter values & press 'SET'"))
                    props.inputsOutputsDispatch(errorAC(0))
                    props.inputsOutputsDispatch(errorInputStartAC(0))
                    props.inputsOutputsDispatch(errorInputMaxAC(0))
                    props.buttonsDispatch(setButtonAC(false))
                }
            }
            if (event.currentTarget.value === '0' && props.inputsOutputs.max.value === '0') {
                props.inputsOutputsDispatch(errorInputMaxAC(1))
                props.inputsOutputsDispatch(errorInputStartAC(0))
            }
        }
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