import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGastosPersonalesComponent } from './grafica-gastos-personales.component';

describe('GraficaGastosPersonalesComponent', () => {
  let component: GraficaGastosPersonalesComponent;
  let fixture: ComponentFixture<GraficaGastosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaGastosPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaGastosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
