import { EntryFilter } from './EntryFilter';

/** Query parameters for entry search endpoints. */
export interface EntryQueryParams {
    query?: string;
    lang?: string;
    minFamiliarityScore?: number;
    maxFamiliarityScore?: number;
    minQualityScore?: number;
    maxQualityScore?: number;
    filters?: EntryFilter[];
}
