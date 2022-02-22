import React from 'react'
import style from './Display.module.css'
import {inputsOutputsType} from "../App";


type DisplayPropsType = {
    inputsOutputs: inputsOutputsType,
}

export const Display = (props: DisplayPropsType) => {

    let displayNumber = Number(props.inputsOutputs.display.value)

    return (
        <div className={style.displayContainer}>
            <span className={props.inputsOutputs.display.error === 0 ? `${style.displayText}` :
                props.inputsOutputs.display.error === 1 ? `${style.displayTextError}` :
                    props.inputsOutputs.display.error === 2 ? `${style.displayNumber}` :
                        `${style.displayNumberError}`
            }>
                {props.inputsOutputs.display.error < 2 ? props.inputsOutputs.display.value : displayNumber}
            </span>
        </div>
    )
}