import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import { RightGroup } from './RightGroup';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { FilterTab } from './FilterTab';
import { FilterOptions } from './FilterOptions/FilterOptions';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeFilter } from '@store/feature/filterOptions';
import { CustomModal } from '@components/Modal';
import styles from '@styles/Navbar.module.css';
import React from 'react';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFilterOpen = useAppSelector(
    (state) => state.filterSearch.isFilterOpen
  );
  const close = () => {
    dispatch(closeFilter());
  };
  return isFilterOpen ? (
    <CustomModal open={isFilterOpen} direction="down" close={close}>
      <Box
        sx={{
          width: '100vw',
          height: 'auto',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'white',
          position: 'fixed',
          top: '0',
          // zIndex: '8',
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
    </CustomModal>
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
