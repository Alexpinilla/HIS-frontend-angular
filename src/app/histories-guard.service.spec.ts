import { TestBed, inject } from '@angular/core/testing';

import { HistoriesGuardService } from './histories-guard.service';

describe('HistoriesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriesGuardService]
    });
  });

  it('should be created', inject([HistoriesGuardService], (service: HistoriesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
