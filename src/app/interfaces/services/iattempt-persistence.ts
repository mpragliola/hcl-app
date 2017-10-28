import { LogAttempt } from '../../classes/log-attempt';

export interface IAttemptPersistence {

    logAttempt(attempt: LogAttempt): void;

    attempts(): {attempts:number, success:number};

}

