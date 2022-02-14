import React from 'react'
import style from './Display.module.css'


type DisplayPropsType = {
    display: string,
    error: number,
}

export const Display = (props: DisplayPropsType) => {

    let displayNumber = Number(props.display)

    return (
        <div className={style.displayContainer}>
            <span className={props.error === 0 ? `${style.displayText}` :
                props.error === 1 ? `${style.displayTextError}` :
                    props.error === 2 ? `${style.displayNumber}` :
                        `${style.displayNumberError}`
            }>
                {props.error < 2 ? props.display : displayNumber}
            </span>
        </div>
    )
}