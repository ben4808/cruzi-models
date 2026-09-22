/** Persisted per-user UI settings (user_settings table). */
export interface UserSettings {
    crosswordSolverMinigame: boolean;
}

export const DEFAULT_USER_SETTINGS: UserSettings = {
    crosswordSolverMinigame: false,
};
