import {AsyncState} from "./async-state";

export interface StateSchema {
    startingState: AsyncState<any> | null | undefined
    nonStartingStates: AsyncState<any>[]
}

export function newStateSchema(
    startingState: AsyncState<any>,
    ...nonStartingState: AsyncState<any>[]
): StateSchema {
    return new stateSchema(startingState, ...nonStartingState);
}

export function newStateSchemaNoStartingState(
    ...nonStartingState: AsyncState<any>[]
): StateSchema {
    return new stateSchema(null, ...nonStartingState);
}

class stateSchema implements StateSchema {
    nonStartingStates: AsyncState<any>[];
    startingState: AsyncState<any> | null | undefined;

    constructor(startingState: AsyncState<any> | null, ...nonStartingState: AsyncState<any>[]) {
        this.nonStartingStates = nonStartingState;
        this.startingState = startingState;
    }
}

