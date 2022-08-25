import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { staysActive, experiencesActive } from '@store/feature/tab';
import styles from './Tabs.module.css';

export const Tabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const isStaysActive = useAppSelector((state) => state.tab.stays);
  const isExperiencesActive = useAppSelector((state) => state.tab.experiences);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80px',
      }}
    >
      <Box
        component="div"
        role="tablist"
        aria-label="What can we help you find?"
      >
        <Box
          className={`${styles.firstTwoTabs} ${styles.textColor} ${
            isStaysActive && styles.active
          }`}
        >
          <Button
            role="tab"
            aria-controls="search-tabpanel"
            aria-selected={isStaysActive}
            className={styles.tabBtn}
            onClick={() => dispatch(staysActive())}
          >
            <Box
              className={`${styles.textBox} ${
                isStaysActive && styles.textBoxActive
              }`}
              sx={{ '&:hover': { opacity: isStaysActive ? 1 : 0.65 } }}
            >
              <span className={styles.text}>Stays</span>
            </Box>
          </Button>
          <input type="hidden" value="/homes" />
        </Box>
        <Box
          className={`${styles.firstTwoTabs} ${styles.textColor} ${
            isExperiencesActive && styles.active
          }`}
        >
          <Button
            role="tab"
            aria-controls="search-tabpanel"
            aria-selected={isExperiencesActive}
            className={styles.tabBtn}
            onClick={() => dispatch(experiencesActive())}
          >
            <Box
              className={`${styles.textBox} ${
                isExperiencesActive && styles.textBoxActive
              }`}
              sx={{ '&:hover': { opacity: isExperiencesActive ? 1 : 0.65 } }}
            >
              <span className={styles.text}>Experiences</span>
            </Box>
          </Button>
          <input type="hidden" value="/homes" />
        </Box>
        <Box sx={{ display: 'inline-block' }}>
          <Link href="/">
            <a className={styles.onlineExperience}>
              <Box
                className={`${styles.onlineExperienceBase} ${styles.textColor}`}
              >
                <Box className={styles.onlineExperienceAnimation}>
                  Online Experiences
                </Box>
              </Box>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
