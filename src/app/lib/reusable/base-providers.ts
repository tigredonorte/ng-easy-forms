import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef } from '@angular/core';

export function getBaseProviders(component) {
  return [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => component), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => component), multi: true }
  ];
}
