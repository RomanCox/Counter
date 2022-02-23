import React from 'react';
import style from './InputOutputBlock.module.css';
import {ButtonsType, InputsOutputType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import {displayAC, errorAC} from "../reducers/InputsOutputReducer";
import {incButtonAC, setButtonAC} from "../reducers/ButtonsReducer";

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

    return (
        <div className={style.inputOutputBlock}>
            <div className={style.upperBlock}>
                <Input
                    title={inputsOutput.max.title}
                    value={inputsOutput.max.value}
                    errorInput={inputsOutput.max.error}
                />
                <Input
                    title={inputsOutput.start.title}
                    value={inputsOutput.start.value}
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