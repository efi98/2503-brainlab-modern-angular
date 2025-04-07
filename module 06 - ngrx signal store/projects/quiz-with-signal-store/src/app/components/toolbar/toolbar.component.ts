import { Component, inject } from '@angular/core';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  readonly store = inject(QuizStore);

}
