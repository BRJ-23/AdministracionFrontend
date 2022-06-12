import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMesComponent } from './frame-mes.component';

describe('FrameMesComponent', () => {
  let component: FrameMesComponent;
  let fixture: ComponentFixture<FrameMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
