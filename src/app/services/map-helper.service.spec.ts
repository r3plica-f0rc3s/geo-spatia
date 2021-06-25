import { TestBed } from '@angular/core/testing';

import { MapHelperService } from './map-helper.service';

describe('MapHelperService', () => {
  let service: MapHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
