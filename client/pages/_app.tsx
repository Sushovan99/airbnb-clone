import Head from 'next/head';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme } from '@utils/theme';
import { Layout } from 'components/index';
import store from '@store/index';
import { Provider } from 'react-redux';
import createEmotionCache from '@utils/emotion/emotionCache';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '@utils/styletron';

import '@fontsource/be-vietnam-pro/300.css';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <StyletronProvider value={styletron}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StyletronProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
