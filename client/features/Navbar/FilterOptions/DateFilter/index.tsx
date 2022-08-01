import { Box, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC } from 'react';
import styles from '../FilterOptions.module.css';

export const DateFitler: FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
