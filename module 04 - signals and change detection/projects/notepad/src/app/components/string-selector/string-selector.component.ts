import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  imports: [],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.scss'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();
  readonly selectedOption = model.required<string>();

  setSelected(value: string) {
    this.selectedOption.set(value);
  }

}
