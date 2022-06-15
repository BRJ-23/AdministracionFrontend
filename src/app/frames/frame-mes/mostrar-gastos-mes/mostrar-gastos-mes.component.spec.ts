import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGastosMesComponent } from './mostrar-gastos-mes.component';

describe('MostrarGastosMesComponent', () => {
  let component: MostrarGastosMesComponent;
  let fixture: ComponentFixture<MostrarGastosMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGastosMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGastosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
