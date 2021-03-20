import { State, bind } from "./state";

export type Stack = number[];

export const push = (x: number): State<Stack, undefined> => {
    return initialState => [[x].concat(initialState), undefined];
};

export const pop = undefined;

export const stackManip = undefined;