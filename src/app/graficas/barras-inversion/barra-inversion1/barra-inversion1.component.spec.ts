import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversion1Component } from './barra-inversion1.component';

describe('BarraInversion1Component', () => {
  let component: BarraInversion1Component;
  let fixture: ComponentFixture<BarraInversion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
