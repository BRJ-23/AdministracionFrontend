import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInversionComponent } from './barra-inversion.component';

describe('BarraInversionComponent', () => {
  let component: BarraInversionComponent;
  let fixture: ComponentFixture<BarraInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
