import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaRedondaComponent } from './grafica-redonda.component';

describe('GraficaRedondaComponent', () => {
  let component: GraficaRedondaComponent;
  let fixture: ComponentFixture<GraficaRedondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaRedondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaRedondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
