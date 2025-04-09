import { Component, input, signal } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss'
})
export class ExpanderComponent {

  readonly isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }

}
