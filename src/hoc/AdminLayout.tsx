import { Layout } from 'antd';
import useBase from 'hooks/useBase';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/authen';
import { PATH } from 'constants/path';

const AdminLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const HOC = (props: P) => {
    const { router } = useBase();

    useEffect(() => {
      const token = Cookies.get(ACCESS_TOKEN);
      const refreshToken = Cookies.get(REFRESH_TOKEN);
      if (!token && !refreshToken) {
        router.push(PATH.LOGIN);
      }
    }, []);

    return (
      <>
        <Layout>
          <WrappedComponent {...props} />
        </Layout>
      </>
    );
  };
  return HOC;
};

export default AdminLayout;
