import { TestBed } from '@angular/core/testing';

import { SVGGeneratorService } from './svggenerator.service';

describe('SVGGeneratorService', () => {
  let service: SVGGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVGGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
