import { TestBed, inject } from '@angular/core/testing';

import { GoodService } from './good.service';

describe('GoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodService]
    });
  });

  it('should ...', inject([GoodService], (service: GoodService) => {
    expect(service).toBeTruthy();
  }));
});
