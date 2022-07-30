import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import { RightGroup } from './RightGroup';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { FilterTab } from './filterTab';
import styles from '../../styles/Navbar.module.css';

export const Navbar: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return isFilterOpen ? (
    <Box
      sx={{
        width: '100vw',
        height: '160px',
        borderBottom: '1px solid var(--border-color)',
        position: 'fixed',
        top: '0',
        zIndex: '8',
      }}
    >
      <nav className={styles.nav}>
        <LeftGroup />
        <FilterTab />
        <RightGroup />
      </nav>
    </Box>
  ) : (
    <Box
      sx={{
        width: '100vw',
        height: '80px',
        borderBottom: '1px solid var(--border-color)',
        position: 'fixed',
        top: '0',
        zIndex: '8',
      }}
    >
      <nav className={styles.nav}>
        <LeftGroup />
        <MidGroup
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
        <RightGroup />
      </nav>
    </Box>
  );
};
