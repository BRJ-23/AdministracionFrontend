import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInversionesComponent } from './mostrar-inversiones.component';

describe('MostrarInversionesComponent', () => {
  let component: MostrarInversionesComponent;
  let fixture: ComponentFixture<MostrarInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarInversionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarInversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
