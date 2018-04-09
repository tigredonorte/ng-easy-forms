import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';

import { PhoneFieldComponent } from './phone-field.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TextMaskModule],
  declarations: [PhoneFieldComponent],
  exports: [PhoneFieldComponent]
})
export class PhoneFieldModule { }
