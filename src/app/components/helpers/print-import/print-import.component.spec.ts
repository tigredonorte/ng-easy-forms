import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintImportComponent } from './print-import.component';

describe('PrintImportComponent', () => {
  let component: PrintImportComponent;
  let fixture: ComponentFixture<PrintImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
