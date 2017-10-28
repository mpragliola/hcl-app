/**
 * This is the basic interface for the complicated service who would
 * pick a random number
 */
export interface INumberPicker {

    pickRandomInteger(min:number, max:number): number;

    chooseNumber(min:number, max:number): number;

    checkSolution(guess:number);


}
