import {StateSchema} from "./state-schema";
import {PersistenceSchema} from "./persistence-schema";
import {ProcessIdReusePolicy} from "xdb-ts-api";

export interface Process {
    // processType is a required field to identify the process type.
    // It must be unique in all the processes registered in the same registry.
    // It's recommended to just use the Class name of the process as the processType.
    processType: string
    // stateSchema is to define the async states of the process.
    stateSchema?: StateSchema
    // persistenceSchema is to define the persistence schema of the process.
    persistenceSchema?: PersistenceSchema
    // processOptions is the options for the process
    processOptions?: ProcessOptions
}

export interface ProcessOptions {
    // TimeoutSeconds is the timeout for the process execution.
    // Default: 0, mean which means infinite timeout
    timeoutSeconds?: number
    // IdReusePolicy is the policy for reusing process id.
    // Default: xdbapi.ALLOW_IF_NO_RUNNING when set as nil
    idReusePolicy?: ProcessIdReusePolicy
}