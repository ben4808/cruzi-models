/** User quiz response payload. */
export interface UserResponse {
    userId: string;
    clueId: string;
    collectionId: string;
    isCorrect: boolean;
    hintsUsed: number;
}
