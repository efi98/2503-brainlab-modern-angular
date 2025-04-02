import { Component } from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss', 
  providers: [
    // {provide: AdditionService, useClass: AdditionService}
  ]
})
export class CalcComponent {
  result = -1;

  constructor(protected additionService: AdditionService) {}

  add(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }

}
