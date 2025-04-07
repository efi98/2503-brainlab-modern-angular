import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quiz.slice";
import { Question } from "../models/question.model";

export function answerCurrentQuestion(index: number): PartialStateUpdater<QuizSlice> {
    return state => state.answers.length >= state.questions.length 
    ? state
    :  ({
        answers: [...state.answers, index]
    })
}

export function reset(): PartialStateUpdater<QuizSlice> {
    return state => ({answers: []})
}

export function resetQuestions(questions: Question[]): PartialStateUpdater<QuizSlice> {
    return state => ({
        answers: [], 
        questions
    })
}