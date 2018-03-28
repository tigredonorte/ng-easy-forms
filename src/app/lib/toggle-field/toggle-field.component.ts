import { keys } from 'ramda';
import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BaseFieldComponet } from '../reusable/base-field.component';
@Component({
  selector: 'app-toggle-field',
  templateUrl: './toggle-field.component.html',
  styleUrls: ['./toggle-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ToggleFieldComponent), multi: true }
  ]
})
export class ToggleFieldComponent extends BaseFieldComponet implements OnInit {
  constructor() {
    super();
  }

  getErrorMessage() { return ''; }

  getValidateFn() {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators() { return []; }

}
