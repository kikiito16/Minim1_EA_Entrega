import { TestBed } from '@angular/core/testing';

import { VacunadoService } from './vacunado.service';

describe('VacunadoService', () => {
  let service: VacunadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacunadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
