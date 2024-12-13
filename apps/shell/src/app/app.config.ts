import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlingInterceptor } from '@nx-microfrontends-angular/error-handler';
import { tokenInterceptor } from '@nx-microfrontends-angular/data-access';
import { API_URL } from '@nx-microfrontends-angular/http-client';
import { environment } from '@env/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorHandlingInterceptor, tokenInterceptor])),
    { provide: API_URL, useValue: environment.api_url },
  ],
};
