import { Component, computed, contentChild, input, signal } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  standalone: false,
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss'
})
export class ExpanderComponent {

  readonly isOpen = signal(false);
  readonly expanderToggle = contentChild(ExpanderToggleDirective);
  readonly toggleExists = computed(() => !!this.expanderToggle());

  toggle() {
    this.isOpen.update(v => !v);
  }

}
