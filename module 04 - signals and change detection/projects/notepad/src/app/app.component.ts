import { Component, signal } from '@angular/core';
import { TitleComponent } from "./components/title/title.component";
import { StringSelectorComponent } from "./components/string-selector/string-selector.component";

@Component({
  selector: 'app-root',
  imports: [TitleComponent, StringSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  host: {
    '[style.--base-color]': 'selectedColor()'
  }
})
export class AppComponent {
  // state
  readonly colors = signal(['red', 'green', 'blue', 'purple', 'orange', 'pink', 'brown', 'black']);
  readonly fonts = signal(['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Courier New', 'Lucida Console']);
  readonly sizes = signal(['14px', '16px', '18px', '20px', '22px', '24px', '32px', '40px']);

  readonly selectedColor = signal(this.colors()[0]);
  readonly selectedFont = signal(this.fonts()[0]);
  readonly selectedSize = signal(this.sizes()[0]);

  // actions
  selectColor(value: string) {
    this.selectedColor.set(value);
  }

  selectFont(value: string) {
    this.selectedFont.set(value);
  }

  selectSize(value: string) {
    this.selectedSize.set(value);
  }

}
