import { Component, inject } from '@angular/core';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-quiz-done',
  imports: [],
  templateUrl: './quiz-done.component.html',
  styleUrl: './quiz-done.component.scss'
})
export class QuizDoneComponent {
  readonly store = inject(QuizStore);

}
