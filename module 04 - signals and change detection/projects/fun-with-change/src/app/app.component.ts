import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly counter = signal(1);

  // readonly changeDetector = inject(ChangeDetectorRef);

  get value() {
    console.log('Getting the value 42');
    return 42;
  }

  doNothing() {}

  constructor() {
    setInterval(() => {
      this.counter.update(v => v + 1);
      console.log('Counter changes to', this.counter());
    }, 3000);
  }
}
