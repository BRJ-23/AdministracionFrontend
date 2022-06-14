import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversion5Component } from './barra-inversion5.component';

describe('BarraInversion5Component', () => {
  let component: BarraInversion5Component;
  let fixture: ComponentFixture<BarraInversion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversion5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
