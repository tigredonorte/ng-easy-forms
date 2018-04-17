import { Component, Input } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';
import { getBaseProviders } from '../reusable/base-providers';
import { RadioGroupDataObject } from './radio-group-field.model';

@Component({
  selector: 'app-radio-group-field',
  templateUrl: './radio-group-field.component.html',
  styleUrls: ['./radio-group-field.component.scss'],
  providers: getBaseProviders(RadioGroupFieldComponent)
})
export class RadioGroupFieldComponent extends BaseFieldComponet {
  @Input() radioOptions: RadioGroupDataObject[] = [];
  constructor() {
    super();
  }

  radioChange(data) {
    this.field.setValue(data);
  }

  getErrorMessage(): string {
    return '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => null;
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  getTranslations(): TranslationObject {
    return {};
  }

  getOptions(): BaseOptions {
    return {};
  }
}
