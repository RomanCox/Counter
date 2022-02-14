import React from 'react'
import style from './Display.module.css'
import displayStyle from "../displayBlock/Display.module.css";

type DisplayPropsType = {
    display: string,
    error: number,
}

export const Display = (props: DisplayPropsType) => {

    let displayNumber = Number(props.display)

    return (
        <div className={style.displayContainer}>
            <span className={props.error === 0 ? `${displayStyle.text} ${displayStyle.normal}` :
                props.error === 1 ? `${displayStyle.text} ${displayStyle.error}` :
                    props.error === 2 ? `${displayStyle.number} ${displayStyle.normal}` :
                        `${displayStyle.number} ${displayStyle.error}`
            }>
                {props.error < 2 ? props.display : displayNumber}
            </span>
        </div>
    )
}