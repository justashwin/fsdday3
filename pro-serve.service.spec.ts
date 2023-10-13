import { TestBed } from '@angular/core/testing';

import { ProServeService } from './pro-serve.service';

describe('ProServeService', () => {
  let service: ProServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
