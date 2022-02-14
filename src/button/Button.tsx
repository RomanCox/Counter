import React from 'react'
import style from './Button.module.css'

type ButtonPropsType = {
    title: string,
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