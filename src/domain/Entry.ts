import { EntryRef } from './EntryRef';
import { LoadingStatus } from './LoadingStatus';
import { Sense } from './Sense';

/** Full entry with lexical metadata (entry + entry_tags tables). */
export interface Entry extends EntryRef {
    /** Lemma from inflected_entry when this key is an inflected form. */
    baseForm?: string;
    entryType?: string;
    familiarityBucket?: string;
    familiarityScore?: number;
    qualityBucket?: string;
    qualityScore?: number;
    unityBucket?: string;
    unityScore?: number;
    isVulgar?: boolean;
    reviewedStatus?: string;
    loadingStatus?: LoadingStatus;
    senses?: Sense[];
    tags?: Record<string, string>;
}
