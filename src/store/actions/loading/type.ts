export const SHOW_LOADING = 'loadingActionTypes/SHOW_LOADING';
export interface ShowLoadingAction {
  type: typeof SHOW_LOADING;
}

export const HIDE_LOADING = 'loadingActionTypes/HIDE_LOADING';
export interface HideLoadingAction {
  type: typeof HIDE_LOADING;
}

export type LoadingAction = ShowLoadingAction | HideLoadingAction;
