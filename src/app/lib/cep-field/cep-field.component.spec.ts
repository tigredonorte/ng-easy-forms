import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepFieldComponent } from './cep-field.component';

describe('CepFieldComponent', () => {
  let component: CepFieldComponent;
  let fixture: ComponentFixture<CepFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
