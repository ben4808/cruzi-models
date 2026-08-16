export type FriendlyWordsGameStatus = 'lobby' | 'playing' | 'completed';

export type FriendlyWordsTile = {
  letter: string;
  value: number;
};

export type FriendlyWordsBoardTile = FriendlyWordsTile & {
  isBlank?: boolean;
  playedBy?: number;
};

export type FriendlyWordsPlayer = {
  id: string;
  token: string;
  name: string;
  ready: boolean;
  score: number;
  rack: FriendlyWordsTile[];
  slot: number | null; // 1-4 when seated, null on waitlist
};

export type FriendlyWordsRatingLabel =
  | 'Not a Thing'
  | "It's a Stretch"
  | 'Obscure'
  | 'Meh'
  | 'Good'
  | 'Cool'
  | 'Amazing';

export type FriendlyWordsOpponentRating = {
  ratingLabel: FriendlyWordsRatingLabel;
  wasUpdated: boolean;
};

export type FriendlyWordsConfirmationWord = {
  id: string;
  entry: string;
  direction: 'across' | 'down';
  startRow: number;
  startCol: number;
  grossScore: number;
  /** Initial recommendation from the entry table. */
  recommendedLabel: FriendlyWordsRatingLabel;
  /** Per-opponent slider selection (excludes the player on turn). */
  opponentRatings: Record<string, FriendlyWordsOpponentRating>;
  /** Consensus rating: max of opponents' current ratings, else recommended. */
  ratingLabel: FriendlyWordsRatingLabel;
  multiplier: number;
};

export type FriendlyWordsPlacement = {
  row: number;
  col: number;
  letter: string;
  value: number;
  isBlank?: boolean;
};

/** Ephemeral in-progress turn preview (before submit). Not required in persisted state. */
export type FriendlyWordsLivePlay = {
  playerId: string;
  placements: FriendlyWordsPlacement[];
  selectedSquare: { row: number; col: number } | null;
  playDirection: 'across' | 'down';
};

export type FriendlyWordsConfirmation = {
  playerId: string;
  placements: FriendlyWordsPlacement[];
  words: FriendlyWordsConfirmationWord[];
  grossScore: number;
  totalMultiplier: number;
  netScore: number;
  /** Opponent player ids who have clicked Confirm. */
  confirmedBy: string[];
  version: number;
};

export type FriendlyWordsRating = {
  playedWordId: string;
  playerId: string;
  entry: string;
  lang: string;
  multiplier: string;
  wasUpdated: boolean;
};

export type FriendlyWordsGamePhase = 'ready' | 'playing' | 'exchanging' | 'confirming' | 'gameOver';

export type FriendlyWordsLanguage = 'en' | 'es';

export type FriendlyWordsGameState = {
  players: FriendlyWordsPlayer[];
  waitlist: FriendlyWordsPlayer[];
  turnOrder: string[];
  currentPlayerIndex: number;
  turnNumber: number;
  tilePool: FriendlyWordsTile[];
  board: (FriendlyWordsBoardTile | null)[][];
  gamePhase: FriendlyWordsGamePhase;
  confirmation: FriendlyWordsConfirmation | null;
  winnerPlayerId?: string | null;
};

export type FriendlyWordsTurn = {
  id: string;
  gameId: string;
  player: string;
  turnNumber: number;
  rack: string;
  action: string;
  grossScore: number | null;
  totalMultiplier: string | null;
  netScore: number | null;
  startScore: number;
  endScore: number;
};

export type FriendlyWordsPlayedWord = {
  id: string;
  turnId: string;
  entry: string;
  lang: string;
  grossScore: number;
  multiplier: string;
};

export type FriendlyWordsGame = {
  id: string;
  gameCode: string | null;
  title: string;
  hostPlayerId: string;
  status: FriendlyWordsGameStatus;
  /** Game language controls tile bag and recommendation behavior. */
  lang: FriendlyWordsLanguage;
  createdAt: Date;
  completedAt: Date | null;
  player1: string | null;
  player2: string | null;
  player3: string | null;
  player4: string | null;
  waitlist: FriendlyWordsPlayer[];
  state: FriendlyWordsGameState;
  turns?: FriendlyWordsTurn[];
  playedWords?: FriendlyWordsPlayedWord[];
};
