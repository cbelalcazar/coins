import { TestBed } from '@angular/core/testing';

import { RedeemPrizesResolverService } from './redeem-prizes-resolver.service';

describe('RedeemPrizesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedeemPrizesResolverService = TestBed.get(RedeemPrizesResolverService);
    expect(service).toBeTruthy();
  });
});
