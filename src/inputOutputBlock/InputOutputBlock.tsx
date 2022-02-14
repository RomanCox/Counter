import React from 'react';
import style from './InputOutputBlock.module.css';
import {DataBlock} from "../dataBlock/DataBlock";
import {ButtonsBlock} from "../buttonsBlock/ButtonsBlock";

type InputOutputBlockPropsType = {
    title: string,
    startValue: number,
    maxValue: number,
    setStartValue: (startValue: number) => void,
    setMaxValue: (maxValue: number) => void,
    errorInputStart: boolean,
    errorInputMax: boolean,
    setErrorInputStart: (errorInputStart: boolean) => void,
    setErrorInputMax: (errorInputMax: boolean) => void,
    display: string,
    setDisplay: (display: string) => void,
    error: number,
    setError: (error: number) => void,
    buttonSetDisable: boolean,
    buttonIncDisable: boolean,
    buttonResetDisable: boolean,
    setButtonSetDisable: (buttonSetDisable: boolean) => void,
    setButtonIncDisable: (buttonIncDisable: boolean) => void,
    setButtonResetDisable: (buttonResetDisable: boolean) => void,
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
}

export const InputOutputBlock = (props: InputOutputBlockPropsType) => {

    if (props.title === 'LEFT BLOCK') {
        return (
            <div className={style.inputOutputBlock}>
                <DataBlock
                    title={'INPUT'}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxValue={props.setMaxValue}
                    errorInputStart={props.errorInputStart}
                    errorInputMax={props.errorInputMax}
                    setErrorInputStart={props.setErrorInputStart}
                    setErrorInputMax={props.setErrorInputMax}
                    display={props.display}
                    setDisplay={props.setDisplay}
                    error={props.error}
                    setError={props.setError}
                    setButtonSetDisable={props.setButtonSetDisable}
                    setButtonIncDisable={props.setButtonIncDisable}
                    setButtonResetDisable={props.setButtonResetDisable}
                />
                <ButtonsBlock
                    title={'SET'}
                    onClickHandlerForSetButton={props.onClickHandlerForSetButton}
                    onClickHandlerForIncButton={props.onClickHandlerForIncButton}
                    onClickHandlerForResetButton={props.onClickHandlerForResetButton}
                    buttonSetDisable={props.buttonSetDisable}
                    buttonIncDisable={props.buttonIncDisable}
                    buttonResetDisable={props.buttonResetDisable}
                />
            </div>
        )
    } else {
        return (
            <div className={style.inputOutputBlock}>
                <DataBlock
                    title={'OUTPUT'}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxValue={props.setMaxValue}
                    errorInputStart={props.errorInputStart}
                    errorInputMax={props.errorInputMax}
                    setErrorInputStart={props.setErrorInputStart}
                    setErrorInputMax={props.setErrorInputMax}
                    display={props.display}
                    setDisplay={props.setDisplay}
                    error={props.error}
                    setError={props.setError}
                    setButtonSetDisable={props.setButtonSetDisable}
                    setButtonIncDisable={props.setButtonIncDisable}
                    setButtonResetDisable={props.setButtonResetDisable}
                />
                <ButtonsBlock
                    title={'INC+RESET'}
                    onClickHandlerForSetButton={props.onClickHandlerForSetButton}
                    onClickHandlerForIncButton={props.onClickHandlerForIncButton}
                    onClickHandlerForResetButton={props.onClickHandlerForResetButton}
                    buttonSetDisable={props.buttonSetDisable}
                    buttonIncDisable={props.buttonIncDisable}
                    buttonResetDisable={props.buttonResetDisable}
                />
            </div>
        )
    }
}