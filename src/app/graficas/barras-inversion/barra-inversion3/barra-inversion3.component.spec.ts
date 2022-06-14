import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversion3Component } from './barra-inversion3.component';

describe('BarraInversion3Component', () => {
  let component: BarraInversion3Component;
  let fixture: ComponentFixture<BarraInversion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
