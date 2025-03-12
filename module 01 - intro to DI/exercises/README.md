# Exercise for module 01 - Dependency Injection and Services

## Exercise 1 - Global and Local services

This tutorial guides you to build a counter app in Angular 19, practicing:
1. Defining a service that uses signals.
2. Providing a service globally (`root`).
3. Providing a service at the component level.
4. Using the `useValue` provider to inject custom behavior.

### 1. Set Up the Project
1. Create a new Angular project with standalone components enabled:  
   ```bash
   ng new counter-app
   ```

2. Generate two standalone components:  
   ```bash
   ng g c counter
   ng g c counter-display
   ```

3. Generate two services:  
   ```bash
   ng g s global-counter
   ng g s local-counter
   ```

### 2. Define a Global Service with Signals
1. Open `global-counter.service.ts`.  
2. Add a private signal for a shared counter
3. Expose the global counter as public readonly signal
4. Implement `increment` and `decrement` methods

   ```typescript
   import { Injectable, signal } from '@angular/core';

   @Injectable({
     providedIn: 'root',
   })
   export class GlobalCounterService {
     // add private signal here

     // add public signal here

     increment() {
        // implement this
     }

     decrement() {
        // implement this
     }
   }
   ```

### 3. Define a Local Service for Component-Level Scope
1. Open `local-counter.service.ts`.  
2. Add a private writeable signal for a scoped counter. 
3. Expose the global counter as public readonly signal
4. Implement `increment` and `decrement` methods


   ```typescript
   import { signal } from '@angular/core';

   export class LocalCounterService {
     // add private signal here

     // add public signal here

     increment() {
        // implement this
     }

     decrement() {
        // implement this
     }
   }
   ```

3. Provide it locally in the `CounterComponent` using the `providers` array:  
   ```typescript
   import { Component, inject } from '@angular/core';
   import { LocalCounterService } from '../local-counter.service';
   import { GlobalCounterService } from '../global-counter.service';

   @Component({
     selector: 'app-counter',
     templateUrl: './counter.component.html',
     styleUrls: ['./counter.component.css'],
     providers: [LocalCounterService],
   })
   export class CounterComponent {
     localCounter = inject(LocalCounterService);
     globalCounter = inject(GlobalCounterService);
   }
   ```


### 4. Use the Global and Local Services in the Component
1. Update the `counter.component.html` template to show both counters:  
   ```html
   <h1>Local Counter: {{ localCounter.localCount() }}</h1>
   <button (click)="localCounter.increment()">Local +</button>
   <button (click)="localCounter.decrement()">Local -</button>

   <h1>Global Counter: {{ globalCounter.globalCount() }}</h1>
   <button (click)="globalCounter.increment()">Global +</button>
   <button (click)="globalCounter.decrement()">Global -</button>
   ```

---

### 5. Use the `useValue` Provider
1. Create a dependency token called `APP_TITLE`
2. Open `app.config.ts`.
3. Add a custom provider for the app title using `useValue`:  
   ```typescript
       {
         provide: APP_TITLE,
         useValue: 'Angular Counter App with DI',
       },
   ```

4. Inject the `APP_TITLE` value into the `CounterComponent`:  
   ```typescript
   export class CounterComponent {
     appTitle = inject(APP_TITLE);
   }
   ```

5. Display the title in the template:  
   ```html
   <h1>{{ appTitle }}</h1>
   ```

