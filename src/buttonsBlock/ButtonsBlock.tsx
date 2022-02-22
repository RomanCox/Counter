import React from 'react'
import style from './ButtonsBlock.module.css'
import {Button} from "../button/Button";
import {buttonsType} from "../App";

type ButtonsBlockPropsType = {
    title: string,
    onClickHandlerForSetButton: () => void,
    onClickHandlerForIncButton: () => void,
    onClickHandlerForResetButton: () => void,
    buttons: buttonsType,
}
export const ButtonsBlock = (props: ButtonsBlockPropsType) => {

    if (props.title === props.buttons.set.title) {
        return (
            <div className={style.lowerBlock}>
                <Button
                    title={props.buttons.set.title}
                    onClickHandler={props.onClickHandlerForSetButton}
                    disable={props.buttons.set.disable}
                />
            </div>
        )
    } else {
        return (
            <div className={style.lowerBlock}>
                <Button
                        title={props.buttons.inc.title}
                        onClickHandler={props.onClickHandlerForIncButton}
                        disable={props.buttons.inc.disable}
                />
                <Button
                    title={props.buttons.reset.title}
                    onClickHandler={props.onClickHandlerForResetButton}
                    disable={props.buttons.reset.disable}
                />
            </div>
        )
    }
}
