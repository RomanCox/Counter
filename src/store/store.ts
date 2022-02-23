import {combineReducers, createStore} from "redux";
import {ButtonsReducer} from "../reducers/ButtonsReducer";
import {InputsOutputReducer} from "../reducers/InputsOutputReducer";

export type rootReducerType=ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

let rootReducer = combineReducers({
    buttons: ButtonsReducer,
    inputsOutput: InputsOutputReducer
});

let preloadedState;
const persistedStateString = localStorage.getItem('app-state')
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}

export let store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

