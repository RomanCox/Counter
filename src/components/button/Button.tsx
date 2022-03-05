import React from 'react'
import style from './Button.module.css'
import {ButtonTitleType} from "../../app/App";

type ButtonPropsType = {
    title: ButtonTitleType,
    onClickHandler: () => void,
    disable: boolean,
}

export const Button = (props: ButtonPropsType) => {

    return (
    <button
        className={style.button}
        onClick={props.onClickHandler}
        disabled={props.disable}>{props.title}</button>
    )
}