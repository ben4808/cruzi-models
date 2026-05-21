import { PublicationId } from '../constants/Publication';

/** Summary puzzle metadata for collection list views (puzzle table). */
export interface PuzzleSummary {
    id?: string;
    title: string;
    publicationId?: PublicationId;
    date: Date;
    width: number;
    height: number;
    author?: string;
    copyright?: string;
    notes?: string;
    lang?: string;
    sourceLink?: string;
}
