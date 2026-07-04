import { ClueHydrated, CollectionClue, CollectionClueWithProgress } from './ClueHydrated';
import { CollectionProgress } from './CollectionProgress';
import { Puzzle } from './Puzzle';
import { User } from './User';

/** Clue collection (clue_collection table). */
export interface ClueCollection {
    id?: string;
    puzzle?: Puzzle;
    title: string;
    lang: string;
    author?: string;
    creator?: User;
    description?: string;
    createdDate: Date;
    modifiedDate: Date;
    /** Most recent clue activity for the current user, or collection modified_date when none. */
    lastAccessedDate?: Date;
    /** Book or AI provenance (clue_collection.source). */
    source?: string;
    isPrivate: boolean;
    metadata1?: string;
    metadata2?: string;
    clueCount?: number;
    clueCount6Plus?: number;
    progressData?: CollectionProgress;
    clues?: (ClueHydrated | CollectionClueWithProgress | CollectionClue)[];
}
