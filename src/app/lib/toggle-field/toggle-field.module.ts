import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ToggleFieldComponent } from './toggle-field.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
  declarations: [ToggleFieldComponent],
  exports: [ToggleFieldComponent]
})
export class ToggleFieldModule {}
