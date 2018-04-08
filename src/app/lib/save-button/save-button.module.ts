import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SaveButtonComponent } from './save-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  declarations: [SaveButtonComponent],
  exports: [SaveButtonComponent]
})
export class SaveButtonModule {}
