import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversion2Component } from './barra-inversion2.component';

describe('BarraInversion2Component', () => {
  let component: BarraInversion2Component;
  let fixture: ComponentFixture<BarraInversion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
