import { Box } from '@mui/material';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { RightGroup } from './RightGroup';
import { useAppSelector } from '@store/hooks';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const isTabPanelOpen = useAppSelector(
    (state) => state.tabPanel.isTabPanelOpen
  );

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        '&::after': {
          left: 0,
          boxShadow: 'rgb(0 0 0 / 8%) 0 1px 0',
          transform: 'initial',
          transformOrigin: '50% 0',
          transition: 'transform 250ms ease,opacity 250ms ease',
        },
      }}
      className={`${styles.header} ${
        isTabPanelOpen ? styles.tabPanelOpen : styles.tabPanelClose
      }`}
    >
      <Box className={`${styles.groupContainer} ${styles.mediaQuery}`}>
        <LeftGroup />
        <MidGroup />
        <RightGroup />
      </Box>
    </Box>
  );
};
