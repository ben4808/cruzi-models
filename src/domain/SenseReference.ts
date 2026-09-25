/** A citation attached to a sense (sense_reference table). */
export interface SenseReference {
    id?: string;
    senseId?: string;
    referenceType?: string;
    referenceText: string;
    referenceSource?: string;
    referenceUrl?: string;
}
