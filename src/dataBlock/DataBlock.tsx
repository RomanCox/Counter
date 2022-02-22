import React from 'react';
import style from './DataBlock.module.css';
import {Input} from "../input/Input";
import {Display} from "../display/Display";
import {inputsOutputsType} from "../App";

type DataBlockPropsType = {
    title: string,
    inputsOutputs: inputsOutputsType,
    inputsOutputsDispatch: (value: any) => void,
    buttonsDispatch: (value: any) => void,
}

export const DataBlock = (props: DataBlockPropsType) => {

        if (props.title === 'INPUT') {
        return (
            <div className={style.upperBlock}>
                <Input
                    title={props.inputsOutputs.max.title}
                    value={props.inputsOutputs.max.value}
                    errorInput={props.inputsOutputs.max.error}
                    inputsOutputs={props.inputsOutputs}
                    inputsOutputsDispatch={props.inputsOutputsDispatch}
                    buttonsDispatch={props.buttonsDispatch}
                />
                <Input
                    title={props.inputsOutputs.start.title}
                    value={props.inputsOutputs.start.value}
                    errorInput={props.inputsOutputs.start.error}
                    inputsOutputs={props.inputsOutputs}
                    inputsOutputsDispatch={props.inputsOutputsDispatch}
                    buttonsDispatch={props.buttonsDispatch}
                />
            </div>
        )
    } else {
        return (
            <div className={style.upperBlock}>
                <Display
                    inputsOutputs={props.inputsOutputs}
                />
            </div>
        )
    }
}
