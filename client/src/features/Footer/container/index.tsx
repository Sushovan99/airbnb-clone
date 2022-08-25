import { Box } from '@mui/material';
import { MapButton } from './MapButton';
import { Footer } from './Footer';
import styles from '@styles/Footer.module.css';

export const FooterContainer: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }} className={styles.footerContainer}>
      <MapButton />
      <Footer />
    </Box>
  );
};
