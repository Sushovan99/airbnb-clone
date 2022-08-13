import Box from '@mui/material/Box';
import { RightGroup } from './RightGroup';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { FilterTab } from './FilterTab';
import { FilterOptions } from './FilterOptions/FilterOptions';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeFilter, openFilter } from '@store/feature/filterOptions';
import styles from '@styles/Navbar.module.css';
import React from 'react';
import { Zoom } from '@mui/material';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFilterOpen = useAppSelector(
    (state) => state.filterSearch.isFilterOpen
  );
  const close = () => {
    dispatch(closeFilter());
  };
  const open = () => {
    dispatch(openFilter());
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: 'auto',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'white',
        position: 'fixed',
        top: '0',
        zIndex: (theme) => (isFilterOpen ? theme.zIndex.drawer + 1 : 8),
      }}
    >
      <nav className={styles.nav}>
        <LeftGroup />
        {isFilterOpen ? <FilterTab /> : <MidGroup />}
        <RightGroup />
      </nav>

      {isFilterOpen ? (
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
      ) : null}
    </Box>
  );
};
