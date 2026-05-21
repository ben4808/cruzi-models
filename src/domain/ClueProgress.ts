/** Per-user clue progress embedded in API responses. */
export interface ClueProgress {
    correctSolvesNeeded?: number;
    correctSolves?: number;
    incorrectSolves?: number;
    lastSolveDate?: Date;
    hintsUsed?: number;
}
