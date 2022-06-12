import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPaginaPrincipalComponent } from './marco-pagina-principal.component';

describe('MarcoPaginaPrincipalComponent', () => {
  let component: MarcoPaginaPrincipalComponent;
  let fixture: ComponentFixture<MarcoPaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoPaginaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
