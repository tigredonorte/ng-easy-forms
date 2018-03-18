import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DemoModule } from './demo-app/demo.module';
import { EntryComponent } from './entry.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, DemoModule, RouterModule.forRoot(ALL_ROUTES)],
  declarations: [EntryComponent],
  entryComponents: [EntryComponent]
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this._appRef.bootstrap(EntryComponent);
  }
}
