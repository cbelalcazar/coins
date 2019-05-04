import { TestBed } from '@angular/core/testing';

import { AppConfigServicesService } from './app-config-services.service';

describe('AppConfigServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfigServicesService = TestBed.get(AppConfigServicesService);
    expect(service).toBeTruthy();
  });
});
