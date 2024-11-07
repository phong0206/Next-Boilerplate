import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/authen';
import { EStatusHttp } from 'enums/authen';
import { globalRouter } from 'hooks/useBase';
import { PATH } from 'constants/path';

export const redirectLogin = () => {
  globalRouter.push(PATH.LOGIN);
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
};

export const redirectDashboard = () => {
  globalRouter.push(PATH.BLANK);
};

export function handleMessage(res: any) {
  const { message, status, statusCode, data, errors } = res.data;
  if (res.status !== 401) {
    switch (status || statusCode) {
      case EStatusHttp.HTTP_OK:
      case EStatusHttp.HTTP_CREATED:
        toast.success(data ? data.message : message);
        break;
      case EStatusHttp.HTTP_NOT_FOUND:
      case EStatusHttp.HTTP_FORBIDDEN:
      case EStatusHttp.HTTP_UNPROCESSABLE_ENTITY:
        toast.error(data ? data.message : message);
        break;
      case EStatusHttp.HTTP_BAD_REQUEST:
        if (errors?.length > 0) {
          errors?.forEach((e: any) => {
            toast.error(e.error);
          });
        } else {
          toast.error(data ? data.message : message);
        }
        break;
      default:
        return;
    }
  }
}
