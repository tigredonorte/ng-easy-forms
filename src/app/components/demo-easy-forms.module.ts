import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { EmailFieldModule, PasswordFieldModule, ToggleFieldModule } from '../../lib';
import { EmailFieldDemoComponent } from './../components/email-field-demo/email-field-demo.component';
import { PasswordFieldDemoComponent } from './../components/password-field-demo/password-field-demo.component';
import { ToggleFieldDemoComponent } from './../components/toggle-field-demo/toggle-field-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EmailFieldModule,
    PasswordFieldModule,
    ToggleFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [EmailFieldDemoComponent, PasswordFieldDemoComponent, ToggleFieldDemoComponent]
})
export class DemoEasyFormsModule {}
