import React, {ChangeEvent} from 'react';
import style from './Input.module.css';
import {inputsOutputType} from "../App";
import {incButtonAC, resetButtonAC, setButtonAC} from "../reducers/ButtonsReducer";
import {
    displayAC,
    errorAC,
    errorInputMaxAC,
    errorInputStartAC,
    maxValueAC,
    startValueAC
} from "../reducers/InputsOutputReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";

type InputPropsType = {
    title: string,
    value: string,
    errorInput: number,
}

export const Input = (props: InputPropsType) => {
    let dispatch = useDispatch();
    let inputsOutput = useSelector<rootReducerType, inputsOutputType>(state => state.InputsOutput)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (props.title === 'MAX VALUE:') {
            dispatch(maxValueAC(event.currentTarget.value))
            dispatch(incButtonAC(true))
            dispatch(resetButtonAC(true))
            if (Number(event.currentTarget.value) < 0) {
                dispatch(displayAC('Enter correct values'))
                dispatch(errorAC(1))
                dispatch(errorInputMaxAC(1))
                dispatch(setButtonAC(true))
            } else {
                if (Number(event.currentTarget.value) === 0) {
                    dispatch(displayAC('Enter correct values'))
                    dispatch(errorAC(1))
                    dispatch(errorInputMaxAC(1))
                    dispatch(setButtonAC(true))
                    if (Number(inputsOutput.start.value) >= 0) {
                        dispatch(errorInputStartAC(0))
                    } else {
                        dispatch(errorInputStartAC(1))
                    }
                } else {
                    if (Number(event.currentTarget.value) <= Number(inputsOutput.start.value)) {
                        dispatch(displayAC('Enter correct values'))
                        dispatch(errorAC(1))
                        dispatch(errorInputStartAC(1))
                        dispatch(errorInputMaxAC(1))
                        dispatch(setButtonAC(true))
                    } else {
                        dispatch(setButtonAC(false))
                        dispatch(errorInputMaxAC(0))
                        if (Number(inputsOutput.start.value) >= 0) {
                            dispatch(displayAC("Enter values & press 'SET'"))
                            dispatch(errorAC(0))
                            dispatch(errorInputStartAC(0))
                        } else {
                            dispatch(displayAC('Enter correct values'))
                            dispatch(errorAC(1))
                            dispatch(errorInputStartAC(1))
                        }
                    }
                }
            }
        } else {
            dispatch(startValueAC(event.currentTarget.value))
            dispatch(incButtonAC(true))
            dispatch(resetButtonAC(true))
            if (Number(event.currentTarget.value) < 0) {
                dispatch(displayAC('Enter correct values'))
                dispatch(errorAC(1))
                dispatch(errorInputStartAC(1))
                dispatch(setButtonAC(true))
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
            if (event.currentTarget.value === '0' && inputsOutput.max.value === '0') {
                dispatch(errorInputMaxAC(1))
                dispatch(errorInputStartAC(0))
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