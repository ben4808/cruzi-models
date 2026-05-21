import { ClueProgress } from './ClueProgress';

/** Keyed clue progress, e.g. for writes or standalone records. */
export interface ClueProgressData extends ClueProgress {
    userId: string;
    clueId: string;
}
