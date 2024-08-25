import { TestBed } from '@angular/core/testing';

import { AssignMedicationService } from './assign-medication.service';

describe('AssignMedicationService', () => {
  let service: AssignMedicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignMedicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
