import { TestBed } from '@angular/core/testing';

import { ManageCasteService } from './manage-caste.service';

describe('ManageCasteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageCasteService = TestBed.get(ManageCasteService);
    expect(service).toBeTruthy();
  });
});
