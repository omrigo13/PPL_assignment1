import { State, bind } from "./state";

export type Queue = number[];

export const enqueue = (x: number): State<Queue, undefined> => {
    return initialState => [initialState.concat([x]), undefined];
};

export const dequeue: State<Queue, number> = (q: Queue)  => {
    return [q.slice(1), q[0]];
};

export const queueManip = undefined;