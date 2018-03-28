import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EmailFieldComponent } from './email-field.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  declarations: [EmailFieldComponent],
  exports: [EmailFieldComponent]
})
export class EmailFieldModule {}
