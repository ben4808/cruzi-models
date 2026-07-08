export interface Publication {
    id: string;
    name: string;
}

export const Publications = {
    Atlantic: { id: 'Atlantic', name: 'The Atlantic' } as Publication,
    BEQ: { id: 'BEQ', name: 'Brendan Emmett Quigley' } as Publication,
    BestCrosswords: { id: 'BestCrosswords', name: 'Best Crosswords' } as Publication,
    Croce: { id: 'Croce', name: 'Club 72 (Croce)' } as Publication,
    CrosswordClub: { id: 'CrosswordClub', name: 'Crossword Club' } as Publication,
    DailyBeast: { id: 'DailyBeast', name: 'Daily Beast' } as Publication,
    DailyCommuter: { id: 'DailyCommuter', name: 'Daily Commuter' } as Publication,
    DailyPop: { id: 'DailyPop', name: 'Daily Pop' } as Publication,
    Jonesin: { id: 'Jonesin', name: "Jonesin'" } as Publication,
    Joseph: { id: 'Joseph', name: 'Joseph' } as Publication,
    LAT: { id: 'LAT', name: 'Los Angeles Times' } as Publication,
    MerriamWebster: { id: 'MerriamWebster', name: 'Merriam-Webster' } as Publication,
    Newsday: { id: 'Newsday', name: 'Newsday' } as Publication,
    NewYorker: { id: 'NewYorker', name: 'New Yorker' } as Publication,
    NYT: { id: 'NYT', name: 'New York Times' } as Publication,
    PeoplePuzzler: { id: 'PeoplePuzzler', name: 'People Puzzler' } as Publication,
    PennyDell: { id: 'PennyDell', name: 'Penny Dell' } as Publication,
    PennyDellSunday: { id: 'PennyDellSunday', name: 'Penny Dell Sunday' } as Publication,
    Premier: { id: 'Premier', name: 'Premier Sunday' } as Publication,
    Puzzmo: { id: 'Puzzmo', name: 'Puzzmo' } as Publication,
    PuzzmoBig: { id: 'PuzzmoBig', name: 'Puzzmo Big' } as Publication,
    Sheffer: { id: 'Sheffer', name: 'Sheffer' } as Publication,
    SimplyDaily: { id: 'SimplyDaily', name: 'Simply Daily Puzzles' } as Publication,
    Slate: { id: 'Slate', name: 'Slate' } as Publication,
    Sporcle: { id: 'Sporcle', name: 'Sporcle' } as Publication,
    Telegraph: { id: 'Telegraph', name: 'Telegraph Cross Atlantic' } as Publication,
    TheWalrus: { id: 'TheWalrus', name: 'The Walrus' } as Publication,
    Universal: { id: 'Universal', name: 'Universal' } as Publication,
    UniversalSunday: { id: 'UniversalSunday', name: 'Universal Sunday' } as Publication,
    USAToday: { id: 'USAToday', name: 'USA Today' } as Publication,
    Vox: { id: 'Vox', name: 'Vox' } as Publication,
    Vulture: { id: 'Vulture', name: 'Vulture' } as Publication,
    WashingtonPost: { id: 'WP', name: 'Washington Post' } as Publication,
    WSJ: { id: 'WSJ', name: 'Wall Street Journal' } as Publication,
    YourPuzzleSource: { id: 'YourPuzzleSource', name: 'Your Puzzle Source' } as Publication,
} as const;

export type PublicationId = keyof typeof Publications;

export function getSortedPublications(): Publication[] {
    return Object.values(Publications).sort((a, b) => a.name.localeCompare(b.name));
}
