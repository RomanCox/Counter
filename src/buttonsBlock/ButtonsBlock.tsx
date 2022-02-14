import React from 'react'
import style from './ButtonsBlock.module.css'
import {Button} from "../button/Button";

type ButtonsBlockPropsType = {
    title: string,
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
    buttonSetDisable: boolean,
    buttonIncDisable: boolean,
    buttonResetDisable: boolean,
}
export const ButtonsBlock = (props: ButtonsBlockPropsType) => {

    let buttons = ['SET', 'INC', 'RESET']

    if (props.title === 'SET') {
        return (
            <div className={style.lowerBlock}>
                <Button
                    title={buttons[0]}
                    onClickHandler={props.onClickHandlerForSetButton}
                    disable={props.buttonSetDisable}/>
            </div>
        )
    } else {
        return (
            <div className={style.lowerBlock}>
                <Button title={buttons[1]}
                        onClickHandler={props.onClickHandlerForIncButton}
                        disable={props.buttonIncDisable}
                />
                <Button
                    title={buttons[2]}
                    onClickHandler={props.onClickHandlerForResetButton}
                    disable={props.buttonResetDisable}
                />
            </div>
        )
    }
}
