import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-expander',
  imports: [],
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss'
})
export class ExpanderComponent {

  readonly isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }

}
