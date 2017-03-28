import { TestBed, inject } from '@angular/core/testing';

import { SignonService } from './signon.service';

describe('SignonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignonService]
    });
  });

  it('should ...', inject([SignonService], (service: SignonService) => {
    expect(service).toBeTruthy();
  }));
});
