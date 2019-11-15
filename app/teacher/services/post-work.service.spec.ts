import { TestBed } from '@angular/core/testing';

import { PostWorkService } from './post-work.service';

describe('PostWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostWorkService = TestBed.get(PostWorkService);
    expect(service).toBeTruthy();
  });
});
