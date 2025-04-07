import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quiz.slice";

export function answerCurrentQuestion(index: number): PartialStateUpdater<QuizSlice> {
    return state => state.answers.length >= state.questions.length 
    ? state
    :  ({
        answers: [...state.answers, index]
    })
}