import {ErrorType, InputsOutputType} from "../../app/App";

let initialState: InputsOutputType = {
    start: {title: 'START VALUE:', value: '0', error: 0},
    max: {title: 'MAX VALUE:', value: '0', error: 0},
    display: {title: 'DISPLAY', value: "Enter values & press 'SET'", error: 0}
}

type InitialStateType = typeof initialState

export const InputsOutputReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ONCHANGE-MAX-INPUT': {
            return {
                ...state, max: {...state.max, value: action.payload.value}
            }
        }
        case 'ONCHANGE-START-INPUT': {
            return {
                ...state, start: {...state.start, value: action.payload.value}
            }
        }
        case 'ERROR-INPUT-MAX': {
            return {
                ...state, max: {...state.max, error: action.payload.error}
            }
        }
        case 'ERROR-INPUT-START': {
            return {
                ...state, start: {...state.start, error: action.payload.error}
            }
        }
        case 'DISPLAY': {
            return {
                ...state, display: {...state.display, value: action.payload.value}
            }
        }
        case 'ERROR': {
            return {
                ...state, display: {...state.display, error: action.payload.error}
            }
        }
        default:
            return state;
    }
};

type ActionType =
    maxValueActionType |
    startValueActionType |
    displayActionType |
    errorInputStartActionType |
    errorInputMaxActionType |
    errorActionType;

export type maxValueActionType = ReturnType<typeof maxValueAC>;

export const maxValueAC = (value: string) => {
    return {
        type: 'ONCHANGE-MAX-INPUT' as const,
        payload: {
            value: value
        }
    }
};

export type startValueActionType = ReturnType<typeof startValueAC>;

export const startValueAC = (value: string) => {
    return {
        type: 'ONCHANGE-START-INPUT' as const,
        payload: {
            value
        }
    }
};

export type displayActionType = ReturnType<typeof displayAC>;

export const displayAC = (value: string) => {
    return {
        type: 'DISPLAY' as const,
        payload: {
            value
        }
    }
};

export type errorInputStartActionType = ReturnType<typeof errorInputStartAC>;

export const errorInputStartAC = (error: ErrorType) => {
    return {
        type: 'ERROR-INPUT-START' as const,
        payload: {
            error
        }
    }
};

export type errorInputMaxActionType = ReturnType<typeof errorInputMaxAC>;

export const errorInputMaxAC = (error: ErrorType) => {
    return {
        type: 'ERROR-INPUT-MAX' as const,
        payload: {
            error
        }
    }
};

export type errorActionType = ReturnType<typeof errorAC>;

export const errorAC = (error: ErrorType) => {
    return {
        type: 'ERROR' as const,
        payload: {
            error
        }
    }
};