import { TestBed } from '@angular/core/testing';

import { AiconnectService } from './aiconnect.service';

describe('AiconnectService', () => {
  let service: AiconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
