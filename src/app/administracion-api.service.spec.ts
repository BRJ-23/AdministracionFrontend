import { TestBed } from '@angular/core/testing';

import { AdministracionApiService } from './administracion-api.service';

describe('AdministracionApiService', () => {
  let service: AdministracionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
