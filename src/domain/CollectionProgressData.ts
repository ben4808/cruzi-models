import { CollectionProgress } from './CollectionProgress';

/** Keyed collection progress, e.g. for standalone records. */
export interface CollectionProgressData extends CollectionProgress {
    userId: string;
    collectionId: string;
}
