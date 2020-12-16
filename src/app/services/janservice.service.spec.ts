import { TestBed } from '@angular/core/testing';

import { JanserviceService } from './janservice.service';

describe('JanserviceService', () => {
  let service: JanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
