import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFieldDemoComponent } from './toggle-field-demo.component';

describe('ToggleFieldDemoComponent', () => {
  let component: ToggleFieldDemoComponent;
  let fixture: ComponentFixture<ToggleFieldDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFieldDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
