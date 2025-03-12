import { Component, inject } from '@angular/core';
import { MY_NUM } from '../../../tokens/my-num.token';

@Component({
  selector: 'app-part-2',
  imports: [],
  templateUrl: './part-2.component.html',
  styleUrl: './part-2.component.scss'
})
export class Part2Component {
  readonly myNumber = inject(MY_NUM);

}
