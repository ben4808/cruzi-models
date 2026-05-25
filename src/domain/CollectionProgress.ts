/** Per-user collection progress embedded in API responses. */
export interface CollectionProgress {
    userId?: string;
    unseen: number;
    inProgress: number;
    completed: number;
    hintsUsed: number;
}
