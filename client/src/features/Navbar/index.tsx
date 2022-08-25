import Box from '@mui/material/Box';
import { RightGroup } from './RightGroup';
import { LeftGroup } from './LeftGroup';
import { MidGroup } from './MidGroup';
import { FilterTab } from './filterTab';
import { FilterOptions } from './FilterOptions/FilterOptions';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeFilter, openFilter } from '@store/feature/filterOptions';
import styles from '@styles/Navbar.module.css';

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
    <>
      <Box
        sx={{
          width: '100vw',
          height: 'auto',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'white',
          position: 'fixed',
          zIndex: 100,
          top: 0,
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
      {isFilterOpen ? (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgb(0 0 0/25%)',
            height: '100vh',
            zIndex: 90,
          }}
        ></Box>
      ) : null}
    </>
  );
};
