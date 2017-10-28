import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component';
import { BigNumberComponent } from './shared/big-number/big-number.component';
import { ChooserComponent } from './ui/chooser/chooser.component';

import { NumberPickerService } from './services/number-picker.service';
import { AttemptLoggerService } from './services/attempt-logger.service';
import { LoggerComponent } from './ui/logger/logger.component'

@NgModule({
  declarations: [
    AppComponent,
    ChooserComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
      NumberPickerService,
      AttemptLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
