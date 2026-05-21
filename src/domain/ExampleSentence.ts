/** Canonical example sentence shape (example_sentence + example_sentence_translation). */
export interface ExampleSentence {
    id?: string;
    senseId: string;
    translations?: Record<string, string>;
    sourceAi?: string;
}
