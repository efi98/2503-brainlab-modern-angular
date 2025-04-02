import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // state
  colors: string[] = ['red', 'green', 'blue', 'purple', 'orange', 'pink', 'brown', 'black'];
  fonts: string[] = ['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Courier New', 'Lucida Console'];
  sizes: string[] = ['14px', '16px', '18px', '20px', '22px', '24px', '32px', '40px'];

  selectedColor: string = this.colors[0];
  selectedFont: string = this.fonts[0];
  selectedSize: string = this.sizes[0];

  // actions
  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

}
