import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStore } from './store/app.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(AppStore);

  readonly rxm = rxMethod<number>(trigger$ => trigger$.pipe(
    
  ));

  constructor() {
    this.rxm(12);
    this.rxm(20);
    this.rxm(50);
    this.rxm(of(50));
  }
}
