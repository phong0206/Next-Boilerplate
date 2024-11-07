import { Layout } from 'antd';
import React from 'react';

const HomeLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const HOC = (props: P) => {
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

export default HomeLayout;
