import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HistoryService } from './services/history.service';
import { PREFIX_TOKEN } from './tokens/prefix.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    {
      provide: AdditionService, 
      useClass: WrongAdditionService
    }, 
    {
      provide: PREFIX_TOKEN, 
      useValue: 'DEBUG'
    },
    HistoryService
  ]
};
