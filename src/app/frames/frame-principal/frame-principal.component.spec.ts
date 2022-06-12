import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePrincipalComponent } from './frame-principal.component';

describe('FramePrincipalComponent', () => {
  let component: FramePrincipalComponent;
  let fixture: ComponentFixture<FramePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
