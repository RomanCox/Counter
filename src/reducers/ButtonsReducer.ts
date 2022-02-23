import {ButtonsType} from "../App";

let initialState: ButtonsType = {
    set: {title: 'SET', disable: true},
    inc: {title: 'INC', disable: true},
    reset: {title: 'RESET', disable: true}
}

type InitialStateType = typeof initialState

export const ButtonsReducer = (state:InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-BUTTON-DISABLE':
            return {
                ...state, set: {...state.set, disable: action.payload.disable}
            }
        case 'INC-BUTTON-DISABLE': {
            return {
                ...state, inc: {...state.inc, disable: action.payload.disable}
            }
        }
        case 'RESET-BUTTON-DISABLE': {
            return {
                ...state, reset: {...state.reset, disable: action.payload.disable}
            }
        }
        default: return state;
    }
};

type ActionType = SetButtonActionType | IncButtonActionType | ResetButtonActionType

export type SetButtonActionType = ReturnType<typeof setButtonAC>

export const setButtonAC = (disable: boolean) => {
    return {
        type: 'SET-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    }
};

export type IncButtonActionType = ReturnType<typeof incButtonAC>

export const incButtonAC = (disable: boolean) => {
    return {
        type: 'INC-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    }
};

export type ResetButtonActionType = ReturnType<typeof resetButtonAC>

export const resetButtonAC = (disable: boolean) => {
    return {
        type: 'RESET-BUTTON-DISABLE' as const,
        payload: {
            disable
        }
    }
};

//THUNK

