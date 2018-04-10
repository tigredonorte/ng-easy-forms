import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFieldDemoComponent } from './autocomplete-field-demo.component';

describe('AutocompleteFieldDemoComponent', () => {
  let component: AutocompleteFieldDemoComponent;
  let fixture: ComponentFixture<AutocompleteFieldDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteFieldDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
