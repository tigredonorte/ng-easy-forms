import { Routes } from '@angular/router';

import { DemoRoutes } from '../components/route-data';
import { DemoAppComponent, HomeComponent } from './demo-app.component';

export const DEMO_APP_ROUTES: Routes = [
  {
    path: '',
    component: DemoAppComponent,
    children: [{ path: '', component: HomeComponent }, ...DemoRoutes]
  }
];

export const ALL_ROUTES: Routes = [{ path: '', component: DemoAppComponent, children: DEMO_APP_ROUTES }];
