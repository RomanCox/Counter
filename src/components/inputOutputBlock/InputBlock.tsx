import React from 'react';
import style from './InputOutputBlock.module.css';
import {ButtonsType, InputsOutputType} from "../../app/App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store/store";
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import {
    displayAC,
    errorAC,
    errorInputMaxAC,
    errorInputStartAC,
    maxValueAC,
    startValueAC
} from "../../redux/reducers/InputsOutputReducer";
import {incButtonAC, resetButtonAC, setButtonAC} from "../../redux/reducers/ButtonsReducer";

export const InputBlock = () => {
    let dispatch = useDispatch();
    let buttons = useSelector<rootReducerType, ButtonsType>(state => state.buttons)
    let inputsOutput = useSelector<rootReducerType, InputsOutputType>(state => state.inputsOutput)

    const onClickHandlerForSetButton = () => {
        dispatch(errorAC(2))
        dispatch(displayAC(inputsOutput.start.value))
        dispatch(setButtonAC(true))
        dispatch(incButtonAC(false))
    }

    const changeMaxInputValue = (value: string) => {
        dispatch(maxValueAC(value))
        dispatch(incButtonAC(true))
        dispatch(resetButtonAC(true))
        if (Number(value) <= 0) {
            dispatch(setButtonAC(true))
            dispatch(errorInputMaxAC(1))
            dispatch(displayAC('Enter correct values'))
            dispatch(errorAC(1))
        } else if (Number(value) <= Number(inputsOutput.start.value)) {
            dispatch(setButtonAC(true))
            dispatch(errorInputMaxAC(1))
            dispatch(errorInputStartAC(1))
            dispatch(displayAC('Enter correct values'))
            dispatch(errorAC(1))
        }  else if (Number(value) > 0 && Number(value) > Number(inputsOutput.start.value)) {
            dispatch(setButtonAC(false))
            dispatch(errorInputMaxAC(0))
            dispatch(errorInputStartAC(0))
            dispatch(displayAC("Enter values & press 'SET'"))
            dispatch(errorAC(0))
        }
    }

    const changeStartInputValue = (value: string) => {
        dispatch(startValueAC(value))
        dispatch(incButtonAC(true))
        dispatch(resetButtonAC(true))
        if (Number(value) < 0) {
            dispatch(setButtonAC(true))
            dispatch(errorInputStartAC(1))
            dispatch(displayAC('Enter correct values'))
            dispatch(errorAC(1))
        } else if (Number(value) >= 0 && Number(value) < Number(inputsOutput.max.value)) {
            dispatch(setButtonAC(false))
            dispatch(errorInputStartAC(0))
            dispatch(errorInputMaxAC(0))
            dispatch(displayAC("Enter values & press 'SET'"))
            dispatch(errorAC(0))
        } else if (Number(value) >= Number(inputsOutput.start.value)) {
            dispatch(setButtonAC(true))
            dispatch(errorInputMaxAC(1))
            dispatch(errorInputStartAC(1))
            dispatch(displayAC('Enter correct values'))
            dispatch(errorAC(1))
        }
    }

    return (
        <div className={style.inputOutputBlock}>
            <div className={style.upperBlock}>
                <Input
                    title={inputsOutput.max.title}
                    value={inputsOutput.max.value}
                    changeInputValue={changeMaxInputValue}
                    errorInput={inputsOutput.max.error}
                />
                <Input
                    title={inputsOutput.start.title}
                    value={inputsOutput.start.value}
                    changeInputValue={changeStartInputValue}
                    errorInput={inputsOutput.start.error}
                />
            </div>
            <div className={style.lowerBlock}>
                <Button
                    title={buttons.set.title}
                    onClickHandler={onClickHandlerForSetButton}
                    disable={buttons.set.disable}
                />
            </div>
        </div>
    )
}