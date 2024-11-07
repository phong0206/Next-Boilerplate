import HomeLayout from 'hoc/HomeLayout';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://taixininvest.com/" />
      </Head>
    </>
  );
};

export default HomeLayout(Home);
