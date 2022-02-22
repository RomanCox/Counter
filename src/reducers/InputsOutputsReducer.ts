import {errorType, inputsOutputsType} from "../App";

export const InputsOutputsReducer = (state: inputsOutputsType, action: allInputOutputType) => {
    switch (action.type) {
        case 'ONCHANGE-MAX-INPUT': {
            let newState = {...state};
            newState.max.value = action.payload.value;
            return newState;
        }
        case 'ONCHANGE-START-INPUT': {
            let newState = {...state};
            newState.start.value = action.payload.value;
            return newState;
        }
        case 'ERROR-INPUT-MAX': {
            let newState = {...state};
            newState.max.error = action.payload.error;
            return newState;
        }
        case 'ERROR-INPUT-START': {
            let newState = {...state};
            newState.start.error = action.payload.error;
            return newState;
        }
        case 'DISPLAY': {
            let newState = {...state};
            newState.display.value = action.payload.value;
            return newState;
        }
        case 'ERROR': {
            let newState = {...state};
            newState.display.error = action.payload.error;
            return newState;
        }
        default: return state;
    }
};

type allInputOutputType =
    maxValueACType |
    startValueACType |
    errorInputStartACType |
    errorInputMaxACType |
    displayACType |
    errorACType;

export type maxValueACType = ReturnType<typeof maxValueAC>;

export const maxValueAC = (value: string) => {
    return {
        type: 'ONCHANGE-MAX-INPUT' as const,
        payload: {
            value: value
        }
    }
};

export type startValueACType = ReturnType<typeof startValueAC>;

export const startValueAC = (value: string) => {
    return {
        type: 'ONCHANGE-START-INPUT' as const,
        payload: {
            value
        }
    }
};

export type errorInputStartACType = ReturnType<typeof errorInputStartAC>;

export const errorInputStartAC = (error: errorType) => {
    return {
        type: 'ERROR-INPUT-START' as const,
        payload: {
            error
        }
    }
};

export type errorInputMaxACType = ReturnType<typeof errorInputMaxAC>;

export const errorInputMaxAC = (error: errorType) => {
    return {
        type: 'ERROR-INPUT-MAX' as const,
        payload: {
            error
        }
    }
};

export type displayACType = ReturnType<typeof displayAC>;

export const displayAC = (value: string) => {
    return {
        type: 'DISPLAY' as const,
        payload: {
            value
        }
    }
};

export type errorACType = ReturnType<typeof errorAC>;

export const errorAC = (error: errorType) => {
    return {
        type: 'ERROR' as const,
        payload: {
            error
        }
    }
};