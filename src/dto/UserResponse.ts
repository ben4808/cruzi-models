/** User quiz response payload. */
export interface UserResponse {
    userId: string;
    clueId: string;
    isCorrect: boolean;
    hintsUsed: number;
}
