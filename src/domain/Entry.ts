import { EntryRef } from './EntryRef';
import { LoadingStatus } from './LoadingStatus';
import { Sense } from './Sense';

/** Full entry with lexical metadata (entry + entry_tags tables). */
export interface Entry extends EntryRef {
    rootEntry?: string;
    entryType?: string;
    familiarityScore?: number;
    qualityScore?: number;
    idiomacityScore?: number;
    unityBucket?: string;
    loadingStatus?: LoadingStatus;
    senses?: Sense[];
    tags?: Record<string, string>;
}
