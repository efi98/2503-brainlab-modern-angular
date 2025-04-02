import { Component, computed, HostBinding, input } from '@angular/core';
import { getContrastingColor } from '../../helpers/color.helpers';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss', 
  host: {
    '[style.background]': 'background()', 
    '[style.color]': 'bgContrast()'
  }
})
export class TitleComponent {
  readonly caption = input.required<string>();
  readonly background = input('lightgray');

  readonly bgContrast = computed(() => getContrastingColor(this.background()));

}
