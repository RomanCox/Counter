import React from 'react';
import style from './InputOutputBlock.module.css';
import {DataBlock} from "../dataBlock/DataBlock";
import {ButtonsBlock} from "../buttonsBlock/ButtonsBlock";
import {buttonsType, inputsOutputsType} from "../App";

type InputOutputBlockPropsType = {
    title: string,
    inputsOutputs: inputsOutputsType,
    inputsOutputsDispatch: (value: any) => void,
    buttons: buttonsType,
    buttonsDispatch: (value: any) => void,
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
}

export const InputOutputBlock = (props: InputOutputBlockPropsType) => {

    if (props.title !== props.inputsOutputs.display.title) {
        return (
            <div className={style.inputOutputBlock}>
                <DataBlock
                    title={'INPUT'}
                    inputsOutputs={props.inputsOutputs}
                    inputsOutputsDispatch={props.inputsOutputsDispatch}
                    buttonsDispatch={props.buttonsDispatch}
                />
                <ButtonsBlock
                    title={props.buttons.set.title}
                    onClickHandlerForSetButton={props.onClickHandlerForSetButton}
                    onClickHandlerForIncButton={props.onClickHandlerForIncButton}
                    onClickHandlerForResetButton={props.onClickHandlerForResetButton}
                    buttons={props.buttons}
                />
            </div>
        )
    } else {
        return (
            <div className={style.inputOutputBlock}>
                <DataBlock
                    title={'OUTPUT'}
                    inputsOutputs={props.inputsOutputs}
                    inputsOutputsDispatch={props.inputsOutputsDispatch}
                    buttonsDispatch={props.buttonsDispatch}
                />
                <ButtonsBlock
                    title={props.buttons.inc.title + props.buttons.reset.title}
                    onClickHandlerForSetButton={props.onClickHandlerForSetButton}
                    onClickHandlerForIncButton={props.onClickHandlerForIncButton}
                    onClickHandlerForResetButton={props.onClickHandlerForResetButton}
                    buttons={props.buttons}
                />
            </div>
        )
    }
}