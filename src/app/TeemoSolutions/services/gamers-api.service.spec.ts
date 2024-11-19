import { TestBed } from '@angular/core/testing';

import { GamersApiService } from './gamers-api.service';

describe('GamersApiService', () => {
  let service: GamersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
