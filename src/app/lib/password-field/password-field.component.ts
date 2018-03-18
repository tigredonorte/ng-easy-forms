import { keys } from 'ramda';
import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BaseFieldComponet } from '../reusable/base-field.component';

const passwordConfig = {
  min: { length: 6, pattern: { regex: '' } },
  medium: {
    length: 8,
    pattern: {
      regex: /(?=.*[0-9])(?=.*[a-z])/g,
      msg: 'A senha deve conter números e letras'
    }
  },
  high: {
    length: 10,
    pattern: {
      regex: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*#?&])[a-zA-Zd]/g,
      msg: 'A senha deve conter letras maíusculas e minúsculas, números e caracteres especiais'
    }
  }
};
@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PasswordFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordFieldComponent), multi: true }
  ]
})
export class PasswordFieldComponent extends BaseFieldComponet implements OnInit {
  @Input() passwordStrenght = 'high';
  private min = 6;
  private passwordData = passwordConfig;
  constructor() {
    super();
    this.required = true;
  }

  getErrorMessage() {
    if (this.field.hasError('required')) {
      return 'Você deve digitar uma senha';
    }
    if (this.field.hasError('minlength')) {
      const min = this.field.errors['minlength'].requiredLength;
      return `Digite no mínimo ${min} caracteres`;
    }

    if (this.field.hasError('pattern')) {
      const data = this.getPasswordData();
      return data.pattern.msg;
    }

    if (this.field.errors) {
      return keys(this.field.errors)[0];
    }
    return '';
  }

  getValidateFn() {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators() {
    const validators = [Validators.required];
    const data = this.getPasswordData();
    validators.push(Validators.minLength(data.length));
    validators.push(Validators.pattern(data.pattern.regex));
    return validators;
  }

  getPasswordData() {
    return this.passwordData[this.passwordStrenght] ? this.passwordData[this.passwordStrenght] : this.passwordData.high;
  }
}
