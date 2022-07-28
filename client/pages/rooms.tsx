import Head from 'next/head';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { ThemeProvider } from '@mui/material/styles';
import { Footer } from '@features/index';
import { theme } from '../theme';
const Rooms: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Rooms page</title>
      </Head>
      <h2>This is a rooms page</h2>
    </div>
  );
};

export default Rooms;

Rooms.getLayout = function (page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      {page}
      <Footer />
    </ThemeProvider>
  );
};
