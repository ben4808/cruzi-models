import { ClueProgress } from './ClueProgress';
import { Clue } from './Clue';
import { Entry } from './Entry';
import { Sense } from './Sense';

/** Clue with fully hydrated entry and sense for read endpoints. */
export interface ClueHydrated {
    id?: string;
    entry: Entry;
    lang: string;
    sense?: Sense;
    customClue?: string;
    customDisplayText?: string;
}

/** Hydrated clue with per-user progress. */
export interface ClueWithProgress extends ClueHydrated {
    progressData?: ClueProgress;
}

/** Collection membership fields (collection__clue table). */
export interface CollectionClue {
    clue: Clue | ClueHydrated;
    order: number;
    /** Clue index in the source puzzle (collection__clue.metadata1). */
    puzzleClueIndex?: string;
    metadata2?: string;
}

/** Hydrated collection clue with per-user progress. */
export interface CollectionClueWithProgress extends CollectionClue {
    clue: ClueWithProgress;
}
