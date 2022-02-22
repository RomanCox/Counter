
import {buttonsType} from "../App";

export const ButtonsReducer = (state: buttonsType, action: allButtonsType) => {
    switch (action.type) {
        case 'SET-BUTTON-DISABLE': {
            let newState = {...state}
            //newState.set = action.payload.set
            newState.set.disable = action.payload.disable
            return newState;
        }
        case 'INC-BUTTON-DISABLE': {
            let newState = {...state}
            newState.inc.disable = action.payload.disable
            return newState;
        }
        case 'RESET-BUTTON-DISABLE': {
            let newState = {...state}
            newState.reset.disable = action.payload.disable
            return newState;
        }
        default: return state;
    }
};

type allButtonsType = setButtonACType | incButtonCType | resetButtonACType

export type setButtonACType = ReturnType<typeof setButtonAC>

export const setButtonAC = (disable: boolean) => {
    return {
        type: 'SET-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    };
};

export type incButtonCType = ReturnType<typeof incButtonAC>

export const incButtonAC = (disable: boolean) => {
    return {
        type: 'INC-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    };
};

export type resetButtonACType = ReturnType<typeof resetButtonAC>

export const resetButtonAC = (disable: boolean) => {
    return {
        type: 'RESET-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    };
};