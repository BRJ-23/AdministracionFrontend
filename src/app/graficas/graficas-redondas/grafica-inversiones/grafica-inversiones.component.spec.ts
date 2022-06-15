import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaInversionesComponent } from './grafica-inversiones.component';

describe('GraficaInversionesComponent', () => {
  let component: GraficaInversionesComponent;
  let fixture: ComponentFixture<GraficaInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaInversionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaInversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
