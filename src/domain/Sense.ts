import { EntryRef } from './EntryRef';
import { EntryTranslation } from './EntryTranslation';
import { ExampleSentence } from './ExampleSentence';
import { SenseReference } from './SenseReference';

export interface Sense {
    id?: string;
    entry: EntryRef;
    displayText?: string;
    /** Lemma when this sense is for an inflected form; persisted on inflected_entry, not sense. */
    baseForm?: string;
    inflections?: string[];
    partOfSpeech?: string;
    classification?: string;
    frequency?: string;
    unityBucket?: string;
    familiarityBucket?: string;
    familiarityScore?: number;
    qualityBucket?: string;
    qualityScore?: number;
    domain?: string;
    sourceAi?: string;
    summary?: string;
    definition?: string;
    exampleSentences?: ExampleSentence[];
    similarEntries?: string[];
    translations?: Record<string, EntryTranslation>;
    tags?: Record<string, string>;
    references?: SenseReference[];
}
