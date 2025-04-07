export interface Question {
    readonly caption: DualColor | TripleColor;
    readonly answers: string[];
    readonly correctIndex: number;
}

export type DualColor = [string, string];
export type TripleColor = [string, string, string];

