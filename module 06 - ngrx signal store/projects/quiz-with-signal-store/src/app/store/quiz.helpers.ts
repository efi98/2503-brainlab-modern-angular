import { Question } from "../models/question.model";
import { Answer } from "./quiz.vm";

export function buildAnswers(questions: Question[], answers: number[]): Answer[] {
    return answers.map((ans, i) => ({
        answerIndex: ans, 
        isCorrect: questions[i].correctIndex === ans
    }))
}

export function buildScore(correct: number, total: number): number { 
    if (total === 0) return 0;
    return Math.ceil((correct / total) * 100);
}