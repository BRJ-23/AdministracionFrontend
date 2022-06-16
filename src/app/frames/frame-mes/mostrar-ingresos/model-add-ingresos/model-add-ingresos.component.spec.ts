import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAddIngresosComponent } from './model-add-ingresos.component';

describe('ModelAddIngresosComponent', () => {
  let component: ModelAddIngresosComponent;
  let fixture: ComponentFixture<ModelAddIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAddIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAddIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
