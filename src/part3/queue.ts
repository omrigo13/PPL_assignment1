import { State, bind } from "./state";

export type Queue = number[];

export const enqueue = (x: number): State<Queue, undefined> => {
    return initialState => [initialState.concat([x]), undefined];
};

export const dequeue = undefined;

export const queueManip = undefined;