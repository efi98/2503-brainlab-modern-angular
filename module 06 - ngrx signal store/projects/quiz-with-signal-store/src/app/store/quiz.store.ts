import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { computed } from '@angular/core';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { answerCurrentQuestion } from './quiz.updaters';
import { buildAnswers, buildScore } from './quiz.helpers';

export const QuizStore = signalStore(
    { providedIn: 'root'}, 
    withState(initialQuizSlice), 
    withDevtools('quiz'),
    withComputed(store => {
        const currentQuestionIndex= computed(() => store.answers().length);
        const fullAnswers = computed(() => buildAnswers(store.questions(), store.answers()));
        const correctAnswers= computed(() => fullAnswers().filter(a => a.isCorrect));
        const wrongAnswers= computed(() => fullAnswers().filter(a => !a.isCorrect)); 
        const correctAnswersCount = computed(() => correctAnswers().length);
        const totalAnswersCount =  computed(() => store.answers().length);

        return {
            currentQuestionIndex,
            currentQuestion: computed(() => store.questions()[currentQuestionIndex()]), 
            isQuizDone: computed(() => store.answers().length === store.questions().length), 
            fullAnswers, correctAnswers, wrongAnswers, correctAnswersCount, totalAnswersCount,
            score: computed(() => buildScore(correctAnswersCount(), totalAnswersCount()))           
    }}), 
    withMethods(store => ({
        answerCurrentQuestion: (answer: number) => {
            updateState(store, 'answer current question', answerCurrentQuestion(answer))

        }
    }))
);