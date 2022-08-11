import Box from '@mui/material/Box';
import { RightGroup } from './RightGroup';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { FilterTab } from './FilterTab';
import { FilterOptions } from './FilterOptions/FilterOptions';
import { useAppSelector } from '@store/hooks';
import styles from '@styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const isFilterOpen = useAppSelector(
    (state) => state.filterSearch.isFilterOpen
  );

  return isFilterOpen ? (
    <Box
      sx={{
        width: '100vw',
        height: 'auto',
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
      <Box
        sx={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <FilterOptions />
      </Box>
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
        <MidGroup />
        <RightGroup />
      </nav>
    </Box>
  );
};
