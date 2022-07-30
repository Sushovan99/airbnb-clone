import type { NextPage } from 'next';
import Head from 'next/head';
// import { CustomDrawer } from '../components/Drawer';
import styles from '@styles/Home.module.css';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb</title>
        <meta
          name="description"
          content="A FullStack Airbnb Clone website build for portfolio showcase."
        />
        <meta name="author" content="Sushovan Biswas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
