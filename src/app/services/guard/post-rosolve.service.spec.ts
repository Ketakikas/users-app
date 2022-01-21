import { TestBed } from '@angular/core/testing';

import { PostRosolveService } from './post-rosolve.service';

describe('PostRosolveService', () => {
  let service: PostRosolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRosolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
