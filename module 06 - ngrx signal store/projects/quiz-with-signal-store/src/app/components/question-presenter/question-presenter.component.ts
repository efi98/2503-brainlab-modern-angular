import { Component, inject, signal } from '@angular/core';
import { QuizStore } from '../../store/quiz.store';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-presenter',
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly store = inject(QuizStore);

  readonly question = this.store.currentQuestion;

  // readonly question = signal<Question>({
  //   caption: ['purple', 'yellow'], 
  //   answers: ['red', 'green', 'blue', 'white'], 
  //   correctIndex: 2
  // })

  setAnswer(index: number) {
    this.store.answerCurrentQuestion(index);
  }

}
