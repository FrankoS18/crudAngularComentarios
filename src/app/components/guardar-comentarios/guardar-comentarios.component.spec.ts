import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarComentariosComponent } from './guardar-comentarios.component';

describe('GuardarComentariosComponent', () => {
  let component: GuardarComentariosComponent;
  let fixture: ComponentFixture<GuardarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
