import { Box } from '@mui/material';
import { useAppSelector } from '@store/hooks';
import { LittleSearchGroup } from './LittleSearch';
import { BigSearchForm } from './BigSearch';
import styles from './Midgroup.module.css';

export const MidGroup: React.FC = () => {
  const isTabPanelOpen = useAppSelector(
    (state) => state.tabPanel.isTabPanelOpen
  );

  return (
    <Box sx={{ padding: '0 24px', flex: '0 1 auto', minWidth: '348px' }}>
      <Box
        sx={{
          '&::before': { display: 'flex', content: '""' },
          '&::after': { display: 'flex', content: '""' },
        }}
      >
        <Box
          className={`${styles.littleSearchBase} ${
            styles.littleSearchAnimate
          } ${
            !isTabPanelOpen
              ? styles.littleSearchVisible
              : styles.littleSearchHidden
          }`}
        >
          <LittleSearchGroup />
        </Box>
        <Box
          sx={{
            pointerEvents: isTabPanelOpen ? 'auto' : 'none',
            transition: isTabPanelOpen
              ? 'transform 250ms ease, opacity 200ms ease 100ms, visibility 0ms 200ms'
              : 'none',
          }}
          className={`${styles.expandableSearchBase} ${
            !isTabPanelOpen ? styles.expandableSearchAnimate : ''
          } ${
            isTabPanelOpen
              ? styles.expandableSearchOpen
              : styles.expandableSearchClose
          }`}
        >
          <Box sx={{ position: 'relative', zIndex: 1, paddingBottom: '16px' }}>
            <Box sx={{ display: 'contents' }}>
              <BigSearchForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
