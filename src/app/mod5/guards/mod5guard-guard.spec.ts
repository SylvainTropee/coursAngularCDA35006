import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mod5guardGuard } from './mod5guard-guard';

describe('mod5guardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mod5guardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
