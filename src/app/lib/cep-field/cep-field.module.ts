import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';

import { CepFieldComponent } from './cep-field.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TextMaskModule],
  declarations: [CepFieldComponent],
  exports: [CepFieldComponent]
})
export class CepFieldModule {}
