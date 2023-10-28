import { TestBed } from '@angular/core/testing';

import { AsyncViceService } from './async-vice.service';

describe('AsyncViceService', () => {
  let service: AsyncViceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncViceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
