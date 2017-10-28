import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-number',
  templateUrl: './big-number.component.html',
  styleUrls: ['./big-number.component.scss']
})
export class BigNumberComponent implements OnInit {

  @Input() min:number;
  @Input() max:number;
  
  @Output() guessEvent:EventEmitter<number> = new EventEmitter<number>();

  userNumber:number;

  constructor() { }

  ngOnInit() {
  }

  guess() {
    this.guessEvent.emit(this.userNumber);
  }

  isValueInRange() {
    return this.userNumber >= this.min && this.userNumber <= this.max;
  }

}
