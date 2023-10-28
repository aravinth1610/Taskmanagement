import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActiveUserAuthGuard } from './can-active-user-auth.guard';

describe('canActiveUserAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActiveUserAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
