/** Crossword clue response payload. */
export interface CrosswordResponse {
    userId?: string;
    clueId: string;
    hintsUsed: number;
}
