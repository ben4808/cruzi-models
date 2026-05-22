export interface Publication {
    id: string;
    name: string;
}

export const Publications = {
    NYT: { id: 'NYT', name: 'New York Times' } as Publication,
    USA: { id: 'USA', name: 'USA Today' } as Publication,
    AVClub: { id: 'AVClub', name: 'AV Club' } as Publication,
    Newsday: { id: 'Newsday', name: 'Newsday' } as Publication,
    WSJ: { id: 'WSJ', name: 'Wall Street Journal' } as Publication,
    LAT: { id: 'LAT', name: 'Los Angeles Times' } as Publication,
    Universal: { id: 'Universal', name: 'Universal Crossword' } as Publication,
    BEQ: { id: 'BEQ', name: 'Brendan Emmett Quigley' } as Publication,
} as const;

export type PublicationId = keyof typeof Publications;
