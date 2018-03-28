import { Component, ViewEncapsulation } from '@angular/core';

/**
 * The entry app for demo site. Routes under `accessibility` will use AccessibilityDemo component,
 * while other demos will use `DemoApp` component. Since DemoApp and AccessibilityDemo use
 * different templates (DemoApp has toolbar and sidenav), we use this EntryApp in index.html
 * as our entry point.
 */
@Component({
  moduleId: module.id,
  selector: 'app-entry',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})
export class EntryComponent {}
