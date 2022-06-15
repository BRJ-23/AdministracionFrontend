import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGastosOcioComponent } from './mostrar-gastos-ocio.component';

describe('MostrarGastosOcioComponent', () => {
  let component: MostrarGastosOcioComponent;
  let fixture: ComponentFixture<MostrarGastosOcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGastosOcioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGastosOcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
