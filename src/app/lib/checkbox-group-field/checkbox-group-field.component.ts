import { Component, forwardRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';
import { CheckboxGroupType } from './checkbox-group-field.model';

@Component({
  selector: 'app-checkbox-group-field',
  templateUrl: './checkbox-group-field.component.html',
  styleUrls: ['./checkbox-group-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckboxGroupFieldComponent), multi: true }
  ]
})
export class CheckboxGroupFieldComponent extends BaseFieldComponet implements OnInit, OnChanges {
  private selecteds: CheckboxGroupType[] = [];
  checked: { [s: string]: boolean } = {};
  @Input() checkboxOptions: CheckboxGroupType[] = [];
  constructor() {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.field.valueChanges.subscribe((value) => {
      if (!value) {
        return;
      }
      if (this.selecteds !== value) {
        this.selecteds = value;
      }
      this.updateChecked(this.checked);
    });
  }

  ngOnChanges(data: SimpleChanges) {
    super.ngOnChanges(data);
    if (data['checkboxOptions'] && this.checkboxOptions) {
      const out = {};
      for (let i = 0; i < this.checkboxOptions.length; i++) {
        out[this.checkboxOptions[i]['value'] || this.checkboxOptions[i]] = false;
      }
      this.updateChecked(out);
    }
  }

  private updateChecked(out = {}) {
    if (!this.selecteds) {
      return;
    }

    for (let i = 0; i < this.selecteds.length; i++) {
      out[this.selecteds[i]['value'] || this.selecteds[i]] = true;
    }
    this.checked = out;
  }

  private addRemoveItemInArray(array: CheckboxGroupType[], data: CheckboxGroupType): CheckboxGroupType[] {
    const fn = (item) => (data['value'] ? data['value'] === item.value : item === data);
    let exists = false;
    let i = 0;
    for (i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      array.push(data);
    } else {
      array.splice(i, 1);
    }
    return array;
  }

  checkboxChange(data: CheckboxGroupType) {
    this.selecteds = this.addRemoveItemInArray(this.selecteds, data);
    this.field.setValue(this.selecteds);
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
