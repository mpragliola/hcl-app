import { TestBed, inject } from '@angular/core/testing';

import { AttemptLoggerService } from './attempt-logger.service';

describe('AttemptLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttemptLoggerService]
    });
  });

  it('should ...', inject([AttemptLoggerService], (service: AttemptLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
