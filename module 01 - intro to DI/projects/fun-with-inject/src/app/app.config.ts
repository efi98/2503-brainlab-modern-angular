import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { timer } from 'rxjs';
import { InitService } from './services/init.service';
import { StamService } from './services/stam.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAppInitializer(() => inject(StamService).init()), 
    provideAppInitializer(() => inject(InitService).init())
    // {
    //   provide: APP_INITIALIZER, 
    //   useFactory: () => 
    //     () => inject(InitService).init()
    //   , 
    //   multi: true
    // }, 
    // {
    //   provide: APP_INITIALIZER, 
    //   useFactory: (service: StamService) => 
    //     () => service.init()
    //   , 
    //   deps: [StamService] , 
    //   multi: true
    // }
  ]
};
