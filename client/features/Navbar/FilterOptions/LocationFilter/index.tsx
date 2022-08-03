import { useRef } from 'react';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleLocation } from '@store/feature/filterOptions';
import styles from '../FilterOptions.module.css';

export const LocationFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLocationFilterActive = useAppSelector(
    (state) => state.filterSearch.where.isActive
  );

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleLocationSearchBtn = (): void => {
    inputRef.current.focus();
  };

  const handleClearInputBtn = (): void => {
    inputRef.current.value = '';
  };

  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '30px',
        paddingY: '10px',
        height: '100%',
        marginRight: '2px',
        textAlign: 'left',
        background: isLocationFilterActive ? 'white' : 'none',
        transform: 'scale(1.02, 1.03)',
        boxShadow: isLocationFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: !isLocationFilterActive ? 'var(--border-color)' : 'white',
        },
      }}
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
      <div
        role="button"
        aria-label="clear-input"
        className={styles.iconBtn}
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
      </div>
    </Button>
  );
};
