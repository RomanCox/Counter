import {combineReducers, createStore} from "redux";
import {ButtonsReducer} from "../reducers/ButtonsReducer";
import {InputsOutputReducer} from "../reducers/InputsOutputReducer";

let rootReducer = combineReducers({
    buttons: ButtonsReducer,
    InputsOutput: InputsOutputReducer
});

export type rootReducerType=ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);

