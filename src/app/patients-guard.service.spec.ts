import { TestBed, inject } from '@angular/core/testing';

import { PatientsGuardService } from './patients-guard.service';

describe('PatientsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientsGuardService]
    });
  });

  it('should be created', inject([PatientsGuardService], (service: PatientsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
