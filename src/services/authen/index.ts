import axios from 'axios';
import { PATH_API } from 'constants/pathAPI';
import { ILogin } from 'interfaces/authen';
import axiosClient from '..';
import { NEXT_PUBLIC_API_BASE_URL } from '../../constants';
import { IChangePassword } from 'interfaces/changePassword';

export const loginAPI = (params: ILogin) =>
  axios.post(PATH_API.LOGIN, params, {
    baseURL: NEXT_PUBLIC_API_BASE_URL + '/api/v1',
  });

export const logoutService = () => axiosClient.post(PATH_API.LOGOUT);

export const refreshTokenService = (params?: string) =>
  axios.post(
    PATH_API.REFRESH,
    {},
    {
      baseURL: NEXT_PUBLIC_API_BASE_URL + '/api/v1',
      headers: {
        Authorization: 'Bearer ' + params,
      },
    },
  );

export const changePasswordService = (params: IChangePassword) => axiosClient.post(PATH_API.CHANGE_PASSWORD, params);
