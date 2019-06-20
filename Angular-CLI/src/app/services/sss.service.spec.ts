import { TestBed } from '@angular/core/testing';

import { SssService } from './sss.service';

describe('SssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SssService = TestBed.get(SssService);
    expect(service).toBeTruthy();
  });
});
