import { Component, input, signal } from '@angular/core';
import { single } from 'rxjs';
import { BlankComponent } from "../../../components/blank/blank.component";

@Component({
  selector: 'app-expander',
  imports: [BlankComponent],
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss'
})
export class ExpanderComponent {
  readonly title = input.required<string>();

  readonly isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }

}
