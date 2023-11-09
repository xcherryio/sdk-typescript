import {RetryPolicy} from 'xdb-ts-api'
import {Context} from "./context";
import {Persistence} from "./persistence";
import {Communication} from "./communication";
import {StateDecision} from "./state-decision";
import {CommandRequest} from "./command-request";

export interface AsyncState<Input>{
    stateOptions?:AsyncStateOptions
    waitUntil?:WaitUntilMethod<Input>
    execute(ctx:Context, input:Input, persistence:Persistence, communication :Communication):StateDecision
}

export interface WaitUntilMethod<Input>{
    waitUntil(ctx:Context, input:Input, communication: Communication):CommandRequest
}
export interface AsyncStateOptions{
    // waitUntilTimeoutSeconds is the timeout for the waitUntil API call.
    // Default: 10 seconds(configurable in server) when set as 0
    // It will be capped to 60 seconds by server (configurable in server)
    waitUntilTimeoutSeconds?: number
    // executeTimeoutSeconds is the timeout for the execute API call.
    // Default: 10 seconds(configurable in server) when set as 0
    // It will be capped to 60 seconds by server (configurable in server)
    executeTimeoutSeconds?: number
    // waitUntilRetryPolicy is the retry policy for the waitUntil API call.
    // Default: infinite retry with 1 second initial interval, 120 seconds max interval, and 2 backoff factor,
    // when set as nil
    waitUntilRetryPolicy?:RetryPolicy
    // executeRetryPolicy is the retry policy for the execute API call.
    // Default: infinite retry with 1 second initial interval, 120 seconds max interval, and 2 backoff factor,
    // when set as nil
    executeRetryPolicy?:RetryPolicy
    // failureRecoveryState is the state to recover after current state execution fails
    // Default: no recovery when set as nil
    failureRecoveryState?: AsyncState<any>
    // persistencePolicyName is the name of loading policy for persistence if not using default policy
    persistencePolicyName?:string
    // stateId is the unique identifier of the state.
    // It is being used for WorkerService to choose the right AsyncState to execute Start/Execute APIs
    stateId?: string
}