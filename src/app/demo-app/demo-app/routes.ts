
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Routes} from '@angular/router';
import { ToggleFieldComponent } from './../../lib/toggle-field/toggle-field.component';
import { PasswordFieldComponent } from './../../lib/password-field/password-field.component';
import { EmailFieldComponent } from './../../lib/email-field/email-field.component';
import { DemoAppComponent, HomeComponent } from './demo-app.component';

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: DemoAppComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'toggle-field', component: ToggleFieldComponent},
    {path: 'password-field', component: PasswordFieldComponent},
    {path: 'email-field', component: EmailFieldComponent}
  ]}
];

export const ALL_ROUTES: Routes = [
  {path: '',  component: DemoAppComponent, children: DEMO_APP_ROUTES}
];
