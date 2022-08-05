import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface IAddRemoveButtons {
  value: number;
  isDisabled: boolean;
  addGuest: () => void;
  removeGuest: () => void;
}

export const AddRemoveButtons: React.FC<IAddRemoveButtons> = ({
  addGuest,
  removeGuest,
  value,
  isDisabled,
}: IAddRemoveButtons) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100px',
      }}
    >
      <IconButton
        aria-label="remove"
        sx={{
          color: 'var(--filter-sub-text)',
          border: '1px solid var(--filter-sub-text)',
          padding: '5px',
          '&:disabled': {
            color: 'var(--disabled-btn-color)',
            border: '1px solid var(--disabled-btn-color)',
            cursor: 'not-allowed',
            pointerEvents: 'all !important',
          },
          '&:hover': {
            color: isDisabled
              ? 'var(--disabled-btn-color)'
              : 'var(--text-dark)',
            border: isDisabled
              ? '1px solid var(--disabled-btn-color)'
              : '1px solid var(--text-dark)',
          },
        }}
        disabled={isDisabled}
        onClick={removeGuest}
      >
        <RemoveIcon
          sx={{
            fontSize: '20px',
          }}
        />
      </IconButton>
      <Typography variant="body2" fontWeight="500" color="var(--text-dark)">
        {value}
      </Typography>
      <IconButton
        aria-label="add"
        sx={{
          color: 'var(--filter-sub-text)',
          padding: '5px',
          border: '1px solid var(--filter-sub-text)',
          '&:hover': {
            color: 'var(--text-dark)',
            border: '1px solid var(--text-dark)',
          },
        }}
        onClick={addGuest}
      >
        <AddIcon sx={{ fontSize: '20px' }} />
      </IconButton>
    </Box>
  );
};
