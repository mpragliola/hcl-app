/**
 * This service is used as our source of randomness
 */

import { Injectable } from '@angular/core';
import { INumberPicker } from '../interfaces/services/inumber-picker';

@Injectable()
export class NumberPickerService implements INumberPicker {

  pickedNumber:number;

  constructor() { }

  /**
   * Picks a random integer between mix and max. 
   * Uses floor() because round() would make the distribution
   * non uniform.
   * See: https://stackoverflow.com/questions/1527803/
   * 
   * @param min 
   * @param max 
   */
  pickRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Pick the number and store it into the service. This decouples
   * all the guessing part from the other logic, which can function
   * without knowing the number
   * 
   * @param min 
   * @param max 
   */
  chooseNumber(min, max) {
    let int = this.pickRandomInteger(min, max);
    this.pickedNumber = int;
    return int;
  }

  /**
   * Pretty self-explanatory, checks if the provided number is the
   * solution or not
   * 
   * @param guess 
   */
  checkSolution(guess:number) {
    return guess == this.pickedNumber;
  }

}
