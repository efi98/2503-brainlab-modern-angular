import { Component, computed, inject } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  standalone: false,
  selector: '[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrl: './expander-toggle.component.scss'
})
export class ExpanderToggleComponent {
  readonly myExpander = inject(ExpanderComponent, {optional: true});

  readonly hasExpander = !!this.myExpander;

  readonly expanderOn = computed(() => this.hasExpander ? this.myExpander!.isOpen() : false);

}
