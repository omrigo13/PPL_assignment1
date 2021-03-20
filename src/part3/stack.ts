import { State, bind } from "./state";

export type Stack = number[];

export const push = (x: number): State<Stack, undefined> => {
    return initialState => [[x].concat(initialState), undefined];
};

export const pop: State<Stack, number> = (s: Stack)  => {
    return [s.slice(1), s[0]];
};

export const stackManip = undefined;