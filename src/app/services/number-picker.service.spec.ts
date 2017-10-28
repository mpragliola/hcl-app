import { TestBed, inject } from '@angular/core/testing';

import { NumberPickerService } from './number-picker.service';

describe('NumberPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberPickerService]
    });
  });

  it('should ...', inject([NumberPickerService], (service: NumberPickerService) => {
    expect(service).toBeTruthy();
  }));
});
