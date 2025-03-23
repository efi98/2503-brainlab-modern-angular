import { Component, effect, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly counter = signal(0);
  readonly injector = inject(Injector);

  startLogging() {
    effect(() => {
      console.log('my counter is', this.counter())
    }, {
      injector: this.injector

    })

  }


  constructor() {
    setInterval(() => this.counter.update(v => v + 1), 1000);

  }

}
