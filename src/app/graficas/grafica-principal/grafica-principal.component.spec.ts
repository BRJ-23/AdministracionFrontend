import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPrincipalComponent } from './grafica-principal.component';

describe('GraficaPrincipalComponent', () => {
  let component: GraficaPrincipalComponent;
  let fixture: ComponentFixture<GraficaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
