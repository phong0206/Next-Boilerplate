import * as actions from './type';

export const showLoading = (): actions.ShowLoadingAction => ({
  type: actions.SHOW_LOADING,
});

export const hideLoading = (): actions.HideLoadingAction => ({
  type: actions.HIDE_LOADING,
});
