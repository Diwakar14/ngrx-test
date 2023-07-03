import { TestBed } from '@angular/core/testing';

import { FruitViceService } from './fruit-vice.service';

describe('FruitViceService', () => {
  let service: FruitViceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitViceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
