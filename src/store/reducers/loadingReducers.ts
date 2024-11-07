import * as actions from '../actions/loading/type';

const initialState = false;

export const loadingReducer = (state: boolean = initialState, action: actions.LoadingAction) => {
  switch (action.type) {
    case actions.SHOW_LOADING: {
      return (state = true);
    }
    case actions.HIDE_LOADING: {
      return (state = false);
    }
    default: {
      return state;
    }
  }
};
