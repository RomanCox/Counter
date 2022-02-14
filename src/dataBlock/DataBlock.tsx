import React from 'react'
import style from './DataBlock.module.css'
import {Input} from "../input/Input";
import {Display} from "../display/Display";

type DataBlockPropsType = {
    title: string
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
    setButtonSetDisable: (buttonSetDisable: boolean) => void,
    setButtonIncDisable: (buttonIncDisable: boolean) => void,
    setButtonResetDisable: (buttonResetDisable: boolean) => void,
}

export const DataBlock = (props: DataBlockPropsType) => {

    let inputs = ['MAX VALUE:', 'START VALUE:']

    if (props.title === 'INPUT') {
        return (
            <div className={style.upperBlock}>
                <Input
                    title={inputs[0]}
                    error={props.error}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    value={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxValue={props.setMaxValue}
                    errorInput={props.errorInputMax}
                    setErrorInputStart={props.setErrorInputStart}
                    setErrorInputMax={props.setErrorInputMax}
                    setDisplay={props.setDisplay}
                    setError={props.setError}
                    setButtonSetDisable={props.setButtonSetDisable}
                    setButtonIncDisable={props.setButtonIncDisable}
                    setButtonResetDisable={props.setButtonResetDisable}
                />
                <Input
                    title={inputs[1]}
                    value={props.startValue}
                    error={props.error}
                    errorInput={props.errorInputStart}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxValue={props.setMaxValue}
                    setErrorInputStart={props.setErrorInputStart}
                    setErrorInputMax={props.setErrorInputMax}
                    setDisplay={props.setDisplay}
                    setError={props.setError}
                    setButtonSetDisable={props.setButtonSetDisable}
                    setButtonIncDisable={props.setButtonIncDisable}
                    setButtonResetDisable={props.setButtonResetDisable}
                />
            </div>
        )
    } else {
        return (
            <div className={style.upperBlock}>
                <Display
                    display={props.display}
                    error={props.error}
                />
            </div>
        )
    }
}
