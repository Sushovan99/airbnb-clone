import Image from 'next/image';
import Link from 'next/link';
import Airbnb from '@public/Airbnb.svg';
import AirbnbSmall from '@public/assets/svg/Airbnb-small.svg';
import { Box } from '@mui/material';
import styles from './LeftGroup.module.css';

export const LeftGroup = () => {
  return (
    <Box className={styles.container}>
      <Box
        sx={{
          '&::before': { display: 'flex', content: '""' },
          '&::after': { display: 'flex', content: '""' },
        }}
      >
        <Link href="/">
          <a aria-label="airbnb-logo" className={styles.link}>
            <Box className={styles.bigLogoBox}>
              <Image
                src={Airbnb}
                alt="Airbnb Logo"
                width="100px"
                layout="fixed"
                priority
              />
            </Box>
            <Box className={styles.smallLogoBox}>
              <Image
                src={AirbnbSmall}
                alt="Airbnb Logo"
                width="32px"
                layout="fixed"
                priority
              />
            </Box>
          </a>
        </Link>
      </Box>
    </Box>
  );
};
