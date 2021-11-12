import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosVacunadoComponent } from './datos-vacunado.component';

describe('DatosResultadosclinicosComponent', () => {
  let component: DatosVacunadoComponent;
  let fixture: ComponentFixture<DatosVacunadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosVacunadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosVacunadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
