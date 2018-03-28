import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-field-demo',
  templateUrl: './password-field-demo.component.html',
  styleUrls: ['./password-field-demo.component.scss']
})
export class PasswordFieldDemoComponent implements OnInit {
  items = [{ value: 'low', viewValue: 'low' }, { value: 'medium', viewValue: 'medium' }, { value: 'high', viewValue: 'high' }];
  control = new FormControl('');
  strength = this.items[2];
  model = '';
  reactiveValue = '';
  placeholder = 'password';
  fieldName = 'password';
  constructor() {}

  ngOnInit() {}
}
