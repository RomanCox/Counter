import React from 'react';
import style from './InputOutputBlock.module.css';
import {buttonsType, inputsOutputType} from "../App";
import {useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {Input} from "../input/Input";
import {Button} from "../button/Button";

type InputOutputBlockPropsType = {
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
}

export const InputBlock = (props: InputOutputBlockPropsType) => {
    let buttons = useSelector<rootReducerType, buttonsType>(state => state.buttons)
    let inputsOutput = useSelector<rootReducerType, inputsOutputType>(state => state.InputsOutput)
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
                    onClickHandler={props.onClickHandlerForSetButton}
                    disable={buttons.set.disable}
                />
            </div>
        </div>
    )
}