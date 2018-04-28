import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CpfFieldComponent } from './cpf-field.component';
import { CpfFieldModule } from './cpf-field.module';

describe('CpfFieldComponent', () => {
  let component: CpfFieldComponent;
  let fixture: ComponentFixture<CpfFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CpfFieldModule, NoopAnimationsModule]
    }).compileComponents();
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
