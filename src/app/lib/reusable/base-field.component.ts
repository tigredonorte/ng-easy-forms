import { Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

export abstract class BaseFieldComponet implements OnInit, OnChanges, OnDestroy {
  private fieldSubscription: Subscription = null;
  @Input() placeholder = '';
  @Input() required = false;
  error = '';
  field = new FormControl('');
  _value = '';

  // return basic value
  get value(): string {
    return this._value;
  }

  // where's the magic happens
  set value(val) {
    try {
      if (this._value !== val) {
        this._value = val;
        this.propagateChange(this._value);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  // angular events
  ngOnInit() {
    this.updateValidators();
    this.validateFn = this.getValidateFn();
    this.fieldSubscription = this.field.valueChanges.subscribe((value) => {
      this.error = this.getErrorMessage();
      this.value = this.field.invalid ? '' : value;
    });
  }

  ngOnChanges(data) {
    this.validateFn = this.getValidateFn();
  }

  ngOnDestroy() {
    try {
      if (this.fieldSubscription) {
        this.fieldSubscription.unsubscribe();
      }
    } catch (e) {
      console.warn(e);
    }
  }

  protected updateValidators() {
    this.field.setValidators(this.getValidators());
    this.field.updateValueAndValidity();
  }
  // abstract methods
  abstract getValidateFn();
  abstract getValidators();
  abstract getErrorMessage();

  // mandatory for reactive components
  touchedChange: any = () => {};
  propagateChange: any = () => {};
  validateFn: any = () => {};
  validate(c: FormControl) {
    try {
      return this.validateFn(c);
    } catch (e) {
      console.warn(e);
    }
  }
  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.touchedChange = fn;
  }
  onBlur() {
    this.touchedChange();
  }
}
