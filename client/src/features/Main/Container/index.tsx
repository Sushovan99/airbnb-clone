import { Box } from '@mui/material';
import { Rooms } from './rooms';
import styles from './Container.module.css';

export const Container: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        background: 'var(--background-white)',
        contain: 'paint layout',
        width: '100%',
      }}
    >
      <Box className={`${styles.mediaQuery}`}>
        <Rooms />
      </Box>
    </Box>
  );
};
