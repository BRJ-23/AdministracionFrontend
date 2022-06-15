import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarIngresosComponent } from './mostrar-ingresos.component';

describe('MostrarIngresosComponent', () => {
  let component: MostrarIngresosComponent;
  let fixture: ComponentFixture<MostrarIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
