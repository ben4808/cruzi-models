/** SQL projection for collection clue list views. */
export interface CollectionClueSenseOption {
    senseId: string;
    senseSummary: string;
}

/** SQL projection for get_collection_clues. */
export interface CollectionClueTableRow {
    id: string;
    answer: string;
    sense: string;
    clue: string;
    progress: string;
    status: string;
    senses: CollectionClueSenseOption[];
}
