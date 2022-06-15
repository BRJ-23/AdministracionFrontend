import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGastosMensualesComponent } from './grafica-gastos-mensuales.component';

describe('GraficaGastosMensualesComponent', () => {
  let component: GraficaGastosMensualesComponent;
  let fixture: ComponentFixture<GraficaGastosMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaGastosMensualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaGastosMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
