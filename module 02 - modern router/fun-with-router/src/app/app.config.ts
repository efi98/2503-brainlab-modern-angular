import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MY_NUM } from './tokens/my-num.token';
import { provideHttpClient } from '@angular/common/http';
import { MY_LINK_CLASS } from './directives/my-link-class.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    {
      provide: MY_NUM, 
      useValue: 0
    }, 
    {
      provide: MY_LINK_CLASS, 
      useValue: 'here'
    }
  ]
};
