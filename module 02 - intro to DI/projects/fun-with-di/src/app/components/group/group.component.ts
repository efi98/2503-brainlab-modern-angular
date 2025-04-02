import { Component } from '@angular/core';
import { CalcComponent } from "../calc/calc.component";
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-group',
  imports: [CalcComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss', 
  providers: [
    AdditionService
  ]
})
export class GroupComponent {

}
