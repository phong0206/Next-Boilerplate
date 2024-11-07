import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { loadingReducer } from './loadingReducers';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
