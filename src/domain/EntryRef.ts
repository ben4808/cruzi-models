/** Lightweight entry identity used to avoid nesting full Entry graphs. */
export interface EntryRef {
    entry: string;
    lang: string;
    displayText?: string;
}
