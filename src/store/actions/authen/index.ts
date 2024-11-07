import { IActionCallback } from 'interfaces';
import { ILogin } from 'interfaces/authen';
import * as actions from './type';
import { IChangePassword } from 'interfaces/changePassword';

export const loginAction = (payload: ILogin, action?: IActionCallback) => ({
  type: actions.LOGIN,
  payload,
  success: action?.success,
  error: action?.error,
});

export const changePasswordAction = (payload: IChangePassword, action?: IActionCallback) => ({
  type: actions.CHANGE_PASSWORD,
  payload,
  success: action?.success,
  error: action?.error,
});

export const fetchProfileAction = (action?: IActionCallback) => ({
  type: actions.FETCH_USER_PROFILE,
  success: action?.success,
  error: action?.error,
});

export const logoutAction = (action?: IActionCallback) => ({
  type: actions.LOGOUT,
  success: action?.success,
});

export const refreshTokenAction = (action?: IActionCallback) => ({
  type: actions.REFRESH_TOKEN,
  success: action?.success,
  error: action?.error,
});
