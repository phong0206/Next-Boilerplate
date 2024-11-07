import { all, fork } from 'redux-saga/effects';
import authenSaga from './authen';

export default function* rootSaga() {
  yield all([fork(authenSaga)]);
}

export type RootState = ReturnType<typeof rootSaga>;
