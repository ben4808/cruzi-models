import { ClueHydrated, CollectionClueWithProgress } from './ClueHydrated';
import { CollectionProgress } from './CollectionProgress';
import { PuzzleSummary } from './PuzzleSummary';
import { User } from './User';

/** Clue collection (clue_collection table). */
export interface ClueCollection {
    id?: string;
    puzzle?: PuzzleSummary;
    title: string;
    lang: string;
    author?: string;
    creator?: User;
    description?: string;
    createdDate: Date;
    modifiedDate: Date;
    /** Book or AI provenance (clue_collection.source). */
    source?: string;
    isPrivate: boolean;
    /** AI composite score (clue_collection.metadata1). */
    aiCompositeScore?: string;
    metadata2?: string;
    clueCount?: number;
    clueCount6Plus?: number;
    progressData?: CollectionProgress;
    clues?: (ClueHydrated | CollectionClueWithProgress)[];
}
