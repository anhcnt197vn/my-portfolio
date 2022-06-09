import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store';
import '../styles/_globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
