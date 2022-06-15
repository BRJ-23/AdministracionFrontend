import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAhorrosComponent } from './mostrar-ahorros.component';

describe('MostrarAhorrosComponent', () => {
  let component: MostrarAhorrosComponent;
  let fixture: ComponentFixture<MostrarAhorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAhorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
