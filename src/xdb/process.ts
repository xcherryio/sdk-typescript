import {StateSchema} from "./state-schema";
import {PersistenceSchema} from "./persistence-schema";
import {ProcessIdReusePolicy} from "xdb-ts-api";

export interface Process{
    stateSchema?:StateSchema
    persistenceSchema?:PersistenceSchema
    processOptions?:ProcessOptions
}

export interface ProcessOptions{
    // TimeoutSeconds is the timeout for the process execution.
    // Default: 0, mean which means infinite timeout
    timeoutSeconds?:number
    // IdReusePolicy is the policy for reusing process id.
    // Default: xdbapi.ALLOW_IF_NO_RUNNING when set as nil
    idReusePolicy?:ProcessIdReusePolicy
    // processType defines the processType of this process definition.
    // GetFinalProcessType set the default value when return empty string
    processType?:string
}