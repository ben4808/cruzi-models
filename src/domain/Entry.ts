import { EntryRef } from './EntryRef';
import { LoadingStatus } from './LoadingStatus';
import { Sense } from './Sense';

/** Full entry with lexical metadata (entry + entry_tags tables). */
export interface Entry extends EntryRef {
    baseForm?: string;
    entryType?: string;
    familiarityBucket?: string;
    familiarityScore?: number;
    qualityBucket?: string;
    qualityScore?: number;
    idiomacityScore?: number;
    unityBucket?: string;
    unityScore?: number;
    isVulgar?: boolean;
    reviewedStatus?: string;
    loadingStatus?: LoadingStatus;
    senses?: Sense[];
    tags?: Record<string, string>;
}
