import React from 'react';
import style from './Button.module.css'

type PropsType = {
    title: 'SET' | 'INC' | 'RESET' | '',
    onClickHandler: () => void,
    disable: boolean
}

export const OldButton = (props: PropsType) => {

    return (
        <div className={style.containerButton}>
            <button className={style.button}
                    onClick={props.onClickHandler}
                    disabled={props.disable}
            >{props.title}</button>
        </div>
    )
}
