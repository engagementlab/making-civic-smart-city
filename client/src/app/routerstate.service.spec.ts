import { TestBed, inject } from '@angular/core/testing';

import { RouterStateService } from './routerstate.service';

describe('RouterStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterStateService]
    });
  });

  it('should be created', inject([RouterStateService], (service: RouterStateService) => {
    expect(service).toBeTruthy();
  }));
});
