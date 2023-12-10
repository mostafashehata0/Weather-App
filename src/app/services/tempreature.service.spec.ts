import { TestBed } from '@angular/core/testing';

import { TempreatureService } from './tempreature.service';

describe('TempreatureService', () => {
  let service: TempreatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempreatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
