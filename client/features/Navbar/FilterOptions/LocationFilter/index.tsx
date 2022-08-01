import { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleLocation } from '@store/feature/filterOptions';
import styles from '../FilterOptions.module.css';

// !!Error -> Cannot nest button inside button

export const LocationFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLocationFilterActive: boolean = useAppSelector(
    (state) => state.filterSearch.where.isActive
  );

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleLocationSearchBtn = (): void => {
    inputRef.current.focus();
  };

  const handleClearInputBtn = (): void => {
    inputRef.current.value = '';
  };

  /*
          display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '30px',
        paddingY: '10px',
        height: '100%',
        textAlign: 'left',
        boxShadow: isLocationFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: isLocationFilterActive ? 'none' : 'var(--border-color)',
        },
  */
  const applyBoxShadow = isLocationFilterActive
    ? styles.boxShadow
    : styles.removeShadow;

  const backgroundColor = isLocationFilterActive ? 'white' : 'none';

  return (
    <div
      role="button"
      style={{ background: backgroundColor }}
      className={`${styles.locationSearchBtn} ${applyBoxShadow}`}
      onClick={() => dispatch(toggleLocation())}
    >
      <Box
        className={styles.searchLocationInput}
        onClick={handleLocationSearchBtn}
        sx={{ flex: 1 }}
      >
        <h4 className={styles.header}>Where</h4>
        <input placeholder="Search destinations" type="text" ref={inputRef} />
      </Box>
      <IconButton
        aria-label="clear-input"
        sx={{
          height: 'auto',
          width: 'auto',
          padding: 0,
          marginRight: '8px',
          background: 'var(--background-1)',
          '&:hover': {
            background: 'var(--btn-variant-2)',
          },
        }}
        onClick={handleClearInputBtn}
      >
        <CloseIcon
          style={{
            fontSize: '24px',
            color: 'black',
            padding: '5px',
            borderRadius: '50%',
          }}
        />
      </IconButton>
    </div>
  );
};
