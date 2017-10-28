import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigNumberComponent } from './big-number/big-number.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      BigNumberComponent
  ],
  declarations: [
      BigNumberComponent
  ]
})
export class SharedModule { }
