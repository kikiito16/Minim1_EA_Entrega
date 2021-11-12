import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVacunadoComponent } from './nuevovacunado.component';

describe('NuevoVacunadoComponent', () => {
  let component: NuevoVacunadoComponent;
  let fixture: ComponentFixture<NuevoVacunadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVacunadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVacunadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
