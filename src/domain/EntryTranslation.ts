import { EntryRef } from './EntryRef';

export interface EntryTranslation {
    naturalTranslations?: EntryRef[];
    colloquialTranslations?: EntryRef[];
    sourceAi?: string;
}
