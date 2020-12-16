import { TestBed } from '@angular/core/testing';

import { FebService } from './feb.service';

describe('FebService', () => {
  let service: FebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
