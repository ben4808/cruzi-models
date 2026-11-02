/** User-created Magic Crossword puzzle (magic_puzzle table). */
export interface MagicPuzzle {
    id?: string;
    lang: string;
    width: number;
    height: number;
    createdAt?: Date;
    seedAnswer: string;
}
