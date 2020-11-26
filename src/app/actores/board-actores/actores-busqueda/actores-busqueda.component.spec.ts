import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresBusquedaComponent } from './actores-busqueda.component';

describe('ActoresBusquedaComponent', () => {
  let component: ActoresBusquedaComponent;
  let fixture: ComponentFixture<ActoresBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
