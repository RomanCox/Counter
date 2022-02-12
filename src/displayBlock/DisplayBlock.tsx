import React from 'react'
import style from '../common/styles/UpperBlockContainer.module.css'
import displayStyle from './Display.module.css'

type propsType = {
    display: string,
    error: number,
}

export const DisplayBlock = (props: propsType) => {

    let displayNumber = Number(props.display)

    return (
        <div className={style.container}>
            <div className={props.error === 0 ? `${displayStyle.text} ${displayStyle.normal}` :
                props.error === 1 ? `${displayStyle.text} ${displayStyle.error}` :
                    props.error === 2 ? `${displayStyle.number} ${displayStyle.normal}` :
                        `${displayStyle.number} ${displayStyle.error}`
            }>
                {props.error < 2 ? props.display : displayNumber}
            </div>
        </div>
    )
}