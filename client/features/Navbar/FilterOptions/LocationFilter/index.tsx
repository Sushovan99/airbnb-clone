import { useRef } from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../FilterOptions.module.css';

export const LocationFilter: React.FC = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleLocationSearchBtn = (): void => {
    inputRef.current.focus();
  };

  const handleClearInputBtn = (): void => {
    inputRef.current.value = '';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '30px',
        paddingY: '10px',
        '&:hover': {
          background: 'var(--border-color)',
        },
      }}
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
      <Divider orientation="vertical" variant="middle" flexItem />
    </Box>
  );
};
