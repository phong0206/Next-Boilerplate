import { toast } from 'react-toastify';
import axios from 'axios';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN, TIMEOUT_REQUEST_MESSAGE, TIMEOUT_REQUEST_SERVER } from 'constants/authen';
import { PATH_API } from 'constants/pathAPI';
import { EStatusHttp } from 'enums/authen';
import { CookieAttributes } from 'interfaces';
import { redirectDashboard, redirectLogin } from '../utils/authen';
import { refreshTokenService } from './authen';
import { NEXT_PUBLIC_API_BASE_URL } from '../constants';
import Message from 'constants/message';

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
  },
  timeout: TIMEOUT_REQUEST_SERVER,
  timeoutErrorMessage: TIMEOUT_REQUEST_MESSAGE,
  baseURL: NEXT_PUBLIC_API_BASE_URL + '/api/v1',
});

const pendingRequests: any[] = [];
let isRefreshing = false;

axiosClient.interceptors.request.use(
  async (config: any) => {
    const token = Cookies.get(ACCESS_TOKEN);
    if (config.url === PATH_API.LOGIN) {
      return config;
    }
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },

  (error) => Promise.reject(error),
);

const refreshToken = async () => {
  try {
    const refreshToken = Cookies.get(REFRESH_TOKEN);

    const { data }: any = await refreshTokenService(refreshToken);
    if (data?.data?.accessToken) {
      const optionsCookie: CookieAttributes = {
        expires: dayjs(data?.data?.expire_time).toDate(),
      };

      Cookies.set(ACCESS_TOKEN, data?.data.accessToken, optionsCookie);
      return data?.data?.accessToken;
    }
    return null;
  } catch (error) {
    return null;
  }
};

axiosClient.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response);
  },
  async (error) => {
    if (error.message === TIMEOUT_REQUEST_MESSAGE) {
      toast.error(Message.error.requestTimeOut);
      return Message.error.requestTimeOut;
    }
    if (error.message === 'Network Error') {
      toast.error('Network connection error');
      if (error.response.status === EStatusHttp.HTTP_UNAUTHORIZED) {
        redirectLogin();
      }
      return error.message;
    }
    if (error && error.response) {
      const { config } = error;
      switch (error.response.status) {
        case EStatusHttp.HTTP_UNAUTHORIZED:
          if (!config.__isRetryRequest) {
            config.__isRetryRequest = true;
            if (isRefreshing) {
              return new Promise((resolve, reject) => {
                pendingRequests.push({ resolve, reject, config });
              });
            }

            isRefreshing = true;

            try {
              const newToken = await refreshToken();
              if (newToken) {
                pendingRequests.forEach(({ resolve, config }) => {
                  resolve(axiosClient(config));
                });
                pendingRequests.length = 0;
                return axiosClient(config);
              } else {
                throw new Error('Refresh error');
              }
            } catch (refreshError) {
              pendingRequests.forEach(({ reject }) => reject(refreshError));
              pendingRequests.length = 0;
              redirectLogin();
            } finally {
              isRefreshing = false;
            }
          } else {
            redirectLogin();
          }
          break;
        case EStatusHttp.HTTP_SERVICE_UNAVAILABLE:
        case EStatusHttp.HTTP_FORBIDDEN:
          redirectDashboard();
          break;
        case EStatusHttp.HTTP_BAD_REQUEST:
          if (error.response.data.status === 90) {
            redirectLogin();
          }
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
