import { PublicationId } from '../constants/Publication';
import { PuzzleEntry } from './PuzzleEntry';
import { Square } from './Square';

export interface Puzzle {
    id?: string;
    title: string;
    publicationId?: PublicationId;
    date: Date;
    width: number;
    height: number;
    authors?: string[];
    copyright?: string;
    notes?: string;
    lang?: string;
    sourceLink?: string;
}

export interface ScrapedPuzzle extends Puzzle {
    grid: Square[][];
    entries: Map<string, PuzzleEntry>;
}
