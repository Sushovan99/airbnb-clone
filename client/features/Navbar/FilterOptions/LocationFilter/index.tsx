import { useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleLocation, updateWhereInput } from '@store/feature/filterOptions';
import styles from '../FilterOptions.module.css';

export const LocationFilter: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();
  const isLocationFilterActive = useAppSelector(
    (state) => state.filterSearch.where.isActive
  );

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleLocationSearchBtn = (): void => {
    dispatch(toggleLocation());
    inputRef.current.focus();
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    dispatch(updateWhereInput(e.target.value));
  };

  const handleClearInputBtn = (): void => {
    inputRef.current.value = '';
    setInputValue('');
    dispatch(updateWhereInput(''));
  };
  // Initial commit
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
      onClick={handleLocationSearchBtn}
    >
      <Box className={styles.searchLocationInput} sx={{ flex: 1 }}>
        <h4 className={styles.header}>Where</h4>
        <input
          placeholder="Search destinations"
          value={inputValue}
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
        />
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
