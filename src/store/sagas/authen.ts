import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { EStatusHttp } from 'enums/authen';
import { IResponseAction } from 'interfaces';
import { ILogin } from 'interfaces/authen';
import { changePasswordService, loginAPI, logoutService, refreshTokenService } from 'services/authen';
import * as AuthenActions from '../actions/authen/type';
import { handleMessage, redirectLogin } from 'utils/authen';
import * as LoadingActions from '../actions/loading/type';

function* login(action: { type: string; payload: ILogin; success?: (data?: any) => void }) {
  try {
    yield put({ type: LoadingActions.SHOW_LOADING });
    const res: AxiosResponse = yield call(loginAPI, action.payload);

    if (res?.status === EStatusHttp.HTTP_CREATED) {
      action.success?.(res.data.data);
    } else {
      handleMessage(res);
    }
  } catch (error: any) {
    if (error?.response) handleMessage(error?.response);
  } finally {
    yield put({ type: LoadingActions.HIDE_LOADING });
  }
}

function* logout(action: { type: string; success?: (data?: any) => void }) {
  try {
    yield put({ type: LoadingActions.SHOW_LOADING });
    const res: AxiosResponse<any> = yield call(logoutService);
    if (res?.status === EStatusHttp.HTTP_CREATED) {
      action.success?.();
      redirectLogin();
    }
  } catch (error: any) {
    if (error?.response) handleMessage(error?.response);
  } finally {
    yield put({ type: LoadingActions.HIDE_LOADING });
  }
}

function* refreshToken(action: IResponseAction) {
  try {
    yield put({ type: LoadingActions.SHOW_LOADING });
    const res: AxiosResponse = yield call(refreshTokenService);
    if (res) {
      action.success?.();
    }
  } catch (error: any) {
    if (error?.response) handleMessage(error?.response);
  } finally {
    yield put({ type: LoadingActions.HIDE_LOADING });
  }
}

function* changePassword(action: IResponseAction) {
  try {
    yield put({ type: LoadingActions.SHOW_LOADING });
    const res: AxiosResponse = yield call(changePasswordService, action.payload);
    if (res) {
      action.success?.();
      handleMessage(res);
    }
  } catch (error: any) {
    if (error?.response) handleMessage(error?.response);
  } finally {
    yield put({ type: LoadingActions.HIDE_LOADING });
  }
}

export default function* loginSaga() {
  yield takeLatest(AuthenActions.LOGIN, login);
  yield takeLatest(AuthenActions.LOGOUT, logout);
  yield takeLatest(AuthenActions.REFRESH_TOKEN, refreshToken);
  yield takeLatest(AuthenActions.CHANGE_PASSWORD, changePassword);
}
