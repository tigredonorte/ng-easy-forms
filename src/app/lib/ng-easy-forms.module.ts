import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CepFieldModule } from './cep-field/cep-field.module';
import { CpfFieldModule } from './cpf-field/cpf-field.module';
import { EmailFieldModule } from './email-field/email-field.module';
import { PasswordFieldModule } from './password-field/password-field.module';
import { SaveButtonModule } from './save-button/save-button.module';
import { ToggleFieldModule } from './toggle-field/toggle-field.module';

@NgModule({
  imports: [CommonModule, EmailFieldModule, PasswordFieldModule, SaveButtonModule, ToggleFieldModule],
  declarations: [],
  exports: [CepFieldModule, CpfFieldModule, EmailFieldModule, PasswordFieldModule, SaveButtonModule, ToggleFieldModule]
})
export class NgEasyFormsModule {}
