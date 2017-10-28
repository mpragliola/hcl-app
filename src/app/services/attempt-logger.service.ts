import { Injectable } from '@angular/core';
import { IAttemptPersistence } from '../interfaces/services/iattempt-persistence';
import { LogAttempt } from '../classes/log-attempt';

@Injectable()
export class AttemptLoggerService implements IAttemptPersistence {

  constructor() {
      this.setStore([]);
  }

  logAttempt(logAttempt: LogAttempt): void {
    let guesses = this.getStore();
    guesses.push(logAttempt);
    this.setStore(guesses);
  }

  attempts(): any {
    return this.getStore();
  }

  getStore() {
      let guesses = localStorage.getItem('guesses');
      return guesses ? JSON.parse(guesses) : [];
  }

  setStore(guesses: LogAttempt[]) {
      return localStorage.setItem('guesses', JSON.stringify(guesses));
  }


}
