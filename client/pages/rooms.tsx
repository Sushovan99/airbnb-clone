import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { ThemeProvider } from '@mui/material/styles';
import { Footer } from 'features/index';
import { theme } from '@utils/theme';
import { Provider } from 'react-redux';
import store from '@store/index';

const Rooms: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Rooms page</title>
      </Head>
      <h2>This is a rooms page</h2>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </div>
  );
};

export default Rooms;

Rooms.getLayout = function (page: ReactElement) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {page}
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};
