import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFuncionComponent } from './formulario-funcion.component';

describe('FormularioFuncionComponent', () => {
  let component: FormularioFuncionComponent;
  let fixture: ComponentFixture<FormularioFuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFuncionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
