import { Provider } from 'react-redux';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import 'styles/globals.css';
import { persistor, store } from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import 'quill/dist/quill.snow.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          closeOnClick={true}
          pauseOnHover={true}
          transition={Bounce}
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </>
  );
};

// turn off all app component
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
