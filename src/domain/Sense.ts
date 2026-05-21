import { EntryRef } from './EntryRef';
import { EntryTranslation } from './EntryTranslation';
import { ExampleSentence } from './ExampleSentence';

/** Sense definition (sense table). */
export interface Sense {
    id?: string;
    entry: EntryRef;
    partOfSpeech?: string;
    commonness?: string;
    familiarityScore?: number;
    qualityScore?: number;
    sourceAi?: string;
    summary?: string;
    definition?: string;
    exampleSentences?: ExampleSentence[];
    /** sense.similar_entries in schema.sql */
    similarEntries?: string[];
    translations?: Record<string, EntryTranslation>;
}
