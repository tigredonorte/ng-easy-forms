import { NgModule } from '@angular/core';
import { EmailFieldModule, PasswordFieldModule, ToggleFieldModule } from '../lib';

@NgModule({
  exports: [EmailFieldModule, PasswordFieldModule, ToggleFieldModule]
})
export class DemoEasyFormsModule {}
