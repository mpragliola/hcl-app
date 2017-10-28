import { Component, OnInit } from '@angular/core';

import { AttemptLoggerService } from '../../services/attempt-logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  guesses = [];
  lastAttempt;
  total = 0;
  rightGuesses = 0;

  constructor(
      private persistence: AttemptLoggerService
  ) { }

  ngOnInit() {
      this.persistence
        .updateStream$
        .subscribe(attempt => {
          this.guesses = this.persistence.attempts(10);
          this.lastAttempt = attempt;
          this.total = this.persistence.getTotal();
          this.rightGuesses = this.persistence.getStats();
        })
  }

}
