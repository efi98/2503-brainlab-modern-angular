import {
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { computed, inject } from '@angular/core';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { answerCurrentQuestion, reset, resetQuestions } from './quiz.updaters';
import { buildAnswers, buildScore } from './quiz.helpers';
import { ColorQuizGeneratorService } from '../services/color-quiz-generator.service';

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialQuizSlice),
  withDevtools('quiz'),
  withProps(_ => ({
    _generator: inject(ColorQuizGeneratorService)
  })),
  withComputed((store) => {
    const currentQuestionIndex = computed(() => store.answers().length);
    const fullAnswers = computed(() =>
      buildAnswers(store.questions(), store.answers())
    );
    const correctAnswers = computed(() =>
      fullAnswers().filter((a) => a.isCorrect)
    );
    const wrongAnswers = computed(() =>
      fullAnswers().filter((a) => !a.isCorrect)
    );
    const correctAnswersCount = computed(() => correctAnswers().length);
    const totalAnswersCount = computed(() => store.answers().length);

    return {
      currentQuestionIndex,
      currentQuestion: computed(
        () => store.questions()[currentQuestionIndex()]
      ),
      isQuizDone: computed(
        () => store.answers().length === store.questions().length
      ),
      fullAnswers,
      correctAnswers,
      wrongAnswers,
      correctAnswersCount,
      totalAnswersCount,
      score: computed(() =>
        buildScore(correctAnswersCount(), totalAnswersCount())
      ),
    };
  }),
  withMethods((store) => {
    return {
      answerCurrentQuestion: (answer: number) => {
        updateState(
          store,
          'answer current question',
          answerCurrentQuestion(answer)
        );
      },
      reset: () => updateState(store, 'reset', reset()),
      generateNewQuiz: () => {
        const questions = store._generator.createRandomQuizSync();
        updateState(store, 'new quiz', resetQuestions(questions));
      },
    };
  })
);
