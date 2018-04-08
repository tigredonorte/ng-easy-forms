import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';

import { BaseFieldComponet } from '../reusable/base-field.component';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EmailFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailFieldComponent), multi: true }
  ]
})
export class EmailFieldComponent extends BaseFieldComponet {
  constructor() {
    super();
    this.required = true;
  }

  getErrorMessage() {
    return this.field.hasError('required') ? 'You must enter a value' : this.field.hasError('email') ? 'Not a valid email' : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [Validators.required, Validators.email];
  }
}
