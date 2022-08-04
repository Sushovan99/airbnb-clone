import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const AddRemoveButtons: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <IconButton
        aria-label="remove"
        sx={{
          color: 'var(--filter-sub-text)',
          border: '1px solid var(--filter-sub-text)',
          padding: '5px',
          '&:hover': {
            color: 'var(--text-dark)',
            border: '1px solid var(--text-dark)',
          },
        }}
      >
        <RemoveIcon sx={{ fontSize: '20px' }} />
      </IconButton>
      <Typography variant="body2" fontWeight="500" color="var(--text-dark)">
        0
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
      >
        <AddIcon sx={{ fontSize: '20px' }} />
      </IconButton>
    </Box>
  );
};
