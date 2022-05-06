import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}

export const initialState: IAppState = {
    counter: 0,
}

export const incrementa = createAction('[App] This Action increment the app');
export const decrementa = createAction('[App] This Action decrement the app');
export const reseta = createAction('[App] This Action reset the app');

export const appReducer = createReducer(initialState, on(incrementa, (state) => {
    state = {
        ...state,
        counter: state.counter + 1
    }
    return state;
}), on(decrementa, (state) => {
    state = {
        ...state,
        counter: state.counter - 1
    }
    return state;
}), on(reseta, (state) => {
    state = {
        ...state,
        counter: 0
    }
    return state;
})
)