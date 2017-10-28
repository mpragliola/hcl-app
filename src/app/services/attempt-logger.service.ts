import { Injectable } from '@angular/core';
import { IAttemptPersistence } from '../interfaces/services/iattempt-persistence';
import { LogAttempt } from '../classes/log-attempt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AttemptLoggerService implements IAttemptPersistence {

  updateStream$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
      this.setStore([]);
  }

  logAttempt(logAttempt: LogAttempt): void {
    let guesses = this.getStore();
    guesses.push(logAttempt);
    this.setStore(guesses);
    this.updateStream$
        .next(logAttempt);
  }

  getTotal() {
      return this.getStore().length;
  }

  getStats() {
    let guesses = this.getStore();
    return guesses.reduce(function (a,b) { return a + (b.success ? 1: 0); }, 0);
  }

  attempts(n:number|null) {
    return this.getStore().slice(-n);
  }

  getStore() {
      let guesses = localStorage.getItem('guesses');
      return guesses ? JSON.parse(guesses) : [];
  }

  setStore(guesses: LogAttempt[]) {
      return localStorage.setItem('guesses', JSON.stringify(guesses));
  }


}
