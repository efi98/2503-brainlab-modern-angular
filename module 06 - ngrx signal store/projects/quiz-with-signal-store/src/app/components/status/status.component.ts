import { Component, inject } from '@angular/core';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  readonly store = inject(QuizStore);

  readonly answers = this.store.fullAnswers;

}
