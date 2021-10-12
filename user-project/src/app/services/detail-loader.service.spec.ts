import { TestBed } from '@angular/core/testing';

import { DetailLoaderService } from './detail-loader.service';

describe('DetailLoaderService', () => {
  let service: DetailLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
