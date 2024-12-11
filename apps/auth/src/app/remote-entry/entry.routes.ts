import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('@nx-microfrontends-angular/feature-login').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('@nx-microfrontends-angular/feature-register').then((m) => m.RegisterComponent),
      },
    ],
  },
];
