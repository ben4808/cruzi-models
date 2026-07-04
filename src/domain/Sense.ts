import { EntryRef } from './EntryRef';
import { EntryTranslation } from './EntryTranslation';
import { ExampleSentence } from './ExampleSentence';

export interface Sense {
    id?: string;
    entry: EntryRef;
    partOfSpeech?: string;
    classification?: string;
    frequency?: string;
    familiarityScore?: number;
    qualityScore?: number;
    sourceAi?: string;
    summary?: string;
    definition?: string;
    exampleSentences?: ExampleSentence[];
    similarEntries?: string[];
    translations?: Record<string, EntryTranslation>;
}
