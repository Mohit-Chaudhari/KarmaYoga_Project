import { TestBed } from '@angular/core/testing';

import { AddDepartmentService } from './add-department.service';

describe('AddDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDepartmentService = TestBed.get(AddDepartmentService);
    expect(service).toBeTruthy();
  });
});
