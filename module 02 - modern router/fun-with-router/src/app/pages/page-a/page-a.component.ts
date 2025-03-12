import { Component, inject } from '@angular/core';
import { MY_NUM } from '../../tokens/my-num.token';

@Component({
  selector: 'app-page-a',
  imports: [],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.scss'
})
export default class PageAComponent {
  readonly theNumber = inject(MY_NUM);

}
