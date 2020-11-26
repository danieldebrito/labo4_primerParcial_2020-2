import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresModificarComponent } from './actores-modificar.component';

describe('ActoresModificarComponent', () => {
  let component: ActoresModificarComponent;
  let fixture: ComponentFixture<ActoresModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
