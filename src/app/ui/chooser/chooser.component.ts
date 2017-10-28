import { Component, OnInit } from '@angular/core';

import { NumberPickerService } from '../../services/number-picker.service';
import { AttemptLoggerService } from '../../services/attempt-logger.service';

import { environment } from '../../../environments/environment';

import { LogAttempt } from '../../classes/log-attempt';


@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.scss']
})
export class ChooserComponent implements OnInit {

  numberToGuess:number;

  minRange:number;
  maxRange:number;

  showFail:boolean;
  showSuccess:boolean;

  constructor(
      public np: NumberPickerService,
      public persistence: AttemptLoggerService
  ) { }

  ngOnInit( ) {

    this.minRange = environment.min;
    this.maxRange = environment.max;
    this.np.chooseNumber(this.minRange, this.maxRange);

  }

  guessAttempt(guess) {

    console.log(this.np.pickedNumber);
    
    const success = this.np.checkSolution(guess);
    this.showFail = !success;
    this.showSuccess = success;

    const logAttempt = new LogAttempt(
        this.minRange,
        this.maxRange,
        success,
        new Date
    );

    this.persistence.logAttempt(logAttempt);

  }

}
