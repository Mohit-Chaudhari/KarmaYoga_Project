import { TestBed } from '@angular/core/testing';

import { FindWorkService } from './find-work.service';

describe('FindWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindWorkService = TestBed.get(FindWorkService);
    expect(service).toBeTruthy();
  });
});
