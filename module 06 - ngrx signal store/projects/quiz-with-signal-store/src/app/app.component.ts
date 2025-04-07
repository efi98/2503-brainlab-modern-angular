import { Component, inject } from '@angular/core';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";
import { QuizStore } from './store/quiz.store';
import { QuizDoneComponent } from "./components/quiz-done/quiz-done.component";

@Component({
  selector: 'app-root',
  imports: [QuestionPresenterComponent, QuizDoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(QuizStore);
}
