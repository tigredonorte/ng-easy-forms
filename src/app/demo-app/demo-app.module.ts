import { DemoEasyFormsModule } from './components/demo-easy-forms.module';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DemoModule } from './demo-app/demo.module';
import { ALL_ROUTES } from './demo-app/routes';
import { EntryComponent } from './entry.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoModule,
    DemoEasyFormsModule,
    RouterModule.forRoot(ALL_ROUTES)
  ],
  declarations: [EntryComponent],
  bootstrap: [EntryComponent]
})
export class DemoAppModule { }
