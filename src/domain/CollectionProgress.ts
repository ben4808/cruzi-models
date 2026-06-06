/** Per-user collection progress embedded in API responses. */
export interface CollectionProgress {
    userId?: string;
    unseen: number;
    inProgress: number;
    completed: number;
    hintsUsed: number;
    /** For crosswords where the user may only complete entries 6 letters or longer. */
    collectionCompleted: boolean;
}
