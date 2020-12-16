import { TestBed } from '@angular/core/testing';

import { MarService } from './mar.service';

describe('MarService', () => {
  let service: MarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
