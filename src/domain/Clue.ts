import { EntryRef } from './EntryRef';
import { SenseRef } from './SenseRef';

/** Core clue entity (clue table). */
export interface Clue {
    id?: string;
    entry: EntryRef;
    lang: string;
    sense?: SenseRef;
    customClue?: string;
    customDisplayText?: string;
}
