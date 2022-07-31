import { FC, useRef } from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import styles from './FilterOptions.module.css';

export const FilterOptions: FC = () => {
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
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.8fr',
        border: '1px solid var(--border-color)',
        borderRadius: '50px',
        margin: '14px',
        cursor: 'pointer',
      }}
    >
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '50px',
          paddingLeft: '20px',
          paddingY: '10px',
          '&:hover': {
            background: 'var(--border-color)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            gap: '3px',
          }}
        >
          <h4 className={styles.header}>Check in</h4>
          <Typography
            variant="body1"
            sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
          >
            Add dates
          </Typography>
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '50px',
          paddingLeft: '20px',
          paddingY: '10px',
          '&:hover': {
            background: 'var(--border-color)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '3px',
          }}
        >
          <h4 className={styles.header}>Check out</h4>
          <Typography
            variant="body1"
            sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
          >
            Add dates
          </Typography>
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '50px',
          paddingLeft: '20px',
          paddingRight: '8px',
          paddingY: '10px',
          '&:hover': {
            background: 'var(--border-color)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '3px',
          }}
        >
          <h4 className={styles.header}>Who</h4>
          <Typography
            variant="body1"
            sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
          >
            Add Guests
          </Typography>
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
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{
            color: 'white',
            width: 'auto',
            height: 'auto',
            padding: ' 10px 20px',
            borderRadius: '50px',
            fontSize: '15px',
            '&:hover': {
              backgroundColor: 'var(--brand-color)',
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
