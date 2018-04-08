import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle-field-demo',
  templateUrl: './toggle-field-demo.component.html',
  styleUrls: ['./toggle-field-demo.component.scss']
})
export class ToggleFieldDemoComponent implements OnInit {
  items = [{ value: 'low', viewValue: 'low' }, { value: 'medium', viewValue: 'medium' }, { value: 'high', viewValue: 'high' }];
  control = new FormControl('');
  strength = this.items[2];
  model = '';
  reactiveValue = '';
  placeholder = 'toggle-field';
  fieldName = 'toggle';
  constructor() { }

  ngOnInit() {
  }

}
