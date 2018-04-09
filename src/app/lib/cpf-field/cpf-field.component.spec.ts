import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfFieldComponent } from './cpf-field.component';

describe('CpfFieldComponent', () => {
  let component: CpfFieldComponent;
  let fixture: ComponentFixture<CpfFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
