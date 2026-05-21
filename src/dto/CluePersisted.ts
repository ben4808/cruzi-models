import { Clue } from '../domain/Clue';

/** DB-persisted clue fields not exposed on the public Clue entity. */
export type CluePersisted = Clue & {
    source?: string;
    translatedClues?: Record<string, unknown>;
};
