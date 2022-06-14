import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversion4Component } from './barra-inversion4.component';

describe('BarraInversion4Component', () => {
  let component: BarraInversion4Component;
  let fixture: ComponentFixture<BarraInversion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversion4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
